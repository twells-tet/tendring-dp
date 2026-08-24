const PIN_GATE_CODE = "202705";
const PIN_GATE_SESSION_KEY = "vote2027PinUnlocked";

(function initPinGate() {
    const gate = document.getElementById("pin-gate");
    const form = document.getElementById("pin-gate-form");
    const input = document.getElementById("pin-gate-input");
    const error = document.getElementById("pin-gate-error");

    function unlock() {
        document.body.classList.remove("pin-locked");
        gate.style.display = "none";
        sessionStorage.setItem(PIN_GATE_SESSION_KEY, "true");
    }

    if (sessionStorage.getItem(PIN_GATE_SESSION_KEY) === "true") {
        unlock();
        return;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        if (input.value.trim() === PIN_GATE_CODE) {
            unlock();
        } else {
            error.hidden = false;
            input.select();
        }
    });
})();

function parseCsv(text) {
    const rows = [];
    let row = [];
    let value = "";
    let quoted = false;

    for (let index = 0; index < text.length; index++) {
        const character = text[index];
        if (character === '"') {
            if (quoted && text[index + 1] === '"') {
                value += '"';
                index++;
            } else {
                quoted = !quoted;
            }
        } else if (character === "," && !quoted) {
            row.push(value);
            value = "";
        } else if ((character === "\n" || character === "\r") && !quoted) {
            if (character === "\r" && text[index + 1] === "\n") index++;
            row.push(value);
            if (row.some(cell => cell !== "")) rows.push(row);
            row = [];
            value = "";
        } else {
            value += character;
        }
    }
    if (value || row.length) {
        row.push(value);
        rows.push(row);
    }
    return rows;
}

function formatAmount(value) {
    const sign = value < 0 ? "-" : "";
    return sign + Math.abs(value).toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatDate(value) {
    const text = String(value || "").trim();
    if (!text || text.toLowerCase() === "n/a") return "Not Dated";
    const match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    return match
        ? match[1].padStart(2, "0") + "/" + match[2].padStart(2, "0") + "/" + match[3]
        : text;
}

function createCell(text, className) {
    const cell = document.createElement("td");
    cell.textContent = text;
    if (className) cell.className = className;
    return cell;
}

function initAccountsPage(range) {
    const url =
        "https://docs.google.com/spreadsheets/d/1OS8iu7s0CAD__v1i_2kIOiIGvgmNiRN3KAAI4V9XyaE/gviz/tq?tqx=out:csv&sheet=ACCOUNTS%20TO%2031%20MARCH%202026&range=" +
        encodeURIComponent(range);

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Unable to load accounts.");
            return response.text();
        })
        .then(text => {
            const rows = parseCsv(text).filter(row =>
                !row.some(cell => String(cell || "").trim().toLowerCase() === "cancelled")
            );
            const dated = rows.filter(row => String(row[0] || "").trim() && String(row[0]).trim().toLowerCase() !== "n/a");
            const undated = rows.filter(row => !String(row[0] || "").trim() || String(row[0]).trim().toLowerCase() === "n/a");
            dated.sort((first, second) => {
                const parse = value => {
                    const parts = String(value).split("/");
                    return parts.length === 3
                        ? new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime()
                        : new Date(value).getTime();
                };
                return parse(first[0]) - parse(second[0]);
            });

            const orderedRows = dated.concat(undated);
            const body = document.getElementById("accounts-data-body");
            let totalIn = 0;
            let totalOut = 0;

            orderedRows.forEach(row => {
                const direction = String(row[2] || "").trim();
                const outgoing = ["out", "outgoing"].includes(direction.toLowerCase());
                const amount = Math.abs(Number(String(row[3] || "").replace(/[^0-9.-]/g, "")) || 0);
                if (outgoing) totalOut += amount;
                else totalIn += amount;

                const tableRow = document.createElement("tr");
                tableRow.appendChild(createCell(formatDate(row[0])));
                tableRow.appendChild(createCell(row[1] || ""));
                tableRow.appendChild(createCell(direction));
                tableRow.appendChild(createCell(formatAmount(outgoing ? -amount : amount), "amount"));
                body.appendChild(tableRow);
            });

            document.getElementById("total-in").textContent = formatAmount(totalIn);
            document.getElementById("total-out").textContent = formatAmount(-totalOut);
            document.getElementById("profit-loss").textContent = formatAmount(totalIn - totalOut);
            document.getElementById("transaction-count").textContent =
                orderedRows.length.toLocaleString("en-GB") +
                (orderedRows.length === 1 ? " transaction" : " transactions");
            document.getElementById("accounts-status").hidden = true;
            document.getElementById("accounts-data-table").hidden = false;
        })
        .catch(() => {
            document.getElementById("accounts-status").textContent =
                "The accounts could not be loaded.";
        });
}

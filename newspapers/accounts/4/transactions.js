const transactions = [
    {
        "date":  "07/08/2026",
        "time":  "21:26",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  9.99
    },
    {
        "date":  "07/08/2026",
        "time":  "17:19",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  0.34
    },
    {
        "date":  "07/08/2026",
        "time":  "06:07",
        "direction":  "IN",
        "description":  "Christopher Twells - Loan TSC",
        "amount":  186.01
    },
    {
        "date":  "06/08/2026",
        "time":  "16:47",
        "direction":  "OUT",
        "description":  "PayPal - Pay in 3",
        "amount":  43.40
    },
    {
        "date":  "06/08/2026",
        "time":  "16:11",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS - Chris Twells",
        "amount":  322.09
    },
    {
        "date":  "06/08/2026",
        "time":  "12:53",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  92.52
    },
    {
        "date":  "06/08/2026",
        "time":  "11:27",
        "direction":  "OUT",
        "description":  "PURO VENTURES LTD - 1109864",
        "amount":  204.0
    },
    {
        "date":  "06/08/2026",
        "time":  "10:54",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  890.40
    },
    {
        "date":  "06/08/2026",
        "time":  "09:33",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS - WARWICKSHIRE LAB",
        "amount":  1995.16
    },
    {
        "date":  "06/08/2026",
        "time":  "09:23",
        "direction":  "IN",
        "description":  "Satvir Dosanjh - Rachel Taylor MP",
        "amount":  1995.16
    },
    {
        "date":  "06/08/2026",
        "time":  "08:39",
        "direction":  "OUT",
        "description":  "Christopher Twells",
        "amount":  2.22
    },
    {
        "date":  "06/08/2026",
        "time":  "08:18",
        "direction":  "IN",
        "description":  "Stripe Payments UK Ltd - UNSEAT FARAGE",
        "amount":  2.22
    },
    {
        "date":  "04/08/2026",
        "time":  "10:30",
        "direction":  "OUT",
        "description":  "Royal Mail Group Limited - 686458000/T622409",
        "amount":  441.49
    },
    {
        "date":  "04/08/2026",
        "time":  "10:28",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  0.30
    },
    {
        "date":  "04/08/2026",
        "time":  "10:28",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  441.19
    },
    {
        "date":  "03/08/2026",
        "time":  "12:51",
        "direction":  "OUT",
        "description":  "Unseat Farage",
        "amount":  1.67
    },
    {
        "date":  "03/08/2026",
        "time":  "12:43",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  1.67
    },
    {
        "date":  "03/08/2026",
        "time":  "08:24",
        "direction":  "IN",
        "description":  "TransferWise - CARD CASHBACK",
        "amount":  0.44
    },
    {
        "date":  "30/07/2026",
        "time":  "13:35",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  110.0
    },
    {
        "date":  "30/07/2026",
        "time":  "12:40",
        "direction":  "IN",
        "description":  "M Dyer - 2026-INV-099",
        "amount":  110.00
    },
    {
        "date":  "28/07/2026",
        "time":  "12:39",
        "direction":  "OUT",
        "description":  "Christopher Twells",
        "amount":  2.7
    },
    {
        "date":  "28/07/2026",
        "time":  "12:28",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  2.27
    },
    {
        "date":  "28/07/2026",
        "time":  "08:41",
        "direction":  "OUT",
        "description":  "Agaprintlim - PayPal",
        "amount":  78.50
    },
    {
        "date":  "28/07/2026",
        "time":  "08:41",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  4.50
    },
    {
        "date":  "28/07/2026",
        "time":  "03:16",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  50.00
    },
    {
        "date":  "28/07/2026",
        "time":  "03:15",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  0.00
    },
    {
        "date":  "28/07/2026",
        "time":  "03:10",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  71.07
    },
    {
        "date":  "28/07/2026",
        "time":  "03:05",
        "direction":  "OUT",
        "description":  "SHARP BUSINESS SYSTEMS UK PLC - 80SBS25918",
        "amount":  30.0
    },
    {
        "date":  "28/07/2026",
        "time":  "03:01",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  175.50
    },
    {
        "date":  "27/07/2026",
        "time":  "15:59",
        "direction":  "OUT",
        "description":  "Christopher Twells",
        "amount":  110.0
    },
    {
        "date":  "27/07/2026",
        "time":  "15:59",
        "direction":  "IN",
        "description":  "M Dyer - 2026-INV-099",
        "amount":  110.00
    },
    {
        "date":  "23/07/2026",
        "time":  "18:04",
        "direction":  "OUT",
        "description":  "Christopher Twells - Chris ",
        "amount":  2.01
    },
    {
        "date":  "23/07/2026",
        "time":  "17:37",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  45.83
    },
    {
        "date":  "23/07/2026",
        "time":  "17:07",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  48.00
    },
    {
        "date":  "19/07/2026",
        "time":  "23:17",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  9.36
    },
    {
        "date":  "19/07/2026",
        "time":  "23:15",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  21.57
    },
    {
        "date":  "19/07/2026",
        "time":  "23:15",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  1.00
    },
    {
        "date":  "19/07/2026",
        "time":  "23:15",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  0.00
    },
    {
        "date":  "19/07/2026",
        "time":  "23:14",
        "direction":  "OUT",
        "description":  "GitHub",
        "amount":  0.00
    },
    {
        "date":  "19/07/2026",
        "time":  "23:14",
        "direction":  "IN",
        "description":  "Christopher Twells - Loan TSC",
        "amount":  31.00
    },
    {
        "date":  "10/07/2026",
        "time":  "12:00",
        "direction":  "OUT",
        "description":  "Siemens Financial Services Ltd - A10156847",
        "amount":  421.2
    },
    {
        "date":  "10/07/2026",
        "time":  "11:59",
        "direction":  "IN",
        "description":  "Christopher Twells - Loan TSC",
        "amount":  421.20
    },
    {
        "date":  "06/07/2026",
        "time":  "07:35",
        "direction":  "OUT",
        "description":  "SIEMENS  FINANCIAL SERVICES LTD - 08F48C5C-06072026-1634",
        "amount":  421.20
    },
    {
        "date":  "01/07/2026",
        "time":  "10:03",
        "direction":  "IN",
        "description":  "Christopher Twells - From C Twells",
        "amount":  54.00
    },
    {
        "date":  "30/06/2026",
        "time":  "07:37",
        "direction":  "OUT",
        "description":  "FRANCOTYP POSTALIA - 03A8EE5C-30062026-10013",
        "amount":  54.00
    },
    {
        "date":  "30/06/2026",
        "time":  "21:29",
        "direction":  "OUT",
        "description":  "Christopher Twells - Funds",
        "amount":  285.0
    },
    {
        "date":  "30/06/2026",
        "time":  "11:50",
        "direction":  "IN",
        "description":  "BROADLAND CONS A - MARKED REGISTERS",
        "amount":  285.00
    },
    {
        "date":  "26/06/2026",
        "time":  "12:22",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  142.5
    },
    {
        "date":  "26/06/2026",
        "time":  "12:17",
        "direction":  "IN",
        "description":  "NO.2 ACCOUNT - Anniesland SNP",
        "amount":  142.50
    },
    {
        "date":  "26/06/2026",
        "time":  "06:16",
        "direction":  "OUT",
        "description":  "SHARP BUSINESS SYSTEMS UK PLC - 80SBS25918",
        "amount":  61.59
    },
    {
        "date":  "26/06/2026",
        "time":  "06:11",
        "direction":  "IN",
        "description":  "Christopher Twells - From C Twells",
        "amount":  61.59
    },
    {
        "date":  "12/06/2026",
        "time":  "08:41",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  145.0
    },
    {
        "date":  "12/06/2026",
        "time":  "08:37",
        "direction":  "IN",
        "description":  "RHONDDA CLP - INV 2025- 095",
        "amount":  145.00
    },
    {
        "date":  "11/06/2026",
        "time":  "10:02",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  8.86
    },
    {
        "date":  "11/06/2026",
        "time":  "10:02",
        "direction":  "IN",
        "description":  "Stripe Payments UK Ltd - TRINITY STREET COM",
        "amount":  8.86
    },
    {
        "date":  "10/06/2026",
        "time":  "09:20",
        "direction":  "OUT",
        "description":  "Christopher Twells",
        "amount":  142.5
    },
    {
        "date":  "10/06/2026",
        "time":  "09:20",
        "direction":  "IN",
        "description":  "SHIP CONSTIT CON - MARK REG",
        "amount":  142.50
    },
    {
        "date":  "01/06/2026",
        "time":  "08:32",
        "direction":  "OUT",
        "description":  "Christopher Twells",
        "amount":  3.52
    },
    {
        "date":  "01/06/2026",
        "time":  "08:24",
        "direction":  "IN",
        "description":  "TransferWise - CARD CASHBACK",
        "amount":  3.52
    },
    {
        "date":  "18/05/2026",
        "time":  "12:54",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS",
        "amount":  29.0
    },
    {
        "date":  "18/05/2026",
        "time":  "12:33",
        "direction":  "IN",
        "description":  "VAUGHAN A M - 2025-INV-084-2",
        "amount":  29.00
    },
    {
        "date":  "17/05/2026",
        "time":  "20:53",
        "direction":  "OUT",
        "description":  "Royal Mail Group Limited - 686458000/T621118",
        "amount":  2075.61
    },
    {
        "date":  "11/05/2026",
        "time":  "21:35",
        "direction":  "OUT",
        "description":  "Francotyp-Postalia Ltd",
        "amount":  10.00
    },
    {
        "date":  "11/05/2026",
        "time":  "21:33",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  10.00
    },
    {
        "date":  "08/05/2026",
        "time":  "21:35",
        "direction":  "OUT",
        "description":  "Royal Mail Group Limited - 9075724380",
        "amount":  1034.3
    },
    {
        "date":  "08/05/2026",
        "time":  "21:34",
        "direction":  "IN",
        "description":  "CHRISTOPHER TWELLS - LOAN",
        "amount":  1034.30
    },
    {
        "date":  "08/05/2026",
        "time":  "21:28",
        "direction":  "OUT",
        "description":  "Francotyp-Postalia Ltd",
        "amount":  300.00
    },
    {
        "date":  "08/05/2026",
        "time":  "21:23",
        "direction":  "OUT",
        "description":  "CHRISTOPHER TWELLS - Chris Twells",
        "amount":  2545.0
    },
    {
        "date":  "08/05/2026",
        "time":  "21:22",
        "direction":  "IN",
        "description":  "VAUGHAN A M - 2025-INV-084-2",
        "amount":  2845.00
    }
];

const statementBody = document.getElementById("statement-body");

transactions.forEach(transaction => {
    const row = document.createElement("tr");
    let description = transaction.description;
    if (/christopher twells/i.test(description)) {
        description = transaction.direction === "OUT" ? "Repay Director Loan" : "Director Loan";
    } else if (/unseat farage/i.test(description)) {
        description = "Stripe";
    } else if (/agaprintlim/i.test(description)) {
        description = "SoloPress";
    }
    const values = [
        transaction.date,
        transaction.time,
        transaction.direction,
        description
    ];

    values.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        if (index === 2) {
            cell.className = transaction.direction === "IN" ? "direction-in" : "direction-out";
        }
        row.appendChild(cell);
    });

    const amount = document.createElement("td");
    amount.className = "amount";
    amount.textContent =
        (transaction.direction === "OUT" ? "-" : "") +
        Number(transaction.amount).toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    row.appendChild(amount);
    statementBody.appendChild(row);
});


let transaction1 = {
    type: "personal",
    category: "food",
    amount: 3000,
    description: "lunch"
};

let transaction2 = {
    type: "personal",
    category: "stationary",
    amount: 5000,
    description: "pens, printing sheets, files, pins and stapler"
};

let transaction3 = {
    type: "self",
    category: "tax",
    amount: 9000,
    description: "custom tax"
};

let transarray = [
    transaction1,
    transaction2,
    transaction3
];

// 1. Initialize totals
let totalExpenses = 0;
let personalTotal = 0;
let foodTotal = 0;
let high = 0;
let highest;

// 2. Calculate expenses and find highest transaction
for (let item of transarray) {
    totalExpenses = totalExpenses + item.amount;

    if (item.type === "personal") {
        personalTotal = personalTotal + item.amount;
    }

    if (item.category === "food") {
        foodTotal = foodTotal + item.amount;
    }

    if (item.amount > high) {
        high = item.amount;
        highest = item;
    }
}

// 3. Income and balance
let totalIncome = 20000;
let balance = totalIncome - totalExpenses;

// 4. Final report
console.log("===== PERSONAL FINANCE REPORT =====");

console.log("Total Transactions:", transarray.length);
console.log("Total Income:", totalIncome);
console.log("Total Expenses:", totalExpenses);
console.log("Personal Expenses:", personalTotal);
console.log("Food Expenses:", foodTotal);
console.log("Remaining Balance:", balance);

console.log("Highest Expense:", high);
console.log("Highest Expense Category:", highest.category);
console.log("Highest Expense Description:", highest.description);

console.log("==================================");

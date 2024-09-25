const addExpenseButton = document.querySelector(".add-expense-button"); 
const expenseList = document.querySelector(".expense-list");
const totalExpense = document.querySelector(".total-expense h3");

let expenses = [];
let total = 0;

function renderExpenses() {
    expenseList.innerHTML = expenses.map((expense, index) => `
        <div class="expense-item" data-index="${index}">
            <div class="expense-item-description">${expense.description}</div>
            <div class="expense-item-amount">$${expense.amount.toFixed(2)}</div>
            <button class="delete-expense-button" data-index="${index}">&times;</button>
        </div>
    `).join('');

    totalExpense.textContent = `Total Expense: $${total.toFixed(2)}`;
}

function addExpense() {
    const description = prompt("Enter Expense Description");
    const amount = parseFloat(prompt("Enter Expense Amount"));

    if (description && !isNaN(amount)) {
        const expense = { description, amount };
        expenses.push(expense);
        total += amount;
        renderExpenses();
    }
}

expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-expense-button")) {
        const index = event.target.getAttribute('data-index');
        total -= expenses[index].amount;
        expenses.splice(index, 1);
        renderExpenses();
    }
});

addExpenseButton.addEventListener("click", addExpense);

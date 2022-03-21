class ExpenseService {
    constructor(){
        this.expenses = [];
    }

    getExpenses() {
        return this.expenses;
    }

    createExpense(title, amount) {
        if (!title) {
            throw "The title is not valid";
        }

        if (!amount) {
            throw "The amount is not valid";
        }

        const expense = { title, amount }

        this.expenses.push(expense);
    }
}

const expenseService = new ExpenseService();

module.exports = expenseService;
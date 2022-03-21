const expenseService = require("../services/expenses/expense-service");

class ExpenseController {
    async getExpenses(req, res) {
        const expenses = await expenseService.getExpenses();
        res.render('expenses/expenses-list', { title: 'ExpenseListPage', expenses: expenses });
    }

    getCreateExpense(req, res) {
        res.render("expenses/create-expense");
    }

    createExpense(req, res) {
        if (req.body) {
            const requestBody = req.body;
            const expenseAmount = requestBody.amount;
            const expenseTitle = requestBody.title;

            expenseService.createExpense(expenseTitle, expenseAmount);
        }

        res.render("expenses/create-expense");
    }
}

const expenseController = new ExpenseController();

module.exports = expenseController;
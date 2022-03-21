const EXPENSES = [];

class ExpenseController {

    getExpenses(req, res) {
        res.render('expenses/expenses-list', { title: 'ExpenseListPage', expenses: EXPENSES });
    }

    getCreateExpense(req, res) {
        res.render("expenses/create-expense");
    }

    createExpense(req, res) {
        if (req.body) {
            const requestBody = req.body;
            const expenseAmount = requestBody.amount;
            const expenseTitle = requestBody.title;

            EXPENSES.push({
                title: expenseTitle,
                amount: expenseAmount
            });
        }

        res.render("expenses/create-expense");
    }
}

const expenseController = new ExpenseController();

module.exports = expenseController;
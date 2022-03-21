class ExpenseController {
    getExpenses(req, res) {
        res.render('expenses', { title: 'ExpenseListPage' });
    }
}

const expenseController = new ExpenseController();

module.exports = expenseController;
const { getClient } = require('../../data/get-client');

export class ExpenseService {
    public async getExpenses() {
        const client = await getClient();

        const entries = await client.query('SELECT expense_id, title, description, amount FROM public.expenses;');
        await client.end();

        return entries.rows;
    }

    public createExpense(title, amount) {
        if (!title) {
            throw "The title is not valid";
        }

        if (!amount) {
            throw "The amount is not valid";
        }

        const expense = { title, amount }
    }
}

export const expenseService = new ExpenseService();
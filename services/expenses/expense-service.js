const { Pool, Client } = require('pg')
const { getClient } = require('../../data/get-client');

class ExpenseService {
    constructor() {
        this.expenses = [];
    }

    async getExpenses() {
        const client = await getClient();

        const entries = await client.query('SELECT expense_id, title, description, amount FROM public.expenses;');
        await client.end();

        return entries.rows;
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
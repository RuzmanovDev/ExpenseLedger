import express from 'express';
// const homeController = require('../controllers/home-controller');
import { expenseController } from '../controllers/expense-controller';
import { homeController } from '../controllers/home-controller';

var indexRouter = express.Router();
indexRouter.get('/', homeController.renderIndex);
indexRouter.get('/expenses', expenseController.getExpenses);
indexRouter.get('/create-expense', expenseController.getCreateExpense);

indexRouter.post('/create-expense', expenseController.createExpense);

export { indexRouter };
var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home-controller');
const expenseController = require('../controllers/expense-controller');

router.get('/', homeController.renderIndex);
router.get('/expenses', expenseController.getExpenses);
router.get('/create-expense', expenseController.getCreateExpense);

router.post('/create-expense', expenseController.createExpense);

module.exports = router;

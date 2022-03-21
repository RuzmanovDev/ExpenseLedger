var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home-controller');
const expenseController = require('../controllers/expense-controller');

router.get('/', homeController.renderIndex);
router.get('/expenses', expenseController.getExpenses);

module.exports = router;

const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController');
const validation = require('../middleware/validate.js');
const authenticate = require('../middleware/authenticate.js');

// Route to get an account by ID
router.get(
    '/',
    authenticate.checkAuth,
    accountsController.getAccountById
);

// Route to create a new account
router.post(
    '/',
    authenticate.checkAuth,
    validation.saveAccount,
    accountsController.createAccount
);

// Route to update an account
router.put(
    '/:githubId', 
    authenticate.checkAuth,
    validation.saveAccount,
    accountsController.updateAccount
);

// Route to delete an account
router.delete(
    '/:githubId',
    authenticate.checkAuth,
    accountsController.deleteAccount
);

module.exports = router;
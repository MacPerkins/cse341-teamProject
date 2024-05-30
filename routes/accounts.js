const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/accountsController');

// Route to get all accounts
router.get('/', accountsController.getAllAccounts);

// Route to get an account by ID
router.get('/:id', accountsController.getAccountById);

// Route to create a new account
router.post('/', accountsController.createAccount);

// Route to update an account
router.put('/:id', accountsController.updateAccount);

// Route to delete an account
router.delete('/:id', accountsController.deleteAccount);

// OAuth routes
router.get('/auth/github', accountsController.oauthLogin);
router.get('/auth/github/callback', accountsController.oauthCallback);

/* 
// JWT login route (commented out)
router.post('/login', accountsController.login);
*/

module.exports = router;

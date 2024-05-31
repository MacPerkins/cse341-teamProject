const Account = require('../models/account'); // Import the Account model
const passport = require('passport'); // Import Passport for OAuth
const mongoose = require('mongoose');

// Function to get all accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single account by ID
const getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ message: 'Cannot find account' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to create a new account
const createAccount = async (req, res) => {
  console.log(req.body);
  const account = req.body;

  const newAccount = new Account(account);

  try {
    const savedAccount = await newAccount.save(null, { select: '-__v' });
    res.status(201).json(savedAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to update an account
const updateAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ message: 'Cannot find account' });
    }

    if (req.body.username != null) {
      account.username = req.body.username;
    }
    if (req.body.email != null) {
      account.email = req.body.email;
    }
    // other account fields

    const updatedAccount = await account.save();
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete an account
const deleteAccount = async (req, res) => {
  try {

    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }

    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const account = await Account.findById(objectId);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const deletedAccount = await Account.findByIdAndDelete(objectId);
    console.log(deletedAccount);

    res.status(200).json({ message: 'Deleted account' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to handle OAuth login
const oauthLogin = (req, res, next) => {
  passport.authenticate('github', { scope: ['user:email'] })(req, res, next);
};

// Function to handle OAuth callback
const oauthCallback = (req, res, next) => {
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next);
};

/* 
// JWT implementation (commented out)
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const account = await Account.findOne({ email: req.body.email });
    if (!account) {
      return res.status(404).json({ message: 'Cannot find account' });
    }

    // Verify password (assuming a comparePassword method is available in the Account model)
    if (!account.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: account._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  oauthLogin,
  oauthCallback
  // login (if using JWT)
};

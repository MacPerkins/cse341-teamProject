const Account = require('../models/account'); // Import the Account model
require('dotenv').config;

// Function to get a single account by id
const getAccountById = async (req, res) => {
  try {
    const account = await Account.findOne({ githubId: req.user.githubId });
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
  
  const { fullName, username, email, githubId } = req.body;

  const account = {
    fullName: fullName,
    username: username,
    email: email,
    githubId: githubId
  };

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

  const update = req.body;

  try {
    const account = await Account.findOne({ githubId: req.params.githubId });
    if (account == null) {
      return res.status(404).json({ message: 'Cannot find account' });
    }

    const updatedAccount = await Account.findOneAndUpdate({ githubId: req.params.githubId }, update, { new: true });
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to delete an account
const deleteAccount = async (req, res) => {
  try {

    const account = await Account.findOne({ githubId: req.params.githubId });
    if (account == null) {
      return res.status(404).json({ message: 'Cannot find account' });
    }

    const deletedAccount = await Account.findOneAndDelete({ githubId: req.params.githubId });
    console.log(deletedAccount);

    res.status(200).json({ message: 'Deleted account' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
}

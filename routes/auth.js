const express = require('express');
const passport = require('passport');
const github = require('../middleware/github');
const authController = require('../controllers/authController');

passport.use(github);

const router = express.Router();

router.get('/', (req, res) => {
    res.send(req.user);
});

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/api-docs' }),
    (req, res) =>  res.redirect('/'));

router.get('/logout', authController.logout);

module.exports = router;
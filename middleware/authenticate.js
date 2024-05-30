const isAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json('You do not have access.');
  }
  next();
};

module.exports = { isAuthenticated };


// This is the code I was playing around with to do the Authentication

// const passport = require('passport');
// const GitHubStrategy = require('passport-github2').Strategy;
// const Account = require('../models/account');

// // Configure Passport with GitHub strategy
// passport.use(new GitHubStrategy({
//   clientID: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/accounts/auth/github/callback'
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     let account = await Account.findOne({ githubId: profile.id });
//     if (!account) {
//       account = new Account({
//         username: profile.username,
//         email: profile.emails[0].value,
//         githubId: profile.id
//       });
//       await account.save();
//     }
//     return done(null, account);
//   } catch (error) {
//     return done(error, null);
//   }
// }));

// passport.serializeUser((account, done) => {
//   done(null, account.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const account = await Account.findById(id);
//     done(null, account);
//   } catch (error) {
//     done(error, null);
//   }
// });

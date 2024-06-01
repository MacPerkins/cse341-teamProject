const GitHubStrategy = require('passport-github2').Strategy;
const Account = require('../models/account');

module.exports = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {

    Account.findOne({githubId: profile.id }).then((data, err) => {

      if (!data) return Account.create({
        fullName: profile.displayName,
        username: profile.username,
        githubId: profile.id,
        email: profile._json.email
      }).then((data, err) => {
        return done(null, data);
      });

      else return done(null, data);
    });
  }
);
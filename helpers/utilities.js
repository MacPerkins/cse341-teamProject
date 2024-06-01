const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware to check token validity
const checkJWTToken = (req, res, next) => {
    if (req.cookies.jwt) {
     jwt.verify(
      req.cookies.jwt,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
       if (err) {
        req.flash("Please log in");
        res.clearCookie("jwt");
        return res.redirect("/accounts/login");
       }
       res.locals.account = account;
       res.locals.loggedin = 1;
       next()
      })
    } else {
     next()
    }
}

const checkLogin = (req, res, next) => {
    if (res.locals.loggedin) {
      next()
    } else {
      req.flash("notice", "Please log in.");
      return res.redirect("/accounts/login");
    }
}

module.exports = {
    checkJWTToken,
    checkLogin
}
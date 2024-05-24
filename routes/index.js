const passport = require("passport");

const router = require("express").Router();

router.use('/', require('./swagger'));

router.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello World");
});

router.use('/movies', require('./movies'));   // Movies Route

// router.use('/shows', require('./shows'));    //Shows Route

// router.get('/login', passport.authenticate('github'), (req, res) => {});

// router.get('/logout', function(req, res, next) {
//   req.logOut(function(err) {
//     if (err) { return next(err); }
//     res.redirect('/');
//   });
// });

module.exports = router;

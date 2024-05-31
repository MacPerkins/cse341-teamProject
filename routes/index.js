// const passport = require('passport');

const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  //#swagger.tags=['Hello World']
  res.send('Hello World');
});

//Movies Route

router.use('/movies', require('./movies'));

//Shows Route

router.use('/shows', require('./shows'));

//Watch-Lists Route

router.use('/watch-list', require('./watch_lists'));

//Accounts Route

router.use('/accounts', require('./accounts'));

// router.get('/login', passport.authenticate('github'), (req, res) => {});

// router.get('/logout', function(req, res, next) {
//   req.logOut(function(err) {
//     if (err) { return next(err); }
//     res.redirect('/');
//   });
// });

module.exports = router;

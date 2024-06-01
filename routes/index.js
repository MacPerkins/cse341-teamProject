const passport = require('passport');
const router = require('express').Router();

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  //#swagger.tags=['Hello World']
  const message = req.user ? `Hello, ${req.user.fullName}` : 'Hello, please log in';
  res.send(message);
});

// Movies Route
router.use('/movies', require('./movies'));

// Shows Route
router.use('/shows', require('./shows'));

// Watch-Lists Route
router.use('/watch-list', require('./watch_lists'));

// Accounts Route
router.use('/accounts', require('./accounts'));

// Authorization Route
router.use('/auth', require('./auth'));

module.exports = router;
const passport = require("passport");

const router = require("express").Router();

// router.use('/', require('./swagger'));

router.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello World");
});

// router.get("/", (req, res) => {
//   Movie.find().then(movies => {
//       res.status(200).json(movies)
//   }).catch(err => {
//       res.status(500).json({message: 'an error occurred', error: err})
//   })
// })


router.use('/movies', require('./movies'));

// router.use('/shows', require('./shows'));

// router.get('/login', passport.authenticate('github'), (req, res) => {});

// router.get('/logout', function(req, res, next) {
//   req.logOut(function(err) {
//     if (err) { return next(err); }
//     res.redirect('/');
//   });
// });

module.exports = router;

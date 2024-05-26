const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const validation = require('../middleware/validate.js');

// GET REQUESTS
router.get('/', moviesController.getAllMovies);
router.get('/:id', moviesController.getMovieById);

// POST REQUEST
router.post(
    '/',
    validation.saveMovie,
    moviesController.createMovie
);

// PUT REQUEST
router.put(
    '/:id',
    validation.saveMovie,
    moviesController.updateMovie
);

// DELETE REQUEST
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;

const Movie = require('../models/movie'); // Ensure you have a Movie model

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single movie
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ movieId: req.params.movieId });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new movie
exports.createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a movie
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ movieId: req.params.movieId });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    Object.assign(movie, req.body);
    await movie.save();
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ movieId: req.params.movieId });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    await movie.remove();
    res.status(200).json({ message: 'Deleted Movie' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

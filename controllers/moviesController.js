const Movie = require('../models/movie'); // Ensure you have a Movie model

// Get all movies
const getAllMovies = async (req, res) => {
  //#swagger.tags=['Movies']
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single movie
const getMovieById = async (req, res) => {
  //#swagger.tags=['Movies']
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  //#swagger.tags=['Movies']

  // const movie = req.body;
  const movie = {
    movieId: req.body.movieId,
    title: req.body.title,
    director: req.body.director,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    rating: req.body.rating,
    youtubeTrailer: req.body.youtubeTrailer,
    reviewRating: req.body.reviewRating,
    duration: req.body.duration,
    language: req.body.language
  }
  
  const newMovie = new Movie(movie);

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {

  // const update = req.body;

  const update = {
    movieId: req.body.movieId,
    title: req.body.title,
    director: req.body.director,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    rating: req.body.rating,
    youtubeTrailer: req.body.youtubeTrailer,
    reviewRating: req.body.reviewRating,
    duration: req.body.duration,
    language: req.body.language
  };

  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, update, { new: true });
    
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
    console.log(deletedMovie);
    
    res.status(200).json({ message: 'Deleted Movie' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { 
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie 
};
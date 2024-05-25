const Movie = require('../models/movie'); // Ensure you have a Movie model
const mongoose = require('mongoose');

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
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const movie = await Movie.findById(objectId);
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
  console.log(req.body);
  const movie = req.body;

  const newMovie = new Movie(movie);

  try {
    const savedMovie = await newMovie.save(null, { select: '-__v' });
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {

  const update = req.body;
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const movie = await Movie.findById(objectId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    const updatedMovie = await Movie.findByIdAndUpdate(objectId, update, { new: true });
    
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const movie = await Movie.findById(objectId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const deletedMovie = await Movie.findByIdAndDelete(objectId);
    console.log(deletedMovie);
    
    res.status(200).json({ message: 'The movie was deleted successfully.' });
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
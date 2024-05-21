const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  director: String,
  genre: String,
  releaseYear: Number,
  rating: String,
  youtubeTrailer: String,
  reviewRating: Number,
  duration: String,
  language: String
});

module.exports = mongoose.model('Movie', movieSchema);

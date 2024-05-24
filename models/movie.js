const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    unique: true
  },
  title: {
    type: String,
  },
  director: String,
  genre: String,
  releaseYear: Number,
  rating: String,
  youtubeTrailer: String,
  reviewRating: Number,
  duration: String,
  language: String
},
  { collection: 'movies' }
);

module.exports = mongoose.model('Movie', movieSchema);

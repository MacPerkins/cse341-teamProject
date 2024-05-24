const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
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

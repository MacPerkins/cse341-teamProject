const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    title: { type: String, required: true },
    director: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: String, required: true },
    youtubeTrailer: { type: String, required: true },
    reviewRating: { type: Number, required: true },
    duration: { type: String, required: true },
    language: { type: String, required: true }
  },
  { collection: 'movies' }
);

module.exports = mongoose.model('Movie', movieSchema);

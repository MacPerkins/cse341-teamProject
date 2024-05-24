const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  director: String,
  genre: String,
  releaseYear: Number,
  rating: String,
  youtubeTrailer: String,
  reviewRating: Number,
  seasons: Number,
  language: String
},
  { collection: 'shows' }
);

module.exports = mongoose.model('Show', showSchema);
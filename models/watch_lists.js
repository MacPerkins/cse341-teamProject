const mongoose = require('mongoose');

const watchListSchema = new mongoose.Schema({
  username: String,
  media_type: String,
  title: String,
  added_date: String,
  watched: Boolean,
},
  { collection: 'watch_list' }
);

module.exports = mongoose.model('WatchList', watchListSchema);

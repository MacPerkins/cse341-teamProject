const mongoose = require('mongoose');

const watch_listSchema = new mongoose.Schema({
  username: String,
  media_type: String,
  title: String,
  added_date: String,
  watched: Boolean,
},
  { collection: 'watch_list' }
);

module.exports = mongoose.model('Watch_list', watch_listSchema);

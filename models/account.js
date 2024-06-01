const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    fullName: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    githubId: {
      type: String,
      unique: true,
    }
},
  { collection: 'accounts' }
);

module.exports = mongoose.model('Account', accountSchema);

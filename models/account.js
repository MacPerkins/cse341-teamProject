const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        
      },
      password: {
        type: String,
      }
},
  { collection: 'accounts' }
);

module.exports = mongoose.model('Account', accountSchema);

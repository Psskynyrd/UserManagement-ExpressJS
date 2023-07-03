const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false
  },
  birthDate: {
    type: Date,
    required: false,
    // default: new Date("dd/MM/yyyy")
  },
  image: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
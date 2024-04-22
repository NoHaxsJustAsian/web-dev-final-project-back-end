const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
  }, {
    timestamps: true,
  });
  
const User = mongoose.model('User', userSchema);
  
module.exports = User;

//example of signing up a user
const { user, error } = await supabase.auth.signUp({
    email: 'user@example.com',
    password: 'password'
  });
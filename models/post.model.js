const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    Name: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, trim: true, minlength: 3 },
    password: { type: String, required: true, trim: true, minlength: 3},
  
},

);
module.exports = mongoose.model('User', userSchema);
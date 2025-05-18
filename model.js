// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const validator = require('validator');

// const userSchema = new mongoose.Schema({
//   // Required Fields
//   username: {
//     type: String,
//     required: [true, 'Username is required'],
//     unique: true,
//     trim: true,
//     minlength: [3, 'Username must be at least 3 characters'],
//     maxlength: [30, 'Username cannot exceed 30 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     validate: [validator.isEmail, 'Please provide a valid email']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [8, 'Password must be at least 8 characters'],
//     select: false  // Never return password in queries
//   },
//   passwordConfirm: {
//     type: String,
//     required: [true, 'Please confirm your password'],
//     validate: {
//       validator: function(el) {
//         return el === this.password;
//       },
//       message: 'Passwords do not match!'
//     }
//   },

//   // Optional Fields
//   role: {
//     type: String,
//     enum: ['user', 'admin', 'moderator'],
//     default: 'user'
//   },
//   active: {
//     type: Boolean,
//     default: true,
//     select: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Indexes for faster querying
// userSchema.index({ email: 1 }, { unique: true });
// userSchema.index({ username: 1 }, { unique: true });
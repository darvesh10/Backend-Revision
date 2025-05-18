// // Check if password is correct
// userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
//     return await bcrypt.compare(candidatePassword, userPassword);
//   };
  
//   // Generate a password reset token (example)
//   userSchema.methods.createPasswordResetToken = function() {
//     const resetToken = crypto.randomBytes(32).toString('hex');
//     this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
//     return resetToken;
//   };
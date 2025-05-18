// Hash password before saving
// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
    
//     this.password = await bcrypt.hash(this.password, 12);
//     this.passwordConfirm = undefined; // Remove after validation
//     next();
//   });
  
//   // Update 'updatedAt' on document updates
//   userSchema.pre('save', function(next) {
//     this.updatedAt = Date.now();
//     next();
//   });
  
//   // Filter out inactive users in queries
//   userSchema.pre(/^find/, function(next) {
//     this.find({ active: { $ne: false } });
//     next();
//   });
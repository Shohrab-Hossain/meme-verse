// Node Module
const mongoose              = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');


// Creating structure for Collections, which will be used in Database 

// User Schema
const userSchema = mongoose.Schema({
    username: String,
    password: String
})

userSchema.plugin(passportLocalMongoose);  // this initialize 'userSchema' with Passport Functionality

/* userSchema.methods.validPassword = function(password) {  // this function will check password validity while logging in.
    //return ( this.password === pwd );
    let testhash = crypto.createHash('md5').update(password + this.salt).digest("hex");
    return (testhash === this.password);
}; */

// User Model
const User = mongoose.model('User', userSchema);


// exporting this module
module.exports = User;
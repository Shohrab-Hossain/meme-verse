// |-------------------------------------------------------------------|
// |     REACT API                                                     |
// |-------------------------------------------------------------------|


// Node Module
const express  = require('express'),
      passport = require('passport'),
      router   = express.Router({ mergeParams: true });
    
    
// Customized Module
const middleware  = require('../modules/middleware'),                         // this module contains middlewares
      User        = require('../modules/MongoDB/mongoose-schema/user');       // this module contains user Schema and Model with passport functionality




// |-------------------------------------------------------------------|
// |    INITIATING ROUTE                                               |
// |-------------------------------------------------------------------|


// LOGIN-STATUS route
router.post('/isloggedin', function(req, res){
  res.send([req.user, req.isAuthenticated()] );
})


// REGISTER route
router.post('/register', function(req, res){
  var password = req.body.password,
      newUser  = new User({username: req.sanitize(req.body.username)});
  
  User.register(newUser, password, function(error, createdUser){
    if (error) return res.send([req.user, { catagory: 'error', title: 'Sign up failed', message: error.message, }]);

    passport.authenticate('local')(req, res, function(){
      res.send([{_id:req.user._id, username: req.user.username}, { catagory: 'success', title: 'Sign up successful', message: `Welcome! ${req.user.username.toUpperCase()}, your registration is completed successfully.`,}]);
    })
  })
})


// LOG-IN route
router.post('/login', function (req, res, next){
  passport.authenticate('local', function(error, user, info){
    if (error){  // somthing goes wrong. 
      return res.send([req.user, { catagory: 'error', title: `Log in failed`, message: error,}]);
    }
    
    if (!user){  // authentication failed.
      if (info.name === 'IncorrectUsernameError'){  // Username' not found.
        return res.send([req.user, { catagory: 'error', title: `Log in failed`, message: 'No account found with this credentials',}]);
      } else {  // 'Username' found but 'Password' mismatched.
        return res.send([undefined, { catagory: 'error', title: `Credentials mismatched`, message: info.message,}]);
      }
    }
    
    // this is manual log-in, which will save user in 'req'. When using Callback, this manual log-in is required.
    req.logIn(user, function (error){  // authentication success.
      if (error){  // error occur while manually logging in user
        return res.send([req.user, { catagory: 'error', title: `Check the error.`, message: error,}]);
      }
      
      // complete authentication success.
      return res.send([{_id:req.user._id, username: req.user.username}, { catagory: 'success', title: 'Log in successful', message: `Welcome! ${req.user.username.toUpperCase()}, You are logged in.`,}]);
    })
  }) (req, res, next);
})


// LOG-OUT route
router.get('/logout', middleware.loginGateway, function(req,res){
  req.logOut();
  res.send([req.user, {catagory: 'success', title: 'Log out complete', message: 'You are succcessfully logged out.'}]);
}) 

// CHANGE-PASSWORD route
router.get('/change-password', middleware.loginGateway, function(req,res){
  User.changePassword(req.body.password, function(error, user){
    if (error) return res.send({ catagory: 'error', title: 'Password reset failed', message: error,});
    res.send([req.user, { catagory: 'success', title: 'Password reset', message: `Password has beeen successfully reset.`,}]);
  })
}) 

// SET-PASSWORD route
router.get('/set-password', middleware.loginGateway, function(req,res){
  User.setPassword(req.body.password, function(error, user){
    if (error) return res.send({ catagory: 'error', title: 'Password change failed', message: error,});
    res.send([req.user, { catagory: 'success', title: 'Password changed', message: `New password successfully set up.`,}]);
  })
}) 



// |-------------------------------------------------------------------|
// |    EXPORTING THE ROUTE                                            |
// |-------------------------------------------------------------------|

module.exports = router;

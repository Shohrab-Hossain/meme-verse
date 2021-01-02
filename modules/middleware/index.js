// Customized Module
var Collection  = require('../MongoDB/mongoose-schema/instagram');    // this module contains database Schema and Model

// Creating structure for Collections, to be used in Database 
var Post     = Collection.Post,
    Comment  = Collection.Comment,
    React    =  Collection.React;


// MIDDLEWARE goes here
middleware = {};

middleware.getCurrentUser = function (req, res, next){  // this function provides information about currentUser and this function should be called after 'passport' initialization
  res.locals.currentUser = req.user;
  next();
}

middleware.loginGateway = function(req, res, next){  // this function checks log-in status and redirect to login page if not logged-in
  if(req.isAuthenticated()){
    return next();
  } else {
    /* req.flash('error', 'You need to Log-in first.'); */
    res.send({
      catagory: 'error',
      title: 'You are not authenticated.',
      message: '',
    });
}
}

middleware.CheckOwnership =  function(req, res, next){
  Post.findById(req.params.id, function(err, retrivedData){
    if(err){
      req.flash('error', err.message);
      res.redirect('/homepage/' + req.params.id);
    } else {
      if(retrivedData.author.id.equals(req.user._id)){
          next();
      } else {
        req.flash('warning', 'Access denied! You do not have permission for this operation.');
        res.redirect('/homepage/' + req.params.id);
      }
    }
  });
}

middleware.CheckOwnership_comment = function(req, res, next){
  Comment.findById(req.params.cm_id, function(err, retrivedData){
    if(err){
      req.flash('error', err.message);
      res.redirect('/homepage/' + req.params.id)
    } else {
      if(retrivedData.author.id.equals(req.user._id)){
        next();
      } else {
        req.flash('warning', 'Access denied! You do not have permission for this operation.');
        res.redirect('/homepage/' + req.params.id)
      }
    }
  });
}


module.exports = middleware;
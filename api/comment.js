// |-------------------------------------------------------------------|
// |     COMMENT API                                                   |
// |-------------------------------------------------------------------|


// Node Module
const express  = require('express'),
      router   = express.Router({ mergeParams: true });
    
    
// Customized Module
const middleware  = require('../modules/middleware'),                         // this module contains middlewares
      Collection  = require('../modules/MongoDB/mongoose-schema/instagram'),  // this module contains database Schema and Model
      User        = require('../modules/MongoDB/mongoose-schema/user');       // this module contains user Schema and Model with passport functionality


// Creating structure for Collections, to be used in Database 
const Post    = Collection.Post,
      Comment = Collection.Comment,
      React   = Collection.React;




// |-------------------------------------------------------------------|
// |    INITIATING ROUTE                                               |
// |-------------------------------------------------------------------|


// CREATE route
router.post('/api/post/:id/comment', middleware.loginGateway, function(req, res){
  let id           = req.params.id,
      update_entry = {
        text   : req.sanitize(req.body.text.trim()),
        author : { id : req.user._id, },
        authorUsername: req.user.username,
      }

  // retriving details by ID
  Post.findById(id, function(error, retrivedPost){
    if(error){
      console.log(partition + 'Failed to read post in database : Posts! \nError: ' + err);
      res.send({ catagory: 'error', title: 'Failed to read post', message: error, });
    } else {
      // Creating comment
      Comment.create(update_entry, function(error, retrivedComment){
        if(error){
          console.log(partition + 'Failed to add new comment in database : Comments! \nError: ' + err);
          res.send({ catagory: 'error', title: 'Failed to create comment', message: error, });
        } else {
          // Adding comment to post
          retrivedPost.comments.push(retrivedComment);
          retrivedPost.save(function(error, retrivedData){
            if(error){
              res.send({ catagory: 'error', title: 'Failed to save comment in post', message: error, });
            } else {
              res.send([retrivedData, req.user]);
            }
          });  
        }
      });
    }
  });
})


// EDIT route
router.get('/api/post/:id/comment/:cm_id/edit', middleware.loginGateway, middleware.CheckOwnership_comment, function(req, res){
  let id    = req.params.id,
      cm_id = req.params.cm_id;
  
  Comment.findById(cm_id, function(error, retrivedComment){
    if(error){
      res.send({ catagory: 'error', title: 'Failed to read comment', message: error, });
    } else {
      res.send([retrivedComment, req.user]);
    }
  })
})


// UPDATE route
router.put('/api/post/:id/comment/:cm_id', middleware.loginGateway, middleware.CheckOwnership_comment, function(req, res){
  let id           = req.params.id,
      cm_id        = req.params.cm_id,
      update_entry = {
        text   : req.sanitize(req.body.text.trim()),
        author : {
          id      : req.user._id,
        },
        authorUsername: req.user.username,   
      }

  Comment.findByIdAndUpdate(cm_id, update_entry, function(error, retrivedComment){
      if(error){
          res.send({ catagory: 'error', title: 'Failed to update comment', message: error, });
      } else {
        res.send([retrivedComment, req.user]);
      }
  })
})


// DELETE route
router.delete('/api/post/:id/comment/:cm_id', middleware.loginGateway, middleware.CheckOwnership_comment, function(req, res){
  Comment.findByIdAndRemove(req.params.cm_id, function(error, retrivedComment){
    if(error){
      res.send({ catagory: 'error', title: 'Failed to delete comment', message: error, });
    } else {
      res.send([retrivedComment, req.user]);
    }
  })
})




// |-------------------------------------------------------------------|
// |    EXPORTING THE ROUTE                                            |
// |-------------------------------------------------------------------|

module.exports = router;




// variable for consol log message
var partition = '=======================================\n'
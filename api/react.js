// |-------------------------------------------------------------------|
// |     REACT API                                                     |
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
router.post('/api/post/:id/react', middleware.loginGateway, function(req, res){
  let id           = req.params.id,
      update_entry = {
        reaction : req.sanitize(req.body.reaction),
        author   : req.user._id,
        authorUsername: req.user.username,
      }

  // retriving details by ID
  Post.findById(id).populate('author').populate('reacts').exec(function(error, retrivedPost){
    if(error){
      console.log(partition + 'Failed to read post in database : Posts! \nError: ' + err);
      res.send([retrivedPost, { catagory: 'error', title: 'Failed to read post', message: error, }]);
    } else {
      // Creating react
      React.create(update_entry, function(error, retrivedReact){
        if(error){
          console.log(partition + 'Failed to add new comment in database : Comments! \nError: ' + err);
          res.send([retrivedReact, { catagory: 'error', title: 'Failed to create react', message: error, }]);
        } else {
          // Adding react to post
          retrivedPost.reacts.push( retrivedReact);
          retrivedPost.save(function(error, retrivedData){
            if(error){
              res.send([retrivedData, { catagory: 'error', title: 'Failed to save react in post', message: error, }]);
            } else {
              res.send([retrivedData, {catagory: 'success', title: 'React added successfully', message: 'React has successfully benn added.'}]);
            }
          });  
        }
      });
    }
  });
})


/* // EDIT route
router.get('/api/post/:id/react/:rt_id/edit', middleware.loginGateway, middleware.CheckOwnership_comment, function(req, res){
  var id    = req.params.id,
      rt_id = req.params.rt_id;
  
  React.findById(rt_id, function(error, retrivedReact){
    if(error){
      res.send({ type: 'error', message: 'Failed to read comment.', serverMessage: error, });
    } else {
      res.send(retrivedReact);
    }
  })
}) */


// UPDATE route
router.put('/api/post/:id/react/:rt_id', middleware.loginGateway, function(req, res){
  let id           = req.params.id,
      rt_id        = req.params.rt_id,
      update_entry = {
        reaction : req.sanitize(req.body.text.trim()),
        author   : { id : req.user._id, },
        authorUsername: req.user.username,   
      }

  React.findByIdAndUpdate(rt_id, update_entry, function(error, retrivedReact){
      if(error){
          res.send({ catagory: 'error', title: 'Failed to update react', message: error, });
      } else {
        res.send([retrivedReact, req.user]);
      }
  })
})


// DELETE route
router.delete('/api/post/:id/react/:rt_id', middleware.loginGateway, function(req, res){
  React.findByIdAndRemove(req.params.rt_id, function(error, retrivedReact){
    if(error){
      res.send([retrivedReact, { catagory: 'error', title: 'Failed to delete react', message: error, }]);
    } else {
      res.send([retrivedReact, { catagory: 'success', title: 'React delete', message: 'React has been successfully removed', }]);
    }
  })
})




// |-------------------------------------------------------------------|
// |    EXPORTING THE ROUTE                                            |
// |-------------------------------------------------------------------|

module.exports = router;




// variable for consol log message
var partition = '=======================================\n'
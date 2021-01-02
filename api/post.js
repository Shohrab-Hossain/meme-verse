// |-------------------------------------------------------------------|
// |     POST API                                                      |
// |-------------------------------------------------------------------|


// Node Module
const express  = require('express'),
      fs       = require('fs'),
      multer   = require('multer'),
      router   = express.Router({ mergeParams: true });
    
    
// Customized Module
const middleware  = require('../modules/middleware'),                         // this module contains middlewares
      Collection  = require('../modules/MongoDB/mongoose-schema/instagram'),  // this module contains database Schema and Model
      User        = require('../modules/MongoDB/mongoose-schema/user');       // this module contains user Schema and Model with passport functionality


// Creating structure for Collections, to be used in Database 
const Post    = Collection.Post,
      Comment = Collection.Comment,
      React   = Collection.React;


// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })




// |-------------------------------------------------------------------|
// |    INITIATING ROUTE                                               |
// |-------------------------------------------------------------------|


// INDEX Route
router.get('/api/post', function(req, res){
  Post.find({}).populate('author').populate('reacts').exec(function(error, retrivedData){
    if(error){
      console.log(partition + 'Failed to read database : Post! \nError: ' + error);
      res.send({
        catagory: 'error',
        title: 'Failed to read all posts.',
        message: error,
      });
    } else {
      res.send([retrivedData, req.user]);
    }
  })
})


// CREATE route
router.post('/api/post',  upload.single('image'), middleware.loginGateway, function(req, res){
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString('base64');

  // Define a JSONobject for the image attributes for saving to database
  let new_entry = {
    caption : req.sanitize(req.body.caption.trim()),
    image   : new Buffer(encode_image, 'base64'),
    contentType: req.file.mimetype,
    author  : req.user._id,
  }
  
  // Adding new_entry at collection: "test" in Database: "beautifulbds" 
  Post.create(new_entry, function(error, newPost){
    if(error){
      console.log(partition + 'Failed to add new Post in database : Post \nError: ' + error);
      res.send({
        catagory: 'error',
        title: 'Failed to create new post.',
        message: error,
      });
    } else {
      res.send([newPost, {catagory: 'success', title: 'Post created', message: 'Post has been created successfully'}]);
    }
  })
})


// SHOW route
router.get('/api/post/:id', function(req, res){
  Post.findById(req.params.id).populate('author').populate('comments').populate('reacts').exec(function(error, retrivedData){
    if(error){
      console.log(partition + 'Failed to read specific post from database : Post! \nError: ' + error);
      res.send({
        catagory: 'error',
        title: 'Failed to read post.',
        message: error,
      });
    } else {
      res.send([retrivedData, req.user]);
    }
  })
})


/* // EDIT route
router.get('/api/post/:id/edit', middleware.loginGateway, middleware.CheckOwnership, function(req, res){
  var id = req.params.id;

  Post.findById(id, function(error, retrivedData){
    if(error){
      res.send({
        type: 'error',
        message: 'Failed to read post.',
        serverMessage: error,
      });
    } else {
      res.send(retrivedData);
    }
  });
}) */


// UPDATE route
router.put('/api/post/:id', middleware.loginGateway, middleware.CheckOwnership, function(req, res){
  let id           = req.params.id,
      update_entry = {
        caption : req.sanitize(req.body.caption.trim()),
      }

  Post.findByIdAndUpdate(id, update_entry, function(err, retrivedData){
    if(err){
      console.log(partition + 'Failed to update an entry in database : Post! \nError: ' + error);
      res.send({
        catagory: 'error',
        title: 'Failed to Update post.',
        message: error,
      });
    } else {
      res.send([retrivedData, req.user]);
    }
  })
})


// DELETE route
router.delete('/api/post/:id', middleware.loginGateway, middleware.CheckOwnership, function(req, res){
  Post.findByIdAndDelete(req.params.id, function(error, retrivedData){
    if(error){
      res.send({
        catagory: 'error',
        title: 'Failed to Delete post.',
        message: error,
      });
    } else {
      res.send([retrivedData, req.user]);
    }
  })
})




// |-------------------------------------------------------------------|
// |    EXPORTING THE ROUTE                                            |
// |-------------------------------------------------------------------|

module.exports = router;




// variable for consol log message
var partition = '=======================================\n';
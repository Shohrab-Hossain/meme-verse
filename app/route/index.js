// |-------------------------------------------------------------------|
// |     APP ROUTE                                                     |
// |-------------------------------------------------------------------|


// Node Module
const express  = require('express'),
      path     = require('path'),
      router   = express.Router({ mergeParams: true });


// |-------------------------------------------------------------------|
// |    INITIATING ROUTE                                               |
// |-------------------------------------------------------------------|

router.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));  // src directory in one level up from this directory.
});


module.exports = router;
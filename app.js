// Node Module
const bodyParser       = require('body-parser'),
      expressSanitizer = require('express-sanitizer'),
      path             = require('path'),
      /* history          = require('connect-history-api-fallback'),  // this helps SPA to access index file   */
      methodOverride   = require('method-override'),
      mongoose         = require('mongoose'),
      passport         = require('passport'),
      localStrategy    = require('passport-local').Strategy,
      multer           = require('multer'),
      request          = require('request'),
      /* cookieSession = require('cookie-session'), */
      express          = require('express'),
      app              = express();

// Customized Module
var middleware     = require('./modules/middleware'),                         // this module contains middlewares
    User           = require('./modules/MongoDB/mongoose-schema/user'),       // this module contains user Schema and Model with passport functionality
    Collection     = require('./modules/MongoDB/mongoose-schema/instagram'),  // this module contains database Schema and Model
    postApi        = require('./api/post'),         // ----- API route
    commentApi     = require('./api/comment'),      // ----- API route
    reactApi       = require('./api/react'),        // ----- API route
    authApi        = require('./api/auth'),         // ----- API route
    appRoute       = require('./app/route'),        // ----- APP route
    seed           = require('./modules/seed_Database/seed'),           // this module contains database initialization function
    msgVariables   = require('./modules/consoleLogMessage/variables'),  // this module contains variables that prints console log message
    credentials    = require('./_credentials/quixo');                   // this module contains credentials

// Initializig app.js
app.use(express.static(path.join(__dirname, '/app/src')));  // this will use dist folder for rendering vue component ------------
app.use(methodOverride('_method'));
app.use(bodyParser.json());                          // the bodyParser is required while using POST request, for parsing values and application/json
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded
/* app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
})) */
app.use(expressSanitizer());                         // the senitizer must be used after bodyParser, so that  it can select the body
/* app.use(history()); */


      
// |-------------------------------------------------------------------|
// |    Initializing MongoDB using Mongoose                            |
// |-------------------------------------------------------------------|

const databaseUrl = credentials.getDatabaseUrl();   // creates databaseUrl for pruduction or development database

// Assign mongoose promise library and connect to database
mongoose.connect(databaseUrl, {
	useNewUrlParser    : true,
	useCreateIndex     : true,
  useUnifiedTopology : true,
  useFindAndModify   : false
}).then(() => {
  console.log(msgVariables.mongodbStarted);     // the variable "mongodbStarted" is declared and defined at the end of the code
  seed.seedDB(credentials.isSeedRequired());    // Reset the database -------------------------- 'true' for seed database and 'false' for not to seed database
}).catch(err => {
  console.log(msgVariables.mongodbNotStarted);  // the variable "mongodbNotStarted" is declared and defined at the end of the code
	console.log("ERROR: ", err.message);
});




// |-------------------------------------------------------------------|
// |    Passport configuration                                         |
// |-------------------------------------------------------------------|
app.use(require('express-session')(
  {
    secret: 'Shohrab-ML',
    resave: false,
    saveUninitialized: false
  }
));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
/* passport.use(new localStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      if (!user.validPassword(password)) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    });
  }
)); */
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// custom middleware initialization
app.use(middleware.getCurrentUser);  // this should be called after 'passport' initialization


// let vue to access server through api
var cors = require("cors");
var corsOptions = {
  credentials: true,
  origin: "http://localhost:8080"  // this will allow port 8080 to send http request to server port 3000
};
app.use(cors(corsOptions));


/* // SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage }) */



// |-------------------------------------------------------------------|
// |    ROUTE                                                          |
// |-------------------------------------------------------------------

// API Route
app.use(postApi);
app.use(commentApi);
app.use(reactApi);
app.use(authApi);

// APP Route
app.use(appRoute);  // app route must come at last


// |-------------------------------------------------------------------|
// |    server is listenning to localhost:3000                         |
// |-------------------------------------------------------------------|

const port = process.env.PORT || 3000;  // the server will listen to this port or 3000

app.listen(port, function(){
  console.log(msgVariables.serverIsListening);    // the variable "serverIsListeningTO" is declared and defined at the end of the code
});


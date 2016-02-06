var express             = require('express');
var session             = require('express-session');
var cookieParser        = require('cookie-parser');
var bodyParser          = require('body-parser');
var morgan              = require('morgan');
var app                 = express();
var port                = process.env.PORT || 11000;
var passport            = require('passport');
var flash               = require('connect-flash');
var router  	        =   express.Router();

// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
// app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname +'/views'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(session({
	secret: 'iaccounting',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
module.exports.router=router;
require('./app/route_login.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.use("/",router);

// ----


/** running server */
app.listen(port);
console.log('app running at localhost:'+port);


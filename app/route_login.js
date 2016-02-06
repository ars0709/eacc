// app/routes.js
var router=require('../server').router;
var isLogin = require('../lib/islogin');
module.exports = function(app, passport) {
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
    router.route('/')
        .get(function(req,res){
                console.log('lfash', req.flash('loginMessage'));
                res.render('pages/index', { message: req.flash('loginMessage') }); // load the index.ejs file    
        });
	

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
    
	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('pages/index', { message: req.flash('loginMessage') });
	});
	// process the login form
    
    router.route('/login')
        .post(passport.authenticate('local-login', {
            successRedirect : 'pages/home', // redirect to the secure profile section
            failureRedirect : '/', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),function(req,res){
            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
            res.redirect('/');  
        });
	
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('pages/signup', { message: req.flash('signupMessage') });
	});
	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : 'pages/home', // redirect to the secure profile section
		failureRedirect : 'pages/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
    
	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLogin.isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};


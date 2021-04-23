const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy ({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallBack: true
}, (req, email, password, done) => {

}));

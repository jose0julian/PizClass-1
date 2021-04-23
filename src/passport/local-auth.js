const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//hacer llamado desde la carpea models el metodo userSchema
const User = require('../models/user');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.serializeUser(async (id, done) => {
	 const user = await User.findById(id);
	 done(null, user);
});

passport.use('local-signup', new LocalStrategy ({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallBack: true
}, async (req, email, password, done) => {
	const newUser = new User();
	newUser.email = email;
	newUser.password = newUser.encryptPassword(password);
	await newUser.save();
	done(null, user);
}));

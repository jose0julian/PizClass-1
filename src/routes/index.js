const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index');
});
//SIGNUP
router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  passReqToCallBack: true
}));
//SIGNIN
router.get('/signin', (req, res, next) => {

});

router.post('/signin', (req, res, next) => {

});

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;

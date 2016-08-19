var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use('local-register', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done) {
    User.create({
      username: username,
      password: password
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    })
}));

passport.use('local-login', new LocalStrategy(User.authenticate()));

/* GET home page. */
router
  .post('/register', function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
      if (err) {
        console.error(err);
        return res.send(500);
      }
      if (user) {
        return res.send(409);
      }
      User.register(new User({
        username: req.body.username
      }), req.body.password, function(err, user) {
        if (err) {
          return res.send(err);
        }
        passport.authenticate('local')(req, res, function () {
          res.send(201);
        });
      });
    });
  })
  .post('/login', passport.authenticate('local-login'), function(req, res) {
    res.send(200);
  })
  .get('/logout', function(req, res) {
    req.logout();
    res.send(200);
  })
  .get('/checkauth', function(req, res) {
    console.log('<><><> calling check auth')
    console.log(req.isAuthenticated());
    console.log(req.session)
    if (req.isAuthenticated()) {
      return res.send(true);
    }
    return res.send(false);
  });

module.exports = router;

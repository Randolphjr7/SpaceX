const express = require("express");
const router = express.Router();

// password stuff
const bcrypt = require("bcryptjs");
const bcryptSalt = 12;

// Passport packages
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

// User model
const User           = require("../models/User");

const magicUploadMiddleWare = require('../config/cloudinary-thing');

// GET Sign-up route
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// Post Sign-up route
router.post("/signup", magicUploadMiddleWare.single('image-name-thingy'), (req, res, next) => {
  
  const email    = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  let image = '/images/blah.png';
  if(req.file){
    image =  req.file.url;
  }
  

  // validate username and password
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  // check to see if indicated username is already defined in the database
  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", { message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      // creating the new user with User model schema
      const newUser = new User({
        email,
        username,
        password: hashPass,
        image
      });

      newUser.save(err => {
        if (err) {
          res.render("auth/signup", { message: "Something went wrong" });
        } else {
          res.redirect("/");
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

// GET log-in
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

// POST login
router.post("/login", passport.authenticate("local", {
    successRedirect: "/user/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

// GET route to user-profile
router.get("/user/profile", ensureLogin.ensureLoggedIn(),(req, res) => {
  res.render("auth/user-profile", { user: req.user });
})


// Get route to render user-edit form
router.get("/user/edit/:id", (req,res, next) => {

  const theUserID = req.params.id;
  console.log('the userID is: ', theUserID);
  
  User.findById(theUserID)
    .then((userInfo) => {
      console.log(userInfo);
      res.render("auth/user-edit", { user: userInfo})
    })
    .catch((err) => {
      console.log(err)
    })
})

// POST route to recieve info from user-edit form and update
router.post("/user/update/:id", (req, res, next) => {

    const userID = req.params.id;
    User
    .findByIdAndUpdate(userID, req.body)
    .then(() => {
      res.redirect("/user/profile")
    })
    .catch((err) => {
      next(err)
    })
})

// GET logout
router.get("/logout", (req,res, next) =>{
  req.logout();
  res.redirect("/")
});

module.exports = router;

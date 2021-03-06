require("dotenv").config();

const bodyParser    = require("body-parser");
const cookieParser  = require("cookie-parser");
const express       = require("express");
const favicon       = require("serve-favicon");
const hbs           = require("hbs");
const mongoose      = require("mongoose");
const logger        = require("morgan");
const path          = require("path");

const session       = require("express-session");
const bcrypt        = require("bcryptjs");

const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash         = require("connect-flash");

const User          = require("./models/User");

mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Whitestar";

// PASSPORT MIDDLEWARE
app.use(
  session({
    secret: "our-passport-local-strategy-app",
    resave: true,
    saveUninitialized: true
  })
);

// PASSPORT STRATEGY
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

app.use(flash());

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true
    },
    (req, username, password, next) => {
      User.findOne({ username }, (err, user) => {
        console.log("user: ", username);
        if (err) {
          //console.log("this is the fucking error: \n", err);
          return next(err);
        }
        if (!user) {
          console.log("this is the error: \n", err);
          return next(null, false, { message: "Incorrect username" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return next(null, false, { message: "Incorrect password" });
        }

        return next(null, user);
      });
    }
  )
);

// INITIALIZE PASSPORT AND PASSPORT SESSION
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  /*   res.locals.errorMessage = req.flash("error");
  res.locals.successMessage = req.flash("success");  */
  next();
});

const landing = require("./routes/landing");
app.use("/", landing);

// AUTH ROUTE
const authRoutes = require("./routes/auth-routes");
app.use("/", authRoutes);

// ROCKET ROUTE
const rocketRoutes = require("./routes/rockets");
app.use("/", rocketRoutes);

// MISSION ROUTE
const missionRoutes = require("./routes/missions");
app.use("/", missionRoutes);

// MAP ROUTE
const mapRoutes = require("./routes/map");
app.use("/", mapRoutes);

// NEWS ROUTE
const newsRoutes = require("./routes/news");
app.use("/", newsRoutes);

module.exports = app;

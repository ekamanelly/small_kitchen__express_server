const express = require("express");
const app = express();
const cors = require("cors");
const localStrategy = require("passport-local");
const passport = require("passport");

const env = require("dotenv").config();
const { db } = require("./db/connectDB");
const { specialtyRoute } = require("./route/specialty.route");
const { doctorRoute } = require("./route/doctor.route");
const { alimentRoute } = require("./route/ailment.route");
const { userRouter } = require("./route/user.route");
const { User } = require("./model/user.model");
const { appointmentRoute } = require("./route/appointment.route");

app.use(cors({ exposedHeaders: ["Content-Length", "Authorization"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/assets/products"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const PORT = 8080;

app.get("/", (req, res) => res.status(200).json({ note: "working" }));

app.use(doctorRoute);
app.use(alimentRoute);
app.use(specialtyRoute);
app.use(userRouter);
app.use(appointmentRoute);
app.listen(PORT, async () => {
  console.log(`App Connected at port ${PORT}`);
  db();
});

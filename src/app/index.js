require("express-async-errors");
const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const connectDB = require("../config/dbCon");
const corsOptions = require("../config/corsOptions");
const errorHandler = require("../middlewares/errorHandler");

connectDB();

const app = express();

dotenv.config();

app.use(cors(corsOptions));
// app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  session({
    secret: "keyboardijijij87767y",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the routes
app.use("/api/user", require("../routes/user"));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;

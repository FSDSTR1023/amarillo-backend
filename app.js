import createError from "http-errors";
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.route.js";
import usersRouter from "./routes/user.route.js";
import postsRouter from "./routes/posts.route.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;

import dotenv from "dotenv";
dotenv.config();

const mongoDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log(process.env.DB_USER);
  res.send("hello toni");
});

// view engine setup

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;

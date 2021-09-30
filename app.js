const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
/**
 * Se encarga de crear un punto medio en el cual
 * se pueda determinar el error
 */
app.use((req, res, next) => {
  res.status(404);
  res.json({
    err: ' Te mamaste ERROR 404 ',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.json({
    err: err.message,
  });
});

module.exports = app;

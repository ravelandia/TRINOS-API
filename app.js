const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const ErrorSerializer = require('./src/serializers/ErrorSerializer');

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
  res.json(new ErrorSerializer(404, 'TE MAMASTE: NOT FOUND'));
});

app.use((err, req, res, next) => {
  res.json({
    err: new ErrorSerializer(err.statusCode, err.message),
  });
});

module.exports = app;

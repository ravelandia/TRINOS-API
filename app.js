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

const myCustomMiddlware = (req, res, next) => {
    console.log('myCustomMiddleware');
    console.log("Hey, I'm in the middleware");
    next();
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use((req, res, next, err) => {

});

module.exports = app;

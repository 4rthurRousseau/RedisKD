var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');

var resources = require('./routes/resources');
var tags = require('./routes/tags');
var typeahead = require('./routes/typeahead');
var db = require('./services/db/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/resources', resources)
app.use('/typeahead', typeahead)
app.use('/tags', tags)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end();
});

module.exports = app;

function exitHandler(options) {
    process.exit();
}

process.stdin.resume();
process.on('exit', exitHandler.bind(null));
process.on('SIGINT', exitHandler.bind(null));
process.on('SIGTERM', exitHandler.bind(null));
process.on('SIGUSR2', exitHandler.bind(null));
process.on('uncaughtException', exitHandler.bind(null));
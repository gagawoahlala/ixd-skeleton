
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var stat = require('./routes/stat');
var quiz = require('./routes/quiz');
var helper = require('./routes/helper');
var profile = require('./routes/profile');
var setting = require('./routes/setting');
var question = require('./routes/question');
var summary = require('./routes/summary');
var auth = require('./routes/auth');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/auth', auth.view);
app.get('/stat', stat.view);
app.get('/quiz', quiz.view);
app.get('/helper', helper.view);
app.get('/profile', profile.view);
app.get('/setting', setting.view);
app.get('/question', question.view);
app.get('/summary', summary.view);





// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

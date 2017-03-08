var express = require('express');
var app = express();
var path = require('path');
var knex = require('./models/database');
var config = require('./knexfile.js')
var bodyParser = require('body-parser');

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes

var apiLectureRoutes = require('./routes/api_lectures');
app.use('/', apiLectureRoutes);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

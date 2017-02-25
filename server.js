var express = require('express');

var mysql = require('./db/mysql');

var app = express();

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

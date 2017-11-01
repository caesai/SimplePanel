var express = require('express')
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/departments', function(req, res) {
  var list = fs.readFileSync('./ServerApi/departments.json', 'utf8');
  res.send(JSON.stringify(list));
});

app.listen(3000, function() {
  console.log('Listening at 0.0.0.0:3000');
});

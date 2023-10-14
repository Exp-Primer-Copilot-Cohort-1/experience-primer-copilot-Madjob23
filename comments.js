// Create web server
// Load modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Load JSON file
var comments = require('./comments.json');

// Set up routes
app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});
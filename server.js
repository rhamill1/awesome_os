
var express = require('express'),
  app = express();

app.use(express.static('public'));

app.get('/', function homePage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', function aboutPage(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', function contactPage(req, res) {
  res.sendFile(__dirname + '/views/contact.html');
});

app.listen(process.env.PORT || 8000, function () {
  console.log('Express server is running on http://localhost:8000/');
});

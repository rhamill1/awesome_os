
var express = require('express'),
  app = express();
require('dotenv').config()

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

app.get('/email_sent', function contactPage(req, res) {
  res.sendFile(__dirname + '/views/email_sent.html');
});




var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post('/contact', function(req,res){

  'use strict';
  const nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.G_USER,
      pass: process.env.G_PASS
    }
  });

  let mailOptions = {
    to: process.env.G_USER,
    // from: name, _______________________________________ DEAD CODE
    subject: req.body.services + ' - ' + req.body.subject,
    html: '<h1>' + req.body.name + '</h1><br> \
    <h3>' + req.body.subject + '</h3><br> \
    <h5>' + req.body.email + ' - ' + req.body.phone + '</h5> \
    <h5>' + req.body.services + '<br><p>' + req.body.message + '</p>'
  };

  transporter.sendMail(mailOptions, function(error, response) {
    if(error) {
      console.log(error)
      res.sendStatus(500);
    } else {
      console.log(response);
      transporter.close();
      res.redirect('/email_sent');
    }
  });

});




app.listen(process.env.PORT || 8000, function () {
  console.log('Express server is running on http://localhost:8000/');
});

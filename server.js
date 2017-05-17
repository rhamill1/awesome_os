
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





var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post('/contact', function(req,res){

  console.log('post method on contact form hit');
  console.log(req.body.subject);

  'use strict';
  const nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: '',
          pass: ''
      }
  });

  // setup email data with unicode symbols
  // var name = req.body.name; _______________________________________ DEAD CODE
  let mailOptions = {
      to: 'rhamill11@gmail.com',
      // from: name, _______________________________________ DEAD CODE
      subject: req.body.subject,
      html: '<h1>' + req.body.name + '</h1><br> \
      <h3>' + req.body.subject + '</h3><br> \
      <h5>' + req.body.email + ' - ' + req.body.phone + '</h5> \
      <h5>' + req.body.services + '<br><p>' + req.body.message + '</p>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      console.log(name);
  });

});







app.listen(process.env.PORT || 8000, function () {
  console.log('Express server is running on http://localhost:8000/');
});

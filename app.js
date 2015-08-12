var express = require('express');
var app = express();
var port = 1338;
if (process.env.NODE_ENV == 'production') {
  port = 1337;
}
if (process.env.PORT) {
  port = process.env.PORT;
}
console.log(process.env.PORT);
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/bower_components', express.static(__dirname + '/public/bower_components'));
app.use('/lib', express.static(__dirname + '/public/lib'));
app.use('/templates', express.static(__dirname + '/public/templates'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));

app.all('/*', function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendfile('index.html', { root: __dirname + '/public' });

});

app.listen(port); //the port you want to use
console.log('App started at port :' + port);
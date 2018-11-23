var express = require('express');
var app = express();

const routes = require('./cryptoroutes');
//Import our routes module

app.get('/', function (req, res) {
  res.write('<html>');
res.write('<body>');
res.write('<h1>Coinbase Rate</h1>');
res.write('</body>');
res.write('</html>');
res.end();

})

console.log('ello');

app.use('/api',routes);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

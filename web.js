var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var readFile = function(file) {
    var d;
    fs.readFileSync(file, function(err, data){
	if (err) throw err;
	var d = data;
    });
    console.log(d);
    return d;
    
};

app.get('/', function(request, response) {
 var buflen = readFile('/bitstarter/index.html');
  var lennn = buflen.length;
  var buffer = new Buffer(lenn);
  var str = buffer.toString('utf-8');
  //TODO 
  console.log(str);


 
  response.send(str);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
    console.log(readFile('~/index.html'));

});












var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
//var filename = '/home/ubuntu/myrepo/bitstarter/index.html';

var app = express.createServer(express.logger());
//var readFile = function(file) {
//    var d;
 //   fs.readFileSync(file, function(err, data){
//	if (err) throw err;
//	var d = data;
//    });
    //console.log(data);
  // return d;
    
//};

app.get('/', function(request, response) {
 //var buflen = readFile(filename);
  //var lennn = buflen.length;
  //var buffer = new Buffer(lenn);
  //var str = buffer.toString('utf-8');
  //TODO 
  //console.log(str);
var buf = fs.readFileSync('./index.html','utf8');
    response.send(buf.toString('utf8',0,buf.length));
 

 
  //response.send('sssss');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
   // console.log(readFile(filename));

});













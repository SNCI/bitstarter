var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs=require('fs');
//  response.send('Hello World from index.html\n');
//   var htmlIn=fs.readFileSync("index.html","utf-8");
   response.send(fs.readFileSync(__dirname+'/index.html',"utf-8"));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

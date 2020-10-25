var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './')));

app.get('/', function(req, res, next) {
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html','utf-8',function(err,data){
        if(err){
        throw err ;
        }
        res.end(data);
        });
});

app.listen(2030);
console.log("监听端口 2030");
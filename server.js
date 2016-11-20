//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


//express
var app = express();

var port = 8000;

//middleWare
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//CURD

app.get('/api/test',function(req,res){
  res.send("Hi there,NODE is alive and well");
});

//CONNECTION
app.listen(port,function(){
  console.log("listening on port: " + port)
})

var express = require("express");
var open = require("open");
var path = require("path");

var port = 4000;

var app = express();

app.get("/",function(request,response){
  
    console.log();
response.sendFile(path.join(__dirname,"../src/index.html"),function(){
    console.log("dssa");
});
});


app.listen(port,function(err){

if(err){
//console.log(err);
}else{
open("http://localhost:"+port+ "/");
}

});



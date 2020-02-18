

var express = require("express");
var cors = require('cors')

var app     = express();
var path    = require("path");
var mysql = require('mysql');
app.use(cors());
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.post('/getData',function(req,res){

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "react_app"
  });
  console.log(req.body);
  var username=req.body.user.userName;
  var email=req.body.user.email;
  var title=req.body.user.title;
  var techstack=req.body.user.techStack
  var message=req.body.user.message;
  var d = new Date();
  var created = d.getFullYear()+"-"+(d.getMonth() + 1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
  var updated = d.getFullYear()+"-"+(d.getMonth() + 1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
 
  var data={
    "username":username,
    "email":email,
    "title":title,
    "techstack":techstack,
    "message":message
  };

  console.log(data);
    con.connect(function(err) {
  if (err) throw err;
   
  var sql ='INSERT INTO react_data (username, email, title,techstack,message,created,updated) VALUES (?,?,?,?,?,?,?)'
  con.query(sql, [username, email, title,techstack,message,created,updated], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    
  });
  });
 
  
 
  // res.set('Content-Type', 'text/plain')
   res.json({status:200, message:"success", data:data});

 })


app.listen(5000);
console.log("Running at Port 5000");

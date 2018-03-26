var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = "mongodb://localhost:27017/employees";
console.log(config)
mongoose.connect(config)
    
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello from jain");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/contacts', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})
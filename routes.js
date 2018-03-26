var express = require('express');
var router = express.Router();
var Employee = require('./model');
router.get('/', function(req, res){
     Employee.getEmployees(function(err,employees){
         if(err) throw err;
         res.json(employees);
     });
 })
router.post('/', function(req, res){
    var newEmployee = {
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone
        
    }
     Employee.addEmployee(newEmployee,function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.put('/:id', function(req, res){
     var update = {
        name: req.body.name,
        email : req.body.email,
        phone : req.body.phone
        
    }
     Employee.updateEmployee(req.params.id , update, function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Employee.deleteEmployee(req.params._id ,  function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.get('/:_id', function(req, res){
    
     Employee.getEmployee(req.params._id , function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
module.exports = router;
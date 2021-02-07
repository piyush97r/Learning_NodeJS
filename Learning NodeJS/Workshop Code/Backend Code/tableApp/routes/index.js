var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var md5 = require('MD5');
var cors = require('cors');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "collegedb"
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome 2 AMC' });
});


router.get('/getallstudents', function(req, res, next) {
	con.connect(function(err) {
	  var sql = "SELECT * from form";

	  con.query(sql, function (err, result) {
	  	res.json(result);
	  });
	});
});

router.post('/addstudentdetails', function(req, res, next) {
  	console.log(req.body);
});

module.exports = router;

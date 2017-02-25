var mysql = require('mysql');

var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : ''
 });

 connection.connect(function(err){
   if(!err) {
     console.log("Database is connected ... \n\n");
   } else {
     console.log("Error connecting database ... \n\n" + err.message);
   }
 });

 module.exports = mysql;

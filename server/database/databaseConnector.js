var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host:'us-cdbr-iron-east-05.cleardb.net',
//   user: 'b0e85cc5b47320',
//   password:'87f5fe29',
//   database:'heroku_fe4a2ca1e95fa75'
// });

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'Ma19921013',
  database:'Applause'
});

module.exports = connection;

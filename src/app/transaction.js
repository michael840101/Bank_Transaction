var mysql = require('mysql');

//create my sql db Connection
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb",
  multipleStatements: true
});

//instert the transactions activities into the trasaction table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO transactions (from_account,to_account, amount) VALUES ?";
  var values = [
    ['***88','***99' 100.00]
  ]

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

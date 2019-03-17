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
  //create sql statement for insert trasaction
  var sql = "INSERT INTO transactions (from_account,to_account, amount) VALUES ?";
  var values = [
    ['***88','***99' 100.00]
  ]
  //add the update account balance sql to the sql statement
  sql+="UPDATE balances SET balance = 'Canyon 123' WHERE address = 'Valley 345'"

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

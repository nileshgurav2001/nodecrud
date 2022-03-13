var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"

});

create = () => {
    var name = "nilesh";
    var address = "Dhundavade";
         var sql = "INSERT INTO customers(name,address)"
        sql += " VALUES ('" + name + "','" + address + "')";

        con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        console.log("connected...!");
        });

        con.query(sql, function (err, result) {
            if (err) {
            console.log(err);
          }

          console.log(result);
        })
}

create();



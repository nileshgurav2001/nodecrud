var mysql = require("mysql");

class Database {
    constructor() {
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nodecrud"
        });
    }
    query = (sql) => {
        this.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            return result;

        });
    }
}

module.exports = {

    Database: Database

}
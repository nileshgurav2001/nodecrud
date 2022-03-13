var Database = require("../models/Database");
class User {
    id = 0;
    name = "";
    email = "";             
    mobile_no = "";
    query = "";
    db = new Database.Database();

    save = () => {
        if (this.id == 0) {

            this.query = "INSERT INTO users (name,email,mobile_no)";
            this.query += " VALUES ('" + this.name + "','" + this.email + "','" + this.mobile_no + "')";
        }
        else {

            this.query = "UPDATE users SET name='" + this.name + "' , email = '" + this.email + "', mobile_no = '" + this.mobile_no + "' ";
            this.query += " WHERE id ="+this.id;
        }

        var result = this.db.query(this.query);
        console.log(result);
    }
}

module.exports ={
   
    User:User

}


var User = require("./models/User");
create =()=>{
   var user = new User.User();
    user.id = 2;
    user.name ="vinayak007";
    user.email = "xyz0018@gmail.com";
    user.mobile_no = "9420221016";
    user.save();

}

create();
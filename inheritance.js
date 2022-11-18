class User {
    name;
    username;
    password;
    role;

    login =() => {

    }
}

class Admin extends User {
    role="admin";
}

const admin_obj = new Admin();
admin_obj.login();

class Seller extends Admin {
   role= "seller";
}


class Customer  extends User{
    
}
// A ===> B ===> C 
// A, B ====> C
// interface Name{
//     getName();
// }
// trait Name{
//     getName() {
//         return this.name;
//     }
// }
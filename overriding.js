class User {
    constructor() {
        console.log("I am in User Class")
    }
    functionUser(){
        return "User";
    }
}

class Admin extends User{
    constructor() {
        super()
        console.log("I am in Admin Class")
    }
    // functionUser = () => {
    functionUser(){
        let parent_data = super.functionUser()   // functionUser of User class execute
        // this.functionUser()
        return "Admin";
    }
}

const admin_obj = new Admin();

admin_obj.functionUser();
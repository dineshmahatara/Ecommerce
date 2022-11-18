class User{
    // body
    name;
    address;
    email;


    getName(){
        return this.name;
    }

    setName = function (_name) {
        this.name = _name;
    }

    setAddress = (_address) => {
        this.address = _address
    }
}

let user_obj = new User();

// Create a class Called Student
// assign name, marks, percentage and division as a class property
// Create functions to set name and marks 
// Create another function to calculate percentage and division 
// print All the properties of a student from another function 
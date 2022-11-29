class User {
    name;
    address;
    email;
    dob;
    age;
    constructor(_name, _email, _address, _dob) {

        this.name = _name;

        this.email = _email;

        this.address = _address;

        this.dob = _dob

        this.getAge()
        this.formatDate();
    }

    getAge = () => {

        // age calculation

        let date = new Date();

        this.dob = new Date(this.date);

        // this.age=((date-this.dob)/(8600*36000))

        this.age = Math.floor((date - this.dob) / (86400 * 365000)) /// floor le bottom value and ciling le uppervalue

        // console.log(this.age)

        // console.log(this.dob)





    }



    formatDate = () => {

        //dob= object

        //y-m-d===> d/m/y

        // this.dob=new Date(this.dob);



        let year = this.dob.geFullYear()

        let month = this.dob.getMonth()

        let date = this.dob.getDate();

        console.log(date + "/" + month + "/" + year)

    }

}

const user_obj = new user("", "", "", "2000-01-01");
// user_obj.formatDate();
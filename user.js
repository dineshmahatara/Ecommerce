class User {
    name;
    address;
    email;
    dob;
    age;

    constructor(_name, _email, _address, _dob) {
        this.name = _name;
        this.email =_email
        this.address = _address;
        this.dob = _dob
        this.getAge()
        this.formatDate();
    }

    getAge = () => {
        // age calculation 
        let date = new Date();
        this.dob = new Date(this.dob);
        // this.age = parseInt((date - this.dob)/(86400 * 365000))
        this.age = (date - this.dob)/(86400 * 365 * 1000)   // 32.something
        let year = Math.floor(this.age);
        let year_to_month = (this.age - year)*12;    // 12.something
        let month = Math.floor(year_to_month);
        let day = Math.floor((year_to_month-month)*30); //          0.somethng * 30 => day.something
        // 32years 12months 10days
        console.log(year+"yrs "+month+"month "+day+"day");
    }

    formatDate = () => {
        // dob => object
        // Y-m-d  ===> d/m/Y
        // this.dob = new Date(this.dob);
        let year = this.dob.getFullYear()
        let month = this.dob.getMonth() + 1
        let date = this.dob.getDate();




        console.log(date+"/"+month+"/"+year)
    }

    // setName = (_name) => {
    //     this.name = _name
    // }

    // getName = () => {
    //     return this.name;
    // }

    // setEmail = (_email) => {
    //     this.email = _emaill
    // }
}

const user_obj = new User("Sandesh",'sandesh.bhattarai@broadwayinfosys.com', "Kathmandu", "1990-01-11")
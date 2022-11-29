const abc = () => {
    console.log("I am in abc");
}

const xyz = () => {
    console.log("I am in xyz")
}

setTimeout(abc, 2000);

setTimeout(xyz, 1000);

console.log("I am first");

let admin = (user) => {
    // authorization
    // 
    
}

let seller = (user) => {
    // authorize
    
}

let login = (cb) => {
    // authentication
    // auth logic
    // true 
    let user = {
        role: "admin"
    }
    cb(user)
    //admin();

}

login(admin)
login(seller)
// admin()

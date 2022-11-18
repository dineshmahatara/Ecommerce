const login = (uname, pwd) => {
    return new Promise((resolve, reject) => {
        // db query
        // resolve({name: "Sandesh"})
        reject({err: "Invalid data"});
    });
}
// pending 
// fullfilled => fullfilled/reject => resolve/reject
// settled 
let loading = true;
login("admin",'admin123')
.then((data) => {
    // fullfilled
    // loading = false;
})
.catch((errData) => {
    // reject phase
    console.log(errData)
    // loading = false;
})
.finally(() => {
    loading = false
})


// app.listen(9000, 'localhost', (error) => {})
// http 
const http = require("http");

const server = http.createServer((request, response) =>{
    // requrest process 
    // client response 

    let url = request.url;
    let method = request.method;
    
    // API Dev => CRUD 
        // Create Read Update Delete 
        // Get, Post, Put/Patch, Delete http vernbs
        // REST API ->
            // Representational Stateless Transfer

        // fb.com/username 
        // youtu.be/112id?
    if(url === '/user' && method === 'GET') {
        // list all users 
        let users = [];
        response.end(JSON.stringify({
            users: users
        }));
    } else if(url === '/login' && method === 'GET') {
        response.end("Login Page")
    } else {
        response.statusCode =404
        response.end("Not found");
    }
});

// 80, 443
// 25, 2525, 465, 587
// 21, 22
// 1-2^16 -1
server.listen(3005, "127.0.0.1", (err) => {
    if(!err) {
        console.log("Server is listening to port: 3005")
        console.log("Press CTRL+C to disconnect server")
    }
});
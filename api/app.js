const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const http = require("http");
const server = http.createServer(app);

const events = require("events");
const {Server} = require("socket.io");

const io = new Server(server);
io.on("connection", (socket) => {
    console.log("I am inside connectin");
    socket.on("hello", () => {
        console.log("I am in hello")
    })

    // socket.emit("hello")
})

const myevent = new events.EventEmitter();


myevent.on("hello", (data) => {
    console.log(data);
})
app.use((req, res, next) => {
    req.myevent = myevent;
    next();
})
// myevent.emit("hello");

require("./config/mongoose.config");

const routes = require("./routes/");
// const path = require("path")

app.use("/assets", express.static("public/"))

app.set("view engine", "pug")
app.set("views", process.cwd()+"/views")

// path.join(__dirname, "views");
// const router = express.Router();
// router.get('/', (req, res, next) => {
//     res.json({result: "I am here", status: true, msg: "Test"}); 
// });
// app.use(router);
// parser load 
    // next();
/**
 * a. Application Level Middleware 
 * b. Routing Level Middleware
 * c. Static Middleware
 * d. Built in Middleware / Third party Middleware
 * e. Custom Middleware 
 * f. Error handling Middleware
 */
// /login post
// db config 
// events handling 
// cors handle
// parsers 
    // json 
    // urlencoded
// 404 request 
// error handling

// mounting of routes

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(routes);

// 404 handling
app.use((req, res, next) => {
    next({
        status: 404,
        msg: "not found"
    });       // error handling middleware 
    // res.status(404).json({
    //     result: null, 
    //     msg: "Not found", 
    //     status: false
    // })
});

// erorr handling middleware
app.use((error, req, res, next) => {
    let status = error.status ?? 500;
    let msg = error.msg ?? error;
    res.status(status).json({
        result: null, 
        status: false, 
        msg: msg
    })
})
server.listen(3005, 'localhost', (err) => {
// server.listen(process.env.PORT || 80, 'api.abc.com', (err) => {
    if(!err) {
        console.log("Server is listening to port 3005");
        console.log("Press CTRL + C to disconnect to the server...")
    }
})
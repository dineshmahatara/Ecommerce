const mongoose = require("mongoose");
const {ENVIRONMENT, DB} = require("./config");

let DB_URL = "";
if(ENVIRONMENT === 'dev'){
    DB_URL = DB.PROTOCOL+"://"+DB.HOST+":"+DB.PORT+"/"+DB.NAME;
    // mongodb://localhost:27017/dbname
} else if(ENVIRONMENT === 'prod'){
    DB_URL = DB.PROTOCOL+"://"+DB.USER+":"+DB.PWD+"@"+DB.HOST+":"+DB.PORT+"/"+DB.NAME;

}
mongoose.set('strictQuery', false)
mongoose.connect(DB_URL, (err) => {
    if(err) {
        console.log("DB connection erro: ", err);
    } else {
        console.log("DB connected successfully....")
    }
});
const UserService = require("../services/user.service");
const nodemailer = require("nodemailer");
const { SMTP } = require("../../config/config");
const {MongoClient} = require("mongodb");
const bcrypt = require("bcrypt");


class AuthController{
    constructor() {
        this.user_svc = new UserService();
    }
    registerUser = async (req, res, next) => {
        try{
            let body = req.body;
            // user svc
            if(req.file){
                body.image = req.file.filename
            }
            this.user_svc.validateUser(body);
            // abcd => password => encrypt
            body.password = bcrypt.hashSync(body.password, 10)
            let data = await this.user_svc.createUser(body);

            res.json({
                result: body,
                status: true,
                msg: "Register data test"
            })
            
        } catch(excep) {
            console.log(excep);
            next({status: 400, msg: excep})
        }
        
    }

    loginUser = async (req, res, next) => {
        try{
            let data = req.body;
            let loggedInUser = await this.user_svc.getUserByEmail(data);
            if(loggedInUser){
                if(bcrypt.compareSync(data.password, loggedInUser.password)){
                    res.json({
                        result: loggedInUser, 
                        status: true, 
                        msg: "Logged in successfully"
                    })
                } else {
                    next({status: 400, msg: "Password does not match"})
                }
            } else {
                next({status: 400, msg: "Credentials does not match"})
            }
        } catch(excepts) {
            console.log("Login: ", excepts);
            next({status: 400, msg: excepts})
        }
        
    }

    logout =  (req, res, next) => {

    }
}

module.exports = AuthController;
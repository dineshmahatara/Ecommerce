const UserService = require("../services/user.service");
const nodemailer = require("nodemailer");
const { SMTP } = require("../../config/config");
const {MongoClient} = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Config = require("../../config/config");


class AuthController{
    constructor() {
        this.user_svc = new UserService();
    }
    registerUser = async (req, res, next) => {
        try{
            let body = req.body;
            // let body = {
            //     name: req.body.name,

            // };
            // user svc
            if(req.file){
                body.image = req.file.filename
            }
            this.user_svc.validateUser(body);
            // abcd => password => encrypt
            body.password = bcrypt.hashSync(body.password, 10)
            // email already resigter
            let data = await this.user_svc.createUser(body);

            res.json({
                result: data,
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
                    
                    let token = jwt.sign({
                        user_id: loggedInUser._id
                    }, Config.JWT_SECRET);

                    res.json({
                        result: {
                            user: loggedInUser,
                            access_token: token
                        }, 
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

    getLoggedInUser = (req, res, next) => {
        res.json({
            result: req.auth_user,
            status: true,
            msg: "Your Profile.."
        })
    }

}

module.exports = AuthController;
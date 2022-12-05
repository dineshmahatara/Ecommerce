const UserService = require("../services/user.service");
const nodemailer = require("nodemailer");
const { SMTP } = require("../../config/config");
const {MongoClient} = require("mongodb");

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
            // DB store 
            // let client = await MongoClient.connect("mongodb://127.0.0.1:27017");
            // MongoClient.connect("mongodb://127.0.0.1:27017", async (err, client) => {
            //     if(err) {
            //         console.log("DB Connect: ", err);
            //         next({status: 500, msg: "DB Connection error"});
            //     } 

            //     try{
            //         const db = client.db('mern15');
            //         let data = await db.collection("users").insertOne(body);
            //         res.json({
            //             result: "",
            //             status: true,
            //             msg: "Register data test"
            //         })
            //     } catch(error) {
            //         next({status: 400, msg: error});
            //     } 
            // })
            // console.log("Client: ", client)
            // let db = client.db("mern15");
            // let data = await db.collection("users").insertOne(body);
            
            let data = await this.user_svc.createUser(body);

            // console.log(data);

            // DB store ===> status ---> inactive , act_token----> random str
            // email send ----> url ---> act_token
            // FE url click ----> FE ----> Req Be URL Token 
            
            //  Mail send 
            // nodemailer 
            // socket io 
            // gsm service 
            // App web service ===> SMTP server connect  ===> Data Server SMTP =====> Receiver mail

            // let transporter = nodemailer.createTransport({
            //     host: SMTP.HOST,
            //     port: SMTP.PORT,
            //     secure: SMTP.TLS,
            //     auth: {
            //         user: SMTP.USER,
            //         pass: SMTP.PASS
            //     }
            // });

            // let mail_response = await transporter.sendMail({
            //     to: body.email,
            //     from: SMTP.FROM,
            //     attachments: [
            //         {   // file on disk as an attachment
            //             filename: 'Image.jpeg',
            //             path:  "http://localhost:3005/assets/1669686399408-pen-1.jpeg"
            //         }
            //     ],
            //     subject: "Account Registered!",
            //     text: "Dear "+body.name+ ", Your account has been registered.",
            //     html: `<b>Dear ${body.name},</b><br/><p>Your account has been registered. <img src='http://localhost:3005/assets/1669686399408-pen-1.jpeg' /></p>`
            // });
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

    loginUser = (req, res, next) => {
       let data = req. body;
        
    }

    logout =  (req, res, next) => {

    }
}

module.exports = AuthController;
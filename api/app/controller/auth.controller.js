const UserService = require("../services/user.service");

class AuthController{
    constructor() {
        this.user_svc = new UserService();
    }
    registerUser = (req, res, next) => {
        try{
            let body = req.body;
            // user svc
            if(req.file){
                body.image = req.file.filename
            }
            this.user_svc.validateUser(body);
            // DB store ===> status ---> inactive , act_token----> random str
            // email send ----> url ---> act_token
            // FE url click ----> FE ----> Req Be URL Token 
            
            res.json({
                result: body,
                status: true,
                msg: "Register data test"
            })
        } catch(excep) {
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
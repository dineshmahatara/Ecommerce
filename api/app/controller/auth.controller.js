const UserService = require("../services/user.service");

class AuthController{
    constructor() {
        this.user_svc = new UserService();
    }
    registerUser = (req, res, next) => {
        try{
            let body = req.body;
            // user svc
            this.user_svc.validateUser(body);
            
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
const slugify = require("slugify");
const UserService = require("../services/user.service");
class UserController{
    constructor() {
        this.user_svc = new UserService();
    }
    userStore = async(req, res, next) =>{
        try{
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }
            data.slug = slugify(data.name, {
                lower: true
            });
            // id,id,id
            if(!data.brands || data.brands == 'null'){
                data.brands = null;
            }

            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }
        
            this.user_svc.storeValidate(data);
            let response = await this.user_svc.createUser();
            res.json({
                result: response,
                msg: "User created successfully",
                status: true
            })
        }catch(except){
            console.log("UserStore: ", except);
            next({status: 400, msg: except})
        }
    }
    getUsers =async (req, res, next) => {
        try{
            let paginate = {
                total_count: await this.user_svc.getAllCounts(),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            
            let data = await this.user_svc.getUsers(req.auth_user._id, skip, paginate.per_page);
            res.json({
                result: data, 
                status: true, 
                paginate: paginate,
                msg: "Data fetched"
            })
        } catch(except) {
            console.log("List User: ", except)
            next({status: 400, msg: except})
        }
    }

    getUserById = async (req, res, next) => {
        try{
            let data = await this.user_svc.findById(req.params.id)
            if(data) {
                res.json({
                    result: data, 
                    status: true,
                    msg: "Data fetched"
                })
            } else {
                next({status: 404, msg: "Data does not exists"})
            }
        } catch(except) {
            console.log("Fetch By id: ", except);
            next({status: 400, msg: except})
        }
    }

    deleteById = async (req, res, next) => {
        try{
            let data = await this.user_svc.deleteById(req.params.id)
            if(data) {
                res.json({
                    result: data, 
                    status: true,
                    msg: "Data Deleted"
                })
            } else {
                next({status: 404, msg: "Data does not exists"})
            }
        } catch(except) {
            console.log("Fetch By id: ", except);
            next({status: 400, msg: except})
        }
    }

    userUpdate = async(req, res, next) =>{
        try{
            let current_data = await this.user_svc.findById(req.params.id);

            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            } else {
                data.image = current_data.image;
            }
            data.slug = current_data.slug
        
            // id,id,id
            if(!data.brands || data.brands == 'null'){
                data.brands = null;
            }

            if(!data.parent_id || data.parent_id === 'null'){
                data.parent_id = null;
            }

            this.user_svc.storeValidate(data);
            let response = await this.user_svc.updateUser(req.params.id);
            res.json({
                result: response,
                msg: "User Updated successfully",
                status: true
            })
        }catch(except){
            console.log("UpdateUser: ", except);
            next({status: 400, msg: except})
        }
    }
}
module.exports = UserController;
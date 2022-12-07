const Joi = require("joi");
const { ObjectId } = require("mongodb");
const DbService = require("./db.service");

class UserService extends DbService{
    validateUser = (data) => {
        try{
            let userSchema = Joi.object({
                name: Joi.string().min(3).required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(8).required(),
                address: Joi.string(),
                role: Joi.string().required(),
                status: Joi.string().required(),
                image: Joi.string().empty()
            })
            let response = userSchema.validate(data);
            if(response.error) {
                throw response.error.details[0].message
            }
        } catch(err) {
            console.log(err);
            throw err;
        }
    }

    createUser = async (data) => {
        try {
            return await this.db.collection('users').insertOne(data);
        } catch(excep){
            throw excep
        }
    }

    getUserByEmail = async (data) => {
        try{
            console.log(data);
            // SELECT * FROM users WHERE email = data.email AND password = data.password
            let result = await this.db.collection("users").findOne({
                email: data.email
            });
            return result;
            //console.log(result);
        } catch(err){
            throw err;
        }
    }

    getUserById = async (id) => {
        try{

            let user = await this.db.collection('users').findOne({
                _id: ObjectId(id)
            });
            return user;
        }catch(err) {
            throw err;
        }
    }
}

module.exports = UserService;
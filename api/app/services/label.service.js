const { response } = require("express");
const Joi = require("joi")
const LabelModel = require("../model/label.model");

class LabelService{
    
    storeValidate = (data) => {
        let schema = Joi.object({
            title: Joi.string().required().min(2),
            link: Joi.string(),
            image: Joi.string(),
            type: Joi.string().valid("brand",'banner'),
            status: Joi.string().valid("active",'inactive').default('inactive')
        });
        let response = schema.validate(data);
        if(response.error){
            throw response.error.details[0].message
        } else {
            this.data = data;
        }
    }

    createLabel = async () => {
        let lable_obj = new LabelModel(this.data);
        return await lable_obj.save();
    }

    getAllCounts = async (type) => {
        let filter = {
            type: type
        }
        let all_data = await LabelModel.find(filter)
        return all_data.length;
    }

    getLabels = async (filter, skip, limit) => {
        return await LabelModel.find(filter)
                    .skip(skip)
                    .limit(limit);
    }

    findById  =async (type, id)=>{
        let filter = {
            type: type,
            _id: id
        }
        return await LabelModel.findOne(filter);
    }

    deleteById = async (type, id)=>{
        let filter = {
            type: type,
            _id: id
        }
        return await LabelModel.deleteOne(filter)
    }
    updateLabel = async (id) => {
        let status = await LabelModel.findByIdAndUpdate(id, {
            $set: this.data
        })
        return status;
    }   
}

module.exports = LabelService;
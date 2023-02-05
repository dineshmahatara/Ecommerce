const { response } = require("express");
const Joi = require("joi")
const CategoryModel = require("../model/category.model");

class CategoryService{
    // data
    storeValidate = (data) => {
        
        let schema = Joi.object({
            name: Joi.string().required().min(2),
            slug: Joi.string(),
            image: Joi.string(),
            parent_id: Joi.string().allow(null, '').default(null),
            brands: Joi.string().empty().default(null),
            status: Joi.string().valid("active",'inactive').default('inactive')
        });
        let response = schema.validate(data);
        if(response.error){
            throw response.error.details[0].message
        } else {
            this.data = data;
            // id,id,id => ["id","id","id"]
            this.data.brands = data.brands.split(",");
        }
    }

    createCategory = async () => {
        let category_obj = new CategoryModel(this.data);
        return await category_obj.save();
    }

    getAllCounts = async () => {
        let all_data = await CategoryModel.find()
        return all_data.length;
    }

    getCategories = async (skip, limit) => {
        return await CategoryModel.find()
                    .populate("parent_id")
                    .populate("brands")
                    .skip(skip)
                    .limit(limit);
    }

    findById  =async (id)=>{
    
        return await CategoryModel.findById(id)
            .populate("parent_id")
            .populate("brands")
    }

    deleteById = async (id)=>{
        return await CategoryModel.findByIdAndRemove(id)
    }
    updateCategory = async (id) => {
        let status = await CategoryModel.findByIdAndUpdate(id, {
            $set: this.data
        })
        return status;
    }   

    getCategoriesByStatus = async (status) =>{
        try {
            let response = await CategoryModel.find({
                status: status
            })
            .populate('parent_id')
            .populate('brands')
            return response
        } catch(error) {
            throw error
        }
    }

    getCategoryByFilter = async (filter) => {
        try{
            let result = await CategoryModel.find(filter)
            .populate('parent_id')
            .populate('brands');
            return result;
        } catch(err){
            throw err
        }
    }
}

module.exports = CategoryService;
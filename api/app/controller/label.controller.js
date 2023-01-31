const slugify = require("slugify");
const LabelService = require("../services/label.service");
class LabelController{
    constructor() {
        this.label_svc = new LabelService();
    }
    labelStore = async(req, res, next) =>{
        try{
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }
            data.type = req.params.type;

            if(!data.link || data.link == "null"){
                // Abcd test 1233 %test => abcd-test-1233-test
                data.link = slugify(data.title, {
                    lower: true
                });
            }
            this.label_svc.storeValidate(data);
            let response = await this.label_svc.createLabel();
            res.json({
                result: response,
                msg: data.type+" created successfully",
                status: true
            })
        }catch(except){
            console.log("LabelStore: ", except);
            next({status: 400, msg: except})
        }
    }

    getLabels =async (req, res, next) => {
        try{
            let paginate = {
                total_count: await this.label_svc.getAllCounts(req.params.type),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.label_svc.getLabels({type: req.params.type}, skip, paginate.per_page);
            res.json({
                result: data, 
                status: true, 
                paginate: paginate,
                msg: "Data fetched"
            })
        } catch(except) {
            console.log("List Label: ", except)
            next({status: 400, msg: except})
        }
    }

    getActiveLabels = async (req, res, next) => {
        try{
            let paginate = {
                total_count: await this.label_svc.getAllCounts(req.params.type),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.label_svc.getLabels({type: req.params.type, status: 'active'}, skip, paginate.per_page);
            res.json({
                result: data, 
                status: true, 
                paginate: paginate,
                msg: "Data fetched"
            })
        } catch(except) {
            console.log("List Label: ", except)
            next({status: 400, msg: except})
        }
    }

    getLabelById = async (req, res, next) => {
        try{
            let data = await this.label_svc.findById(req.params.type, req.params.id)
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
            let data = await this.label_svc.deleteById(req.params.type, req.params.id)
            if(data.deletedCount) {
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

    labelUpdate = async(req, res, next) =>{
        try{
            let current_data = await this.label_svc.findById(req.params.type, req.params.id);

            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            } else {
                data.image = current_data.image;
            }
            data.type = req.params.type;

            if(!data.link || data.link == "null"){
                if(data.type === 'banner'){
                    data.link = slugify(data.title, {
                        lower: true
                    });
                } else {
                    data.link = current_data.link
                }
            }

            this.label_svc.storeValidate(data);
            let response = await this.label_svc.updateLabel(req.params.id);
            res.json({
                result: data,
                msg: data.type+" Updated successfully",
                status: true
            })
        }catch(except){
            console.log("UpdateLabel: ", except);
            next({status: 400, msg: except})
        }
    }
}
module.exports = LabelController;
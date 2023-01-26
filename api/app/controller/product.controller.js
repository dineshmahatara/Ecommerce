const slugify = require("slugify");
const ProductService = require("../services/product.service");
class ProductController{
    constructor() {
        this.product_svc = new ProductService();
    }
    productStore = async(req, res, next) =>{
        try{
            let data = req.body;
            data.images = [];

            if(req.files){
                req.files.map((item) =>{
                    data.images.push(item.filename);
                })
            }
            data.slug = slugify(data.name, {
                lower: true
            });
            if(!data.brand || data.brand == 'null'){
                data.brand = null;
            }
            if(!data.seller || data.seller == 'null'){
                data.seller = null;
            }
            // id,id,id
            if(!data.category_id || data.category_id === 'null'){
                data.category_id = null;
            } else {
                data.category_id = data.category_id.split(",");
            }

            // 100 - 100 * 10/100;

            data.actual_price = Number(data.price) - Number(data.price) * Number(data.discount)/100;
            data.is_featured = (data.is_featured == 1 ? true : false) // !"true" -> !false => true, !!1 => true
            this.product_svc.storeValidate(data, req.auth_user._id);
            let response = await this.product_svc.createProduct();
            res.json({
                result: response,
                msg: "Product created successfully",
                status: true
            })
        }catch(except){
            console.log("ProductStore: ", except);
            next({status: 400, msg: except})
        }
    }
    getProducts =async (req, res, next) => {
        try{
            let paginate = {
                total_count: await this.product_svc.getAllCounts(),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.product_svc.getProducts(skip, paginate.per_page);
            
            req.myevent.emit("hello", {name: "Sandesh"});

            res.json({
                result: data, 
                status: true, 
                paginate: paginate,
                msg: "Data fetched"
            })
        } catch(except) {
            console.log("List Product: ", except)
            next({status: 400, msg: except})
        }
    }

    getProductById = async (req, res, next) => {
        try{
            let data = await this.product_svc.findById(req.params.id)
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
            let data = await this.product_svc.deleteById(req.params.id)
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

    productUpdate = async(req, res, next) =>{
        try{
            let current_data = await this.product_svc.findById(req.params.id);

            let data = req.body;
            data.images = current_data.images;  // add new images along with old
            // data.images = [];   // replace all the older image with new

            if(req.files){
                req.files.map((item) => {
                    data.images.push(item.filename)
                })   
            }
            data.slug = current_data.slug;
        
            if(!data.brand || data.brand == 'null'){
                data.brand = null;
            }

            if(!data.seller || data.seller == 'null'){
                data.seller = null;
            }
            
            // id,id,id
            if(!data.category_id || data.category_id === 'null'){
                data.category_id = null;
            } else {
                data.category_id = data.category_id.split(",");
            }

            data.actual_price = Number(data.price) - Number(data.price) * Number(data.discount)/100;
            data.is_featured = (data.is_featured == 1 ? true : false) // !"true" -> !false => true, !!1 => true
            this.product_svc.storeValidate(data);
            let response = await this.product_svc.updateProduct(req.params.id);
            res.json({
                result: response,
                msg: "Product Updated successfully",
                status: true
            })
        }catch(except){
            console.log("UpdateProduct: ", except);
            next({status: 400, msg: except})
        }
    }

    deleteImageByname = async(req, res, next) => {
        try{
            let res = await this.product_svc.deleteByImageName(req.params.product_id, req.params.image)
            res.json({
                status: true, 
                result: res, 
                msg: "Image deleted"
            })
        } catch(err) {
            next({status: 400, msg: "Image could not be deleted"})
        }
    }
}
module.exports = ProductController;
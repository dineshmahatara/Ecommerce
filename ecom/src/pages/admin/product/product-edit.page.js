import { useEffect, useCallback, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductForm from "./product-form.component";
import { product_svc } from "./product.service";

const AdminProductEdit = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [detail, setDetail] = useState();

    const updateProduct = async (data) => {
        try {
            console.log("Data: ", data)
            let form_data = new FormData();
            if(data.images){
                data.images.forEach((item) => {
                    if(typeof(item) === 'object'){
                        form_data.append("images", item, item.name)
                    }
                })
                delete data.images;
            }

            Object.keys(data).forEach((key) => {
                form_data.append(key, data[key])
            })

            console.log(data, form_data)
            let response = await product_svc.updateProduct(form_data, params.id);
            toast.success(response.msg)
            navigate("/admin/products")
        } catch (err) {
            toast.error(err);
        }
    }
    const getProductDetail = useCallback(
        async () => {
            try {
                let response = await product_svc.getDetailById(params.id);
                if (response.result) {
                    
                    setDetail({
                        name: response.result.name,
                        status: response.result.status,
                        images: response.result.images,
                        category_id: response.result.category_id ? response.result.category_id.map((item) => { return {value: item._id, label: item.name}}) : "",
                        brand: {label: response.result.brand?.title, value: response.result.brand?._id},
                        price: response.result.price,
                        discount: response.result.discount,
                        description: response.result.description,
                        is_featured: response.result.is_featured,
                        seller: response.result.seller
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }, [])

    useEffect(() => {
        getProductDetail();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Product Edit</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item ">
                    <NavLink to="/admin">
                        Dashboard
                    </NavLink>
                </li>
                <li className="breadcrumb-item ">
                    <NavLink to="/admin/products">
                        Product Listing
                    </NavLink>
                </li>
                <li className="breadcrumb-item active">
                    Product Edit
                </li>
            </ol>

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    Product Form
                </div>
                <div className="card-body">

                    <ProductForm
                        submitForm={updateProduct}
                        defaultValue={detail}
                    />

                </div>
            </div>
        </div>
    </>)
}

export default AdminProductEdit;
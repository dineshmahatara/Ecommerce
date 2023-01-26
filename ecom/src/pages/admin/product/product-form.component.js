import { Form, Col, Button, Image, Row } from "react-bootstrap"
import { useFormik } from "formik";
import { useEffect, useState, useCallback } from "react";
import * as Yup from "yup";
import Select from 'react-select'
import { category_svc } from "../category/category.service";
import { brand_svc } from "../brand/brand.service";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProductForm = ({ submitForm, defaultValue }) => {
    let [category, setCategory] = useState();
    let [brands, setBrands] = useState();


    let validationSchema = Yup.object({
        name: Yup.string().required().min(3),
        status: Yup.string().required(),
        price: Yup.number().required().min(1),
        discount: Yup.number().nullable().default(0).min(0).max(100),
        description: Yup.string().nullable(),
        is_featured: Yup.boolean().default(false),
        seller: Yup.string().nullable(),
        category_id: Yup.array().required().nullable(),
        brand: Yup.object().nullable()
    });
    let formik = useFormik({
        initialValues: {
            name: "",
            status: "",
            images: "",
            category_id: "",
            brand: "",
            price: "",
            discount: "",
            description: "",
            is_featured: "",
            seller: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values.brand = values.brand.value;
            let sel_cats = [];
            if (values.category_id) {
                sel_cats = values.category_id.map((item) => item.value)
            }
            values.category_id = sel_cats.join(",");
            submitForm(values)
        }
    })

    const getCategoryList = useCallback(
        async () => {
            try {
                let response = await category_svc.listAllCategories();
                if (response.status) {
                    setCategory(response.result);
                }
            } catch (excep) {
                console.error(excep);
            }
        }, [])


    const getBrandList = useCallback(async () => {
        try {
            let response = await brand_svc.listAllBrands();
            if (response.status) {
                let opt = response.result.map((item) => {
                    return {
                        value: item._id,
                        label: item.title
                    }
                })
                setBrands(opt);
            }
        } catch (except) {
            console.error(except);
        }
    }, [])


    const handleFile =(e) => {
            let files = Object.values(e.target.files);
            let allowed_exts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
            let populate_images = [];
            if (files.length) {
                files.map((image) => {
                    let parts_arr = image.name.split(".");
                    let ext = parts_arr.pop()
                    if (allowed_exts.includes(ext.toLowerCase())) {
                        if (image.size <= 5000000) {
                            populate_images.push(image);
                        } else {
                            formik.setErrors({
                                ...formik.errors,
                                images: image.name + " is greater than 5mb"
                            })
                        }
                    } else {
                        formik.setErrors({
                            ...formik.errors,
                            images: image.name + " format is not supported"
                        })
                    }

                })

                if (populate_images.length) {
                    formik.setValues({
                        ...formik.values,
                        images: populate_images
                    })
                }
            }

        }


    useEffect(() => {
        getBrandList()
        getCategoryList();
    }, [])

    useEffect(() => {
        if (defaultValue) {
            formik.setValues({
                ...defaultValue
            })
        }
    }, [defaultValue])

    console.log(formik.errors)
    return (<>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Title: </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="name"
                        placeholder="Enter the Product title"
                        required
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">
                        {formik.errors?.name}
                    </span>
                </Col>
            </Form.Group>


            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Description: </Form.Label>
                <Col sm={9}>
                    
                    <CKEditor
                        editor={ ClassicEditor }
                        data={formik.values.description}
                        onChange={ ( event, editor ) => {
                            const description = editor.getData();
                            
                            if(defaultValue.description){
                                formik.setValues({
                                    ...defaultValue,
                                    description: description
                                })                            
                            } else {
                                formik.setValues({
                                    ...formik.values,
                                    description: description
                                }) 
                            }
                        } }
                    />
                    <span className="text-danger">
                        {formik.errors?.description}
                    </span>
                </Col>
            </Form.Group>




            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Category: </Form.Label>
                <Col sm={9}>
                    <Select
                        options={category && category.map((item) => { return { label: item.name, value: item._id } })}
                        isMulti
                        name="category_id"
                        value={formik.values.category_id}
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                category_id: e
                            })
                        }}
                    />
                    <span className="text-danger">
                        {formik.errors?.category_id}
                    </span>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Price(Npr.): </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        size="sm"
                        type="number"
                        name="price"
                        placeholder="Enter the Product price"
                        required
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">
                        {formik.errors?.price}
                    </span>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Discount(%): </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        size="sm"
                        type="number"
                        name="discount"
                        placeholder="Enter the Product discount"
                        min={0}
                        max={100}
                        value={formik.values.discount}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">
                        {formik.errors?.discount}
                    </span>
                </Col>
            </Form.Group>




            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Brand: </Form.Label>
                <Col sm={9}>
                    <Select
                        options={brands}
                        name="brand"
                        value={formik.values.brand}
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                brand: e
                            })
                        }}
                    />
                    <span className="text-danger">
                        {formik.errors?.brand}
                    </span>
                </Col>
            </Form.Group>


            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Is Featured: </Form.Label>
                <Col sm={9}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Yes"
                        value={1}
                        checked={formik.values.is_featured}
                        onChange={(e) => {
                            formik.setValues({
                                ...formik.values,
                                is_featured: e.target.checked ? 1 : 0
                            })
                        }}
                    />
                    <span className="text-danger">
                        {formik.errors?.is_featured}
                    </span>
                </Col>
            </Form.Group>


            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Seller: </Form.Label>
                <Col sm={9}>
                    <Form.Select
                        size="sm"
                        name="seller"
                        value={formik.values.seller}
                        onChange={formik.handleChange}
                    >
                        <option>--Select Any One--</option>

                    </Form.Select>
                    <span className="text-danger">
                        {formik.errors?.brand}
                    </span>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Status: </Form.Label>
                <Col sm={9}>
                    <Form.Select
                        name="status"
                        required
                        size="sm"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                    >
                        <option>--Select Any one--</option>
                        <option value="active">Publish</option>
                        <option value="inactive">Un-Publish</option>
                    </Form.Select>
                    <span className="text-danger">
                        {formik.errors?.status}
                    </span>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Image: </Form.Label>
                <Col sm={3}>
                    <Form.Control
                        type="file"
                        required={!formik.values.images ? true : false}
                        name="images"
                        multiple
                        accept="image/*"
                        size="sm"
                        onChange={handleFile}
                    />
                    <span className="text-danger">
                        {formik.errors?.images}
                    </span>
                </Col>
            </Form.Group>

            <Row className="my-3">
                {
                    formik.values.images && formik.values.images.map((item, index) => (
                        <Col sm={6} md={2} key={index}>
                            <Image fluid src={typeof item === 'object' ? URL.createObjectURL(item) : process.env.REACT_APP_API_URL+"/assets/"+item}/>
                            <Button variant="danger" type="button"  size="sm" className="btn-rounded">
                                <i className="fa fa-trash"></i>
                            </Button>
                        </Col>
                    ))
                }
            </Row>

            <Form.Group className="mb-3 row">
                <Col sm={{ offset: 3, span: 9 }}>
                    <Button size="sm" variant="danger" type="reset" className="me-3">
                        <i className="fa fa-ban"></i> Cancel
                    </Button>
                    <Button size="sm" variant="success" type="submit">
                        <i className="fa fa-paper-plane"></i> Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    </>)
}

export default ProductForm;
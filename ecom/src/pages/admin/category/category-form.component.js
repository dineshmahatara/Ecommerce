import {Form, Col, Button, Image} from "react-bootstrap"
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const CategoryForm = ({submitForm, defaultValue}) => {

    let validationSchema = Yup.object({
        title: Yup.string().required().min(3),
        status: Yup.string().required(),
    });
    let formik = useFormik({
        initialValues: {
            title: "",
            status: "",
            image: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submitForm(values)
        }
    })

    useEffect(() => {
        if(defaultValue){
            formik.setValues({
                ...defaultValue
            })
        }
    }, [defaultValue])

    return (<>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 row">
                <Form.Label className="col-sm-3">Title: </Form.Label>
                <Col sm={9}>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="title"
                        placeholder="Enter the slider title"
                        required
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <span className="text-danger">
                        {formik.errors?.title}
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
                        required={!formik.values.image ? true : false}
                        name="image"
                        accept="image/*"
                        size="sm"
                        onChange={(e) => {
                            let file = e.target.files[0]
                            let parts_arr = file.name.split(".");
                            let ext = parts_arr.pop()
                            if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'].includes(ext.toLowerCase())) {
                                if (file.size <= 5000000) {
                                    formik.setValues({
                                        ...formik.values,
                                        image: file
                                    })
                                } else {
                                    formik.setErrors({
                                        ...formik.errors,
                                        image: "File size should be < 5Mb"
                                    })
                                }
                            } else {
                                formik.setErrors({
                                    ...formik.errors,
                                    image: "Invalid File Format"
                                })
                            }
                        }}
                    />
                    <span className="text-danger">
                        {formik.errors?.image}
                    </span>
                </Col>
                <Col sm={3}>
                    {
                        formik.values.image ?
                            (
                                typeof(formik.values.image) === 'object' ? <Image fluid src={URL.createObjectURL(formik.values?.image)} />
                                : <Image fluid src={process.env.REACT_APP_API_URL+"/assets/"+formik.values?.image} />
                            )
                            : <></>
                    }
                </Col>
            </Form.Group>

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

export default CategoryForm;
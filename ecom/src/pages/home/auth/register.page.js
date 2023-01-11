import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {useFormik} from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
    let defaultValue = {
        name: null,
        email: "",
        password: "",
        role: "",
        status: "active",
        image: "",
        address: ""
    }
    let validate = Yup.object({
        name: Yup.string().required().nullable().min(3),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(8),
        role: Yup.string().required(),
        status: Yup.string().default("active"),
        image: Yup.object().nullable(),
        address: Yup.string().nullable()
    })

    let formik = useFormik({
        initialValues: defaultValue,
        validationSchema: validate,
        onSubmit: (values) => {
            console.log("Submit: ", values);
        }
    })


    return (<>
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Register Page</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Name: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    required
                                    onChange={formik.handleChange}
                                    size="sm"></Form.Control>
                                <span className="text-danger">{formik.errors?.name}</span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Email: </Form.Label>
                            <Col sm={9}>
                                <Form.Control name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your email..."
                                    required
                                    size="sm"></Form.Control>
                                <span className="text-danger">{formik.errors?.email}</span>

                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control name="password"
                                    type="password"
                                    placeholder="Enter your password..."
                                    required
                                    onChange={formik.handleChange}
                                    size="sm"></Form.Control>
                                <span className="text-danger">{formik.errors?.password}</span>

                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Address: </Form.Label>
                            <Col sm={9}>
                                <Form.Control name="address"
                                    as={"textarea"}
                                    placeholder="Enter your Address..."
                                    required
                                    size="sm"
                                    rows={7}
                                    onChange={formik.handleChange}
                                    style={{resize: "none"}}></Form.Control>
                                <span className="text-danger">{formik.errors?.address}</span>

                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Role: </Form.Label>
                            <Col sm={9}>
                                <Form.Select
                                    size="sm"
                                    name="role"
                                    required
                                    onChange={formik.handleChange}
                                >
                                    <option>--Select Any One--</option>
                                    <option value="customer">Buyer</option>
                                    <option value="seller">Seller</option>
                                </Form.Select>
                                <span className="text-danger">{formik.errors?.role}</span>

                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Image: </Form.Label>
                            <Col sm={4}>
                                <Form.Control 
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        let {files} = e.target;
                                        let file = files[0];
                                        let ext = file.name.split(".");
                                        ext = ext.pop();
                                        if(["jpg",'jpeg','png','gif','bmp','svg','webp'].includes(ext.toLowerCase())){
                                            
                                            if(file.size <= 10000000){
                                                formik.setValues({
                                                    ...formik.values,
                                                    image: file
                                                })
                                            } else {
                                                formik.setErrors({
                                                    ...formik.errors,
                                                    image: "file size should be less than 10mb"
                                                })
                                            }
                                        } else {
                                            formik.setErrors({
                                                ...formik.errors,
                                                image: "File format not supported."
                                            })
                                        }
                                        // validate 
                                    }}
                                ></Form.Control>
                                <span className="text-danger">{formik.errors?.image}</span>

                            </Col>
                            <Col sm={2}>
                                {
                                    formik.values.image ? <>
                                        <img src={URL.createObjectURL(formik.values.image)} className="img img-fluid" /> 
                                    </>
                                    : <></>
                                }
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Col sm={{offset:3, span:9}}>
                                <Button variant="danger" className="me-3" type="reset">
                                    <i className="fa fa-trash"></i> Cancel
                                </Button>
                                <Button variant="success" type="submit">
                                    <i className="fa fa-paper-plane"></i> Register
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}

export default RegisterPage;
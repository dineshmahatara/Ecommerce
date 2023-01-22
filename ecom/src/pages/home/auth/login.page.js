import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

import { auth_svc } from "../../../services/auth.service";

const LoginPage = () => {
    let [data, setData] = useState({
        email: null,
        password: null
    })
    let [errData, setErrData] = useState({
        email: null, 
        password: null
    })
    // 
    let navigate = useNavigate()
    const handleChange = (e)=>{
        // let {name, type, value, checked, files} = e.target;
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            let user = await auth_svc.login(data);
            toast.success("welcome to admin panel!")
            navigate("/"+user.role)
        } catch(except) {
            if(except?.response?.status === 400){
                if(except?.response?.data?.msg) {
                    setErrData({
                        ...except.response.data.msg
                    })
                }
            } else {
                toast.warning(except.response.data.msg);
            }
        }
    }

    useEffect(() => {
        let token = localStorage.getItem("_mern15_token");
        let user = JSON.parse(localStorage.getItem("_mern15_user"));

        if(token) {
            navigate('/'+user.role)
        }
    }, [])

    return (<>
        <Container>
            <Row>
                <Col>
                    <h4 className="text-center">Login page</h4>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row mb-3">
                            <label className="form-label col-sm-3">Username: </label>
                            <div className="col-sm-9">
                                <input onChange={handleChange} defaultValue={data.email} type="email" className="form-control form-control-sm" placeholder="Enter your username..." name="email"/>
                                <span className="text-danger">
                                    {errData?.email}
                                </span>
                            </div>
                        </div>

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    onChange={handleChange}
                                type="password" defaultValue={data.password} size="sm" 
                                name="password" placeholder="Enter your passwrod..."></Form.Control>
                                <span className="text-danger">
                                    {errData?.password}
                                </span>
                            </Col>
                        </Form.Group>

                        <Form.Group className="row mb-3">
                            <Col sm={{offset: 3, span: 9}}>
                                <Button variant="danger" type="reset" className="me-1" size="sm">
                                    <i className="fa fa-trash"></i>&nbsp;
                                    Cancel
                                </Button>
                                {/* <NavLink className={"btn btn-sm btn-success"} to="/admin">
                                    <i className="fa fa-paper-plane"></i>&nbsp;
                                    Login
                                </NavLink> */}
                                
                                <Button variant="success" type="submit" size="sm">
                                    <i className="fa fa-paper-plane"></i>&nbsp;
                                    Login
                                </Button>
                            </Col>
                        </Form.Group>
                    </form>
                </Col>
            </Row>
        </Container>
    </>)
}

export default LoginPage
import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { HeaderComponent } from "../../../components/home/home.component"

const LoginPage = () => {
    let [data, setData] = useState({
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data: ", data)
        // TODO: API INTEGRATION
        let user_detail = {result: {
            user: {_id: 123, name: '', email: '', role: "admin"},
            token: "jwttoken"
        }};
        // localstorage, 
        // 5mb
        // string, no time limit
        localStorage.setItem("_mern15_user", JSON.stringify(user_detail))
        sessionStorage.setItem("_mern15_user", JSON.stringify(user_detail))

        let local_store_user = localStorage.getItem('_mern15_user');

        //
        localStorage.clear();   // all clear 
        localStorage.removeItem("_mern15_user")
        // cookie => a domain can have 50 cookie, every cookie size is generally 4096 characters
        // string can only be stored, certain time
        //if succes =?? dashabord /admin , /customer, /seller
        navigate("/"+user_detail.result.user.role)
    }
    return (<>
        <HeaderComponent />
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
                                <input onChange={handleChange} defaultValue={data.email} type="email" className="form-control form-control-sm" placeholder="Enter your username..." name="username"/>
                            </div>
                        </div>

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    onChange={handleChange}
                                type="password" defaultValue={data.password} size="sm" 
                                name="password" placeholder="Enter your passwrod..."></Form.Control>
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
import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { HeaderComponent } from "../../../components/home/home.component"

const LoginPage = () => {
    let [data, setData] = useState({
        email: "test@user.com",
        password: "admin123"
    })
    return (<>
        <HeaderComponent />
        {/* <div className="container">

            <div className="row">

                <div className="col">
                    <h4 className="text-center">Login page</h4>
                    <hr />
                </div>
            </div>
        </div>*/}
        <Container>
            <Row>
                <Col>
                    <h4 className="text-center">Login page</h4>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <form>
                        <div className="form-group row mb-3">
                            <label className="form-label col-sm-3">Username: </label>
                            <div className="col-sm-9">
                                <input defaultValue={data.email} type="email" className="form-control form-control-sm" placeholder="Enter your username..." name="username"/>
                            </div>
                        </div>

                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="password" defaultValue={data.password} size="sm" name="password" placeholder="Enter your passwrod..."></Form.Control>
                            </Col>
                        </Form.Group>
                    </form>
                </Col>
            </Row>
        </Container>
    </>)
}

export default LoginPage
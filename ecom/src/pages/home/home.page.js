import {Col, Container, Row, Table, Button} from "react-bootstrap"

import { users } from "../../mock/data";
import "./home.css";

const HomePage = () => {
    // state maintain 
    let data = users.result
    return (<>
        <Container fluid>
            <Row>
                <Col sm={12}> 
                    <Col bsPrefix="text-center" as={"h1"}>User List</Col>
                    <hr />
                    <Table bordered hover responsive size="sm">
                        <thead className="table-dark">
                            <tr>
                                <th>S.N</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.role}</td>
                                        <td>{item.status}</td>
                                        <t>
                                            <Button variant="success" size="sm" className="me-3 btn-rounded">
                                                <i className="fas fa-pen-to-square "></i>
                                            </Button>
                                            <Button variant="danger" size="sm" className="btn-rounded">
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                            
                                        </t>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>)
}

export default HomePage;
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import logo from "../../assets/image/logo.png"
import {FaMap, FaMapMarked, FaPhoneAlt} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
    return (<>
    {/* Nav Section Start */}
    <Navbar bg="light" variant="light" style={{maxHeight: "30px"}}>
            <Container>
                
                <Row>
                    <Col className="py-2">
                        <span className="me-3"><FaPhoneAlt /> <span className="text-dark">+977 1234567890</span></span>
                        <span><FaMapMarked /></span>
                    </Col>
                    
                </Row>
            </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="Logo" src={logo} className="img img-fluid logo-image" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className={"nav-link"} to="/">Home</NavLink>
                    <Nav.Link href="#features">Category</Nav.Link>
                    <Nav.Link href="#pricing">Products</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">Cart (0)</Nav.Link>

                    <NavLink className={"nav-link"} to="/login">Login</NavLink>
                    <NavLink className={"nav-link"} to="/register">Register</NavLink>

                    {/* <Nav.Link href="#pricing">Sandesh</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
        {/* Nav Section Ends */}
    </>)
}

export const FooterComponent = () => {
    // 
    return (<>
    <footer className="bg-dark">
            <Container fluid>
                <Row>
                    <Col sm={12} lg={4}>
                        First Col
                    </Col>
                    <Col sm={12} lg={4}>
                        Second Col
                    </Col>
                    <Col sm={12} lg={4}>
                        Third Col
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}
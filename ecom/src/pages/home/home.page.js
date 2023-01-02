import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap"

import { users } from "../../mock/data";
import "./home.css";
import logo from "../../assets/image/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer-image.gif";
import cat1 from "../../assets/image/cat-1.jpeg";

import {FaMap, FaMapMarked, FaPhoneAlt} from "react-icons/fa";

const HomePage = () => {
    // state maintain 
    let data = users.result
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

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
                <Navbar.Brand href="#home">
                    <img alt="Logo" src={logo} className="img img-fluid logo-image" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Category</Nav.Link>
                    <Nav.Link href="#pricing">Products</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">Cart (0)</Nav.Link>

                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>

                    {/* <Nav.Link href="#pricing">Sandesh</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
        {/* Nav Section Ends */}

        {/* Slider Banner */}
        <Slider {...settings}>
            <div>
                <img src={banner1} alt="Slider" />
            </div>
            <div>
                <img src={banner2} alt="Slider" />
            </div>
            <div>
                <img src={banner3} alt="Slider" />
            </div>

        </Slider>
        {/* Slider Banner */}

        {/* Offer */}
        <Container>
            <Row>
                <Col>
                    <Nav.Link href="/">
                        <img className="img img-fluid" src={offerImage} />
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
        {/* Offer ends */}

        <div className="bg-light">
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h4 className="text-center">
                            Categories
                        </h4>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div>


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

export default HomePage;
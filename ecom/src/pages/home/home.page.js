import { Accordion, Tab, Nav, Container, Row, Col, Card } from "react-bootstrap"

import { users } from "../../mock/data";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer-image.gif";
import cat1 from "../../assets/image/cat-1.jpeg";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// username, password => single state variable => two state var 
// input defaultValue= username , password 
// <input type="email" defaultValue={data.email} />

const HomePage = () => {
    // state maintain 
    // banner state create 
    // load => banner state null => skeleton/loading...
    // API Call => Effect ===> State change / update
    let [banner, setBanner] = useState();
    let [loading, setLoading] = useState(true)

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

    // useEffect(() =>{
    //     console.log("I am always")
    //     //This hook always calls whenever any state variable of this component load/updates
    // });

    useEffect(() => {
        console.log("On first mount")
        // to get the data from API 
        let bannerData = [{
            _id: "",
            title: "Banner 1",
            image: banner1,
            link: ""
        }, {
            _id: "",
            title: "Banner 1",
            image: banner2,
            link: ""
        }, {
            _id: "",
            title: "Banner 1",
            image: banner3,
            link: ""
        }];
        setBanner(bannerData)
        setLoading(false)
        // this hook calls once on the component first mount
    }, []);

    useEffect(() => {
        console.log("Only on loading state")
        // when the loading state gets updated, this hook calls
    }, [loading, banner])

    return (<>
        {
            loading ? "Loading..." :
                <Slider {...settings}>
                    {
                        banner && banner.map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))
                    }

                </Slider>

        }

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
                            <NavLink to="/category/1">
                                <Card.Img variant="top" src={cat1} />
                            </NavLink>
                            <Card.Body>
                                <Card.Title>
                                    <NavLink to="/category/1">
                                        Card Title
                                    </NavLink>
                                </Card.Title>
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

        {/* <Container>
            <Row>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Accordion defaultActiveKey="0">

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>


                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Accordion defaultActiveKey="0">

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>



                </Col>
            </Row>
        </Container> */}

    </>)
}

export default HomePage;
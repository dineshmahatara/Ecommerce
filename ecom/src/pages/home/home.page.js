import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap"

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
import { HeaderComponent } from "../../components/home/home.component";
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
        },{
            _id: "",
            title: "Banner 1",
            image: banner2,
            link: ""
        },{
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
    },[loading, banner])

    return (<>

        <HeaderComponent />        

       {
        loading ? "Loading..." :  
        <Slider {...settings}>
            {
                banner && banner.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.title}/>
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
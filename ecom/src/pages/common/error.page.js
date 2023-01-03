import { Container, Row, Col } from "react-bootstrap";
import { HeaderComponent } from "../../components/home/home.component";

const ErrorPage = ({error}) => {
    return (<>
        <HeaderComponent />
        <Container>
            <Row>
                <Col className="text-danger">
                    {error === 404 ? "Resource not found" : "Server error!!"}
                </Col>
            </Row>
        </Container>
    </>)
}
export default ErrorPage;
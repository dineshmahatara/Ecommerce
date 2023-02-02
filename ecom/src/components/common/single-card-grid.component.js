import { Card, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SingleCardGridComponent = ({
    title, image, url
}) => {
    return (<>
        <Card >
            <NavLink to={url}>
                <Card.Img variant="top" src={image} />
            </NavLink>
            {
                title &&
                <>
                    <Card.Body>
                        <Card.Title
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}
                        >
                            <NavLink to={url}>
                                {title}
                            </NavLink>
                        </Card.Title>
                    </Card.Body>
                </>
            }
        </Card>
    </>)
}

export default SingleCardGridComponent;
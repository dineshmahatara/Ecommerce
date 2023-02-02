import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import noImage from "../../../assets/image/noimage.png"
const SingleProductGrid = ({product}) => {
    let navigate = useNavigate();

    const goToDetail = (e) => {
        navigate("/product-detail/"+product.slug)
    }
    const handleErr  = (e) => {
        e.target.src = noImage
    }
    return (<>

        <Card onClick={goToDetail} style={{cursor: "pointer"}}>
            <Card.Img variant="top" src={process.env.REACT_APP_API_URL+"/assets/"+product.images[0]} onError={handleErr}/>
            <Card.Body>
                <Card.Title style={{whiteSpace: 'nowrap',overflow:"hidden", textOverflow: "ellipsis"}}>
                    {product.name}
                </Card.Title>
                <Card.Text as="div">
                    <p className="text-danger">
                        Npr. {product.actual_price}
                    </p>
                    {
                        product.discount ? <>
                            <del>
                                Npr. {product.price}
                            </del>&nbsp;
                            -{product.discount}%
                        </> : <></>
                    }
                </Card.Text>
            </Card.Body>
        </Card>

    </>)
}

export default SingleProductGrid;
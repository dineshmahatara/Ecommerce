import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({data, loading}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return (<>
    {
            loading ? "Loading..." :
                <Slider {...settings}>
                    {
                        data && data.map((item, index) => (
                            <div key={index}>
                                <img src={process.env.REACT_APP_API_URL+'/assets/'+item.image} alt={item.title} className={"img img-fluid"} />
                            </div>
                        ))
                    }

                </Slider>

        }
    </>)
}

export default SliderComponent;
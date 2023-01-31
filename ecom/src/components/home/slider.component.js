import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const SliderComponent = ({settings, data, loading}) => {

    return (<>
    {
            loading ? "Loading..." :
                <Slider {...settings}>
                    {
                        data && data.map((item, index) => (
                            <div className="test" key={index}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))
                    }

                </Slider>

        }
    </>)
}

export default SliderComponent;
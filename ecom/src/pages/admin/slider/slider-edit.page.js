import { useFormik } from "formik";
import { useEffect, useCallback, useState } from "react";
import { Form, Col, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import SliderForm from "./slider-form.component";
import { slider_svc } from "./slider.service";

const AdminSliderEdit = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [detail, setDetail] = useState();

    const updateSlider = async (data) => {
        try {
            let response = await slider_svc.updateSlider(data, params.id);
            toast.success(response.msg)
            navigate("/admin/sliders")
        } catch (err) {
            toast.error(err);
        }
    }
    const getSliderDetail = useCallback(
        async () => {
            try {
                let response = await slider_svc.getDetailById(params.id);
                if (response.result) {
                    setDetail({
                        title: response.result.title,
                        status: response.result.status,
                        link: response.result.link,
                        image: response.result.image
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }, [])

    useEffect(() => {
        getSliderDetail();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Slider Edit</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item ">
                    <NavLink to="/admin">
                        Dashboard
                    </NavLink>
                </li>
                <li className="breadcrumb-item ">
                    <NavLink to="/admin/sliders">
                        Slider Listing
                    </NavLink>
                </li>
                <li className="breadcrumb-item active">
                    Slider Edit
                </li>
            </ol>

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    Slider Form
                </div>
                <div className="card-body">

                    <SliderForm
                        submitForm={updateSlider}
                        defaultValue={detail}
                    />

                </div>
            </div>
        </div>
    </>)
}

export default AdminSliderEdit;
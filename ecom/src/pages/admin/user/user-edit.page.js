import { useEffect, useCallback, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from "./user-form.component";
import { user_svc } from "./user.service";

const AdminUserEdit = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [detail, setDetail] = useState();

    const updateUser = async (data) => {
        try {
            let response = await user_svc.updateUser(data, params.id);
            toast.success(response.msg)
            navigate("/admin/users")
        } catch (err) {
            toast.error(err);
        }
    }
    const getUserDetail = useCallback(
        async () => {
            try {
                let response = await user_svc.getDetailById(params.id);
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
        getUserDetail();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">User Edit</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item ">
                    <NavLink to="/admin">
                        Dashboard
                    </NavLink>
                </li>
                <li className="breadcrumb-item ">
                    <NavLink to="/admin/users">
                        User Listing
                    </NavLink>
                </li>
                <li className="breadcrumb-item active">
                    User Edit
                </li>
            </ol>

            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    User Form
                </div>
                <div className="card-body">

                    <UserForm
                        submitForm={updateUser}
                        defaultValue={detail}
                    />

                </div>
            </div>
        </div>
    </>)
}

export default AdminUserEdit;
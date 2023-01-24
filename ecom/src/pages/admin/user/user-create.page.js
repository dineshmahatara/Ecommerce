
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from "./user-form.component";
import { user_svc } from "./user.service";

const AdminUserCreate = () => {
    let navigate = useNavigate();
    const addUser = async (data) => {
        try{
            let response = await user_svc.addUser(data);
            toast.success(response.msg)
            navigate("/admin/users")
        } catch(err) {
            toast.error(err);
        }
    }
    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">User Create</h1>
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
                    User Create
                </li>
            </ol>
            
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    User Form
                </div>
                <div className="card-body">
                    
                    <UserForm submitForm={addUser}/>
                    
                </div>
            </div>
        </div>
    </>)
}

export default AdminUserCreate;
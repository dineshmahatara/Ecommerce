import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const AdminAccessControl = ({ Component }) => {
    let token = localStorage.getItem("_mern15_token")
    let [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    useEffect(() => {

        if (!token) {
            navigate("/login")
        } else {
            // TODO: API INTEGRATION FOR token Verification
            // user role => 
            let user_detail = {
                result: { 
                    _id: 1, 
                    name: "Sandesh Bhattarai", 
                    email: "sandesh.bhattarai@broadwayinfosys.com", 
                    role: "admin" 
                }
            }
            if(user_detail.result.role !== 'admin'){
                toast.warning("You do not have previliage to access admin panel.")
            }
            setLoading(false);
        }
    }, [])
    return loading ? <>Loading...</> : Component

}
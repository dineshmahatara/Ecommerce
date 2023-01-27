import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth_svc } from "../../services/auth.service"
import {useDispatch} from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { setLoggedInUser } from "../../reducers/user.reducer"

export const AdminAccessControl = ({ Component, accessTo }) => {
    let [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const getUserDetail = useCallback(async () => {
        try {
            let response = await auth_svc.getLoggedInUser();
            
            dispatch(setLoggedInUser({
                name: response.result.name,
                email: response.result.email,
                role: response.result.role,
                user_id: response.result._id
            }))
            
            if(response.result.role === accessTo) {
                setLoading(false)
            } else {
                toast.warning("You do no have access to admin panel!");
                navigate("/"+response.result.role);
            }
    
        }catch(error) {
            // 
            console.error(error);
        }
    }, [accessTo, navigate])

    useEffect(() => {
        // setTimeout(() => {
            getUserDetail()
        //}, 3000)
    }, [getUserDetail])
    return loading ? <>
    <ClipLoader
        color={"#ff0000"}
        loading={loading}
        cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </> : Component

}
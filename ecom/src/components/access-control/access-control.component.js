import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth_svc } from "../../services/auth.service"
import {useDispatch, useSelector} from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { getLoggedInUser, setLoggedInUser } from "../../reducers/user.reducer"

export const AdminAccessControl = ({ Component, accessTo }) => {
    let [loading, setLoading] = useState(true)
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const loggedInUser = useSelector((store) => {
        if(store.user.loggedInUser){
            return store.user.loggedInUser
        }
    })

    useEffect(() => {
        if(loggedInUser){
            if(loggedInUser.role === accessTo) {
                setLoading(false)
            } else {
                toast.warning("You do no have access to admin panel!");
                navigate("/"+loggedInUser.role);
            }
        } else {
            navigate('/login')
        }
    }, [loggedInUser])

    useEffect(() => {
        dispatch(getLoggedInUser());
       
    }, [])
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
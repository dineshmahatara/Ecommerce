import { Outlet } from "react-router"
import { FooterComponent, HeaderComponent } from "../../components/home/home.component"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getLoggedInUser } from "../../reducers/user.reducer"

const HomePageLayout = () => {
    // token 
    // effect hook, getLoggedInuser()
    // response => store update

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedInUser({}))
    }, [])
    return (<>
        <HeaderComponent />
            <Outlet />
        <FooterComponent />
    </>)
}
export default HomePageLayout;
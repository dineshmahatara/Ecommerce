import { Outlet } from "react-router"
import { FooterComponent, HeaderComponent } from "../../components/home/home.component"

const HomePageLayout = () => {
    return (<>
        <HeaderComponent />
            <Outlet />
        <FooterComponent />
    </>)
}
export default HomePageLayout;
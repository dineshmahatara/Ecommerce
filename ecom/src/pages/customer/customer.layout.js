import { AdminTopNav, AdminFooter } from "../../components/admin/admin-partials.component"
import { Outlet } from "react-router-dom"
import CustomerSidebar from "../../components/customer/customer-sidebar.component"
const CustomerLayout = () => {
    return (<>
        <AdminTopNav />
        <div id="layoutSidenav">
            <CustomerSidebar />
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    </>)
}
export default CustomerLayout;
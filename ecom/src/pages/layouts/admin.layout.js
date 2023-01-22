import { Outlet } from "react-router-dom";
import "./admin.layout.css"
import "bootstrap";
import { AdminFooter, AdminSidebar, AdminTopNav } from "../../components/admin/admin-partials.component";

const AdminLayout = () => {
    
    return (<>
        <AdminTopNav />
        <div id="layoutSidenav">
            <AdminSidebar />
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    </>)
}

export default AdminLayout;
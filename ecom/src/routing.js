import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/global.css"


import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/home/auth/login.page"
import ErrorPage from "./pages/common/error.page";
import CategoryDetail from "./pages/home/category/category-detail.page";
import AdminLayout from "./pages/layouts/admin.layout";
import AdminDashboard from "./pages/admin/dashboard/admin-dashboard.page";

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/category/:id" element={<CategoryDetail />}/>

                <Route path="/search/" element={<>Search Page</>} />


                {/* CMS  */}
                    {/* 
                        let date = new Date();
                        let hour = date.getHours();
                        let minut = date.getMinutes();
                        let sec = date.getSeconds();
                        
                        /api/v1/user/   post => Create
                        /api/v1/user/   get => List all
                        /api/v1/user/:id get => Detail fetch
                        /api/v1/user/:id put => Update 
                        /api/v1/user/:id delete => Delete user
                    */}
                    
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="user" element={<>User Outlet<Outlet /></>}>
                            <Route index element={<>List all user</>} />
                            {/* /admin/user/create , /admin/user/1 */}
                            <Route path="create" element={<>Create Component</>} />
                            <Route path=":id" element={<>Detail of User</>} />
                            <Route path=":id/edit" element={<>Edit user form</>}/>
                        </Route>
                    </Route>

                    <Route path="/customer" element={<>Customer Dashboard</>}/>
                    <Route path="/customer/order" element={<>Customer Current Order</>}/>
                    <Route path="/customer/order/history" element={<>Customer Order History</>}/>
                    
                    
                    
                    
                {/* CMS  */}

                <Route path="*" element={<ErrorPage error={404}/>} />
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;
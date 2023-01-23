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
import { AdminAccessControl } from "./components/access-control/access-control.component";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RegisterPage from "./pages/home/auth/register.page";
import HomePageLayout from "./pages/layouts/home-page.layout";

import AdminSliderList from "./pages/admin/slider/slider-list.page";
import AdminSliderCreate from "./pages/admin/slider/slider-create.page";
import AdminSliderEdit from "./pages/admin/slider/slider-edit.page";

import AdminBrandList from "./pages/admin/brand/brand-list.page";
import AdminBrandCreate from "./pages/admin/brand/brand-create.page";
import AdminBrandEdit from "./pages/admin/brand/brand-edit.page";


import AdminCategoryList from "./pages/admin/category/category-list.page";
import AdminCategoryCreate from "./pages/admin/category/category-create.page";
import AdminCategoryEdit from "./pages/admin/category/category-edit.page";

const Routing = () => {
    return (<>
        <ToastContainer />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>

                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />

                    <Route path="category/:id" element={<CategoryDetail />}/>

                    <Route path="search/" element={<>Search Page</>} />
                </Route>
                    
                    <Route path="/admin" element={<AdminAccessControl accessTo="admin" Component={<AdminLayout />} />}>
                        <Route index element={<AdminDashboard />} />

                        <Route path="sliders" element={<AdminSliderList />}/>
                        <Route path="slider/create" element={<AdminSliderCreate />}/>
                        <Route path="slider/:id" element={<AdminSliderEdit />}/>


                        <Route path="brands" element={<AdminBrandList />}/>
                        <Route path="brand/create" element={<AdminBrandCreate />}/>
                        <Route path="brand/:id" element={<AdminBrandEdit />}/>
                        <Route path="categories" element={<AdminCategoryList />}/>
                        <Route path="category/create" element={<AdminCategoryCreate />}/>
                        <Route path="category/:id" element={<AdminCategoryEdit />}/>



                        <Route path="user" element={<>User Outlet<Outlet /></>}>
                            <Route index element={<>List all user</>} />
                            {/* /admin/user/create , /admin/user/1 */}
                            <Route path="create" element={<>Create Component</>} />
                            <Route path=":id" element={<>Detail of User</>} />
                            <Route path=":id/edit" element={<>Edit user form</>}/>
                        </Route>
                    </Route>

                    <Route path="/customer" element={<AdminAccessControl Component={<>Customer Dashboard</>} accessTo="customer" />}/>
                    <Route path="/customer/order" element={<>Customer Current Order</>}/>
                    <Route path="/customer/order/history" element={<>Customer Order History</>}/>
                    
                    
                    
                    
                {/* CMS  */}

                <Route path="*" element={<ErrorPage error={404}/>} />
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;
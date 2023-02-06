import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/global.css"


import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/home/auth/login.page"
import ErrorPage from "./pages/common/error.page";
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

import AdminProductList from "./pages/admin/product/product-list.page";
import AdminProductCreate from "./pages/admin/product/product-create.page";
import AdminProductEdit from "./pages/admin/product/product-edit.page";


import AdminUserList from "./pages/admin/user/user-list.page";
// import AdminUserCreate from "./pages/admin/user/user-create.page";
// import AdminUserEdit from "./pages/admin/user/user-edit.page";

import CategoryDetail from "./pages/home/category/category-detail.page";
import BrandDetail from "./pages/home/brand/brand-detail.page";
import ProductDetailPage from "./pages/home/product/product-detail.page";

import { Provider } from "react-redux";
import store from "./store";
import CustomerLayout from "./pages/customer/customer.layout";

import CartList from "./pages/home/cart/cart-list.page";

const Routing = () => {
    return (<>
        <Provider store={store}>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePageLayout />}>

                        <Route index element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />

                        <Route path="brand/:slug" element={<BrandDetail />} />
                        <Route path="category/:slug" element={<CategoryDetail />} />
                        <Route path="product-detail/:slug" element={<ProductDetailPage />} />

                        <Route path="cart" element={<CartList />} />
                        <Route path="checkout" element={<>Checkout</>} />

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
                            
                            <Route path="products" element={<AdminProductList />}/>
                            <Route path="product/create" element={<AdminProductCreate />}/>
                            <Route path="product/:id" element={<AdminProductEdit />}/>
                            

                            <Route path="users" element={<><Outlet /></>}>
                                <Route index element={<AdminUserList />} />
                                <Route path="create" element={<>Create Component</>} />
                                <Route path=":id" element={<>Detail of User</>} />
                                <Route path=":id/edit" element={<>Edit user form</>}/>
                            </Route>
                        </Route>

                        <Route path="/customer" element={<AdminAccessControl Component={<CustomerLayout />} accessTo="customer" />}>
                            <Route path="order" element={<>Customer Current Order</>}/>
                            <Route path="order-history" element={<>Customer Order History</>}/>
                        </Route>
                        
                        
                        
                    {/* CMS  */}

                    <Route path="*" element={<ErrorPage error={404}/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>)
}

export default Routing;
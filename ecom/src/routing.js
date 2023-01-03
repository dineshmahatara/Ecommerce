import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/home/auth/login.page"
import ErrorPage from "./pages/common/error.page";

const Routing = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<ErrorPage error={404}/>} />
            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing;
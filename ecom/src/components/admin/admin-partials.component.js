import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"

// A => <B /> => <C /> => <D  />=> <E />
// A <= B <= C <= D <= E
export const AdminTopNav = () => {
    // TODO: Implement by using Store/Redux
    let loggedInUser =JSON.parse(localStorage.getItem('mern15_user'));
    useEffect(() => {
        let className = (localStorage.getItem('sb|sidebar-toggle'));

        if (className === 'true') {
            document.body.classList.add('sb-sidenav-toggled')
        }
    }, [])
    const sidebarToggle = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }

    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('mern15_user');
        localStorage.removeItem("mern15_token");
        navigate("/login")
    }

    return (<>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand ps-3" to="/admin">
                Admin Panel
            </NavLink>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={sidebarToggle}>
                <i className="fas fa-bars"></i>
            </button>
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <span style={{color: "#ffffff"}}>{
                    loggedInUser.name
                }</span>
            </div>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Profile Update</a></li>
                        <li><a className="dropdown-item" href="#!">Change Password</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><NavLink className="dropdown-item" to="/login" onClick={logout}>Logout</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>)
}


export const AdminSidebar = () => {
    return (<>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Visit Site
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/admin/sliders">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-images"></i>
                            </div>
                            Slider Manage
                        </NavLink>

                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Brand Manage
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Category Manage
                        </NavLink>

                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            User Manage
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Product Manage
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Order Manage
                        </NavLink>

                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Review Manage
                        </NavLink>
                        
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            Tranasctions Manage
                        </NavLink>
                        
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>

    </>)
}

export const AdminFooter = () => {
    return (<>
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
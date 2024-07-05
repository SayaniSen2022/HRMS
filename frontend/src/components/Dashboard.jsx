import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid")
        navigate("/");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">HRMS</span>
            </NavLink>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <NavLink
                  to="/dashboard"
                  className="nav-NavLink px-0 align-middle text-decoration-none text-white"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/employee"
                  className="nav-NavLink px-0 align-middle text-decoration-none"
                  style={({ isActive }) => ({
                    color: isActive ? "deeppink" : "white",
                    opacity: isActive ? 1 : "",
                  })}
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/category"
                  className="nav-NavLink px-0 align-middle text-decoration-none"
                  style={({ isActive }) => ({
                    color: isActive ? "deeppink" : "white",
                    opacity: isActive ? 1 : "",
                  })}
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-NavLink px-0 align-middle text-decoration-none"
                  style={({ isActive }) => ({
                    color: isActive ? "deeppink" : "white",
                    opacity: isActive ? 1 : "",
                  })}
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/leave_portal"
                  className="nav-NavLink px-0 align-middle text-decoration-none"
                  style={({ isActive }) => ({
                    color: isActive ? "deeppink" : "white",
                    opacity: isActive ? 1 : "",
                  })}
                >
                  <i className="fs-4 bi bi-calendar-check  ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Leave Portal</span>
                </NavLink>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <NavLink className="nav-NavLink px-0 align-middle text-danger text-decoration-none">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

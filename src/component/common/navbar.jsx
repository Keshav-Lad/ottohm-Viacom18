import React from "react";
import "./Css/navbar.css";
import Notification from "../../utils/icons/Notification.svg";
import Newuser from "../../utils/images/Newuser.png";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar, hideSidebar } from "../../utils/reducer/sidebarreducer"
import constants from "../../utils/constants.json";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const logout=()=>{
    localStorage.setItem(constants.token,"");
    alert("Logout Successfully");
    navigate(constants.login);

  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
      <button
       onClick={()=>{dispatch(!sidebarStatus ? showSidebar() : hideSidebar())}} 
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse me-2"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto  mb-2 mb-lg-0"></ul>
        <form className="d-flex">
        <img className="" src={Notification} alt="Notification" />
          <div className="icon ms-auto me-auto">
            <label className="bg-body me-2 ">
              <div className="row ">
                <div className="col-sm-12">

                  <span className="ms-2">
                    <img className="icon " src={Newuser} alt="User" />
                  </span>
                  <a className="ps-2 navbar-brand  fs-5" href="/">John Doe</a>
                  <br />
                  <span className="ms-5">
                    <a className="navbar-brand  fs-6"  href="/">Admin</a>
                  </span>
                  <div className="btn-group ps-2">
                    <button
                      className="border-0 dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    ></button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <button className="dropdown-item">
                          Change Password
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={logout}
                         >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;

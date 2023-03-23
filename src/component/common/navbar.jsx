import React from "react";
import "./Css/navbar.css";
import Notification from "../../utils/icons/Notification.svg";
import Newuser from "../../utils/images/Newuser.png";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar, hideSidebar } from "../../utils/reducer/sidebarreducer";
import constants from "../../utils/constants.json";
import { useNavigate } from "react-router-dom";
import GroupNotification from "../../utils/icons/GroupNotification.svg";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const logout = () => {
    localStorage.setItem(constants.token, "");
    alert("Logout Successfully");
    navigate(constants.login);
  };
  // const isMobileView = window.innerWidth < 768;
  const currentDate = new Date();
  const dateTimeString = currentDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
      <button
        onClick={() => {
          dispatch(!sidebarStatus ? showSidebar() : hideSidebar());
        }}
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
          <div className="btn-group dropdown">
            <button
              className="notification-btn"
              type="button border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-mdb-toggle="dropdown"
            >
              <img className="" src={Notification} alt="Notification" />
            </button>
            <div className="dropdown-menu notification-dropdown-menu dropdown-menu-end fade">
              <p className="dropdown-item list-items-dropdown textnormal"><img className="me-2" src={GroupNotification} alt="notification"/>Job 10 has been terminated <span className="date-time-notification textnormal">{dateTimeString}</span></p>
              <p className="dropdown-item list-items-dropdown textnormal"><img className="me-2" src={GroupNotification} alt="notification"/>Job 7 has been pushed <span className="date-time-notification textnormal">{dateTimeString}</span></p>
              <p className="dropdown-item list-items-dropdown textnormal"><img className="me-2" src={GroupNotification} alt="notification"/>Created by Admin <span className="date-time-notification textnormal">{dateTimeString}</span></p>
            </div>

          </div>
          <div className="icon ms-auto me-auto">
            <label className="bg-body me-2 ">
              <div className="row ">
                <div className="col-sm-12">
                  <span className="ms-2">
                    <img className="icon " src={Newuser} alt="User" />
                  </span>
                  <label className="ps-2">
                    John Doe
                  </label>
                  <br />
                  <span className="ms-5">
                    <label>
                      Admin
                    </label>
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
                        <button className="dropdown-item" onClick={logout}>
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

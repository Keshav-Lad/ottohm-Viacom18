import React from "react";
import "./Css/navbar.css";
import Newuser from "../../utils/images/Newuser.png";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar, hideSidebar } from "../../utils/reducer/sidebarreducer";
import constants from "../../utils/constants.json";
import { useNavigate } from "react-router-dom";
import GroupNotification from "../../utils/icons/GroupNotification.svg";
import { FaBell } from "react-icons/fa";
import {
  refreshMessage,
  resetCounter,
} from "../../utils/reducer/notificationreducer";
import Arrow from "../../utils/icons/Arrow.svg";
import { useState } from "react";
import classnames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const messages = useSelector((state) => state.notification.message);
  const counter = useSelector(
    (state) => state.notification.notificationCounter
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const logout = () => {
    localStorage.setItem(constants.token, "");
    dispatch(refreshMessage());
    dispatch(resetCounter());
    toast.success("Log out Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      onClose: () =>
        setTimeout(() => {
          navigate(constants.login);
        }, 2000),
    });
  };

  const resetNotifications = () => {
    dispatch(refreshMessage());
    dispatch(resetCounter());
  };

  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const toggleButtonViewer = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  // const isMobileView = window.innerWidth < 768;
  const currentDate = new Date();
  const dateTimeString = currentDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <button
        onClick={() => {
          dispatch(!sidebarStatus ? showSidebar() : hideSidebar());
        }}
        className="navbar-toggler ms-auto dropdown"
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
              onBlur={resetNotifications}
            >
              <FaBell size={20} className="rotate-on-hover-bell-icon" />
              <span className=" start-90  translate-middle badge rounded-pill bg-danger badge-img">
                {counter ? (counter > 9 ? `+9` : counter) : ""}
              </span>
            </button>

            <div className="dropdown-menu notification-dropdown-menu dropdown-menu-end fade scrollable-div-dropdown-menu">
              {/* <span className="triangle"></span> */}
              {messages.length ? (
                messages.map((message, index) => (
                  <p
                    key={index}
                    className="dropdown-item list-items-dropdown textnormal"
                  >
                    <img
                      className="me-2"
                      src={GroupNotification}
                      alt="notification"
                    />
                    {message}
                    <span className="date-time-notification textnormal">
                      {dateTimeString}
                    </span>
                  </p>
                ))
              ) : (
                <p className="dropdown-item list-items-dropdown text-muted textnormal">
                  no new notifications
                </p>
              )}
            </div>
          </div>
          <div className="icon ms-auto me-auto">
            <ToastContainer />
            <label className="bg-body me-2 ">
              <div className="row ">
                <div className="col-sm-12">
                  <span className="ms-2">
                    <img className="icon " src={Newuser} alt="User" />
                  </span>
                  <label className="ps-2">John Doe</label>
                  <br />
                  <span className="ms-5">
                    <label className="user-name">Admin</label>
                  </span>
                  <div className="btn-group ps-2 ">
                    <button
                      className="border-0 dropdown"
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                      onClick={toggleButtonViewer}
                      //onBlurCapture={toggleButtonViewer}
                    >
                      <img
                        src={Arrow}
                        alt=""
                        className={classnames({ "arrow-img": isDropdownOpen })}
                      />
                    </button>
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
                        <button
                          className="dropdown-item"
                          onClick={logout}
                          type="button"
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

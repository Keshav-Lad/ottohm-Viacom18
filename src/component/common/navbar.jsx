import React from 'react';
import "./Css/navbar.css";
import Notification from "../../utils/icons/Notification.svg";
import Newuser from "../../utils/images/Newuser.png";


const Navbar=()=>{

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form className="d-flex">
          <div className="icon ms-auto me-auto">
            <img src={Notification} alt="Notification" />
            <img className="icon" src={Newuser} alt="User" />
          </div>
        </form>
      </div>
    </nav>
  )
}
export default Navbar;
import React from 'react';
import "./Css/navbar.css";
import Notification from "../../utils/icons/Notification.svg";
import Newuser from "../../utils/images/Newuser.png";
import Arrow from "../../utils/icons/arrow.svg";


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
            <img className='me-2 bg-light' src={Notification} alt="Notification" />
            <label className='bg-light me-2 btn'>
              <div className='row'>
              <div className='col-sm-3'>
            <img className="icon m-1"  src={Newuser} alt="User" />
            </div>            
            <div className='col-sm-9'>
            <a1>John Doe</a1><br/>
            <a2>Admin</a2>
            <img className="icon ms-1"  src={Arrow} alt="Down Arrow" />
            </div>
            </div>
            </label>          
          </div>
        </form>
      </div>
    </nav>
  )
}
export default Navbar;
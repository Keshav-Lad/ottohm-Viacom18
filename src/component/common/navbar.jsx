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
      <div className="collapse navbar-collapse me-2" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto  mb-2 mb-lg-0"></ul>
        <form className="d-flex">
          <div className="icon ms-auto me-auto">
            <img className='me-3' src={Notification} alt="Notification" />
            <label className='bg-light me-2 '>
              <div className='row '>
              <div className='col-sm-3'>
            <img className="icon m-1"  src={Newuser} alt="User" />
            </div>            
            <div className='col-sm-9'>
            <a1>John Doe</a1><br/>
            <a2>Admin</a2>
            <div class="btn-group ms-2">
        <button class="border-0 dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        
        </button>
     <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
    <li><a class="dropdown-item" href="/">Change Password</a></li>
    <li><a class="dropdown-item" href="/">Logout</a></li>

  </ul>
</div>
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
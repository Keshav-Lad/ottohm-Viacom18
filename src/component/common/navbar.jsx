import React from 'react';
import "./Css/navbar.css";
import Notification from "../../utils/icons/Notification.svg";
import Newuser from "../../utils/images/Newuser.png";

const Navbar=()=>{
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom 1px solid shadow-sm">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <img src={Notification} alt="Bellicon"></img>
            <li className="btn-group nav-item dropdown bg-light m-2 p-2 ">
                <button className="btn nav-link dropdown-toggle dropdown:hover " href="#" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                
                <img className='userimage pe-2' src={Newuser} alt="userimage"></img>
                {/* {props.name}
                {props.role} */}
                <a className='name ps-4'>John Doe</a><br/>
                <a className='role ps-2'>Admin</a> 
                </button>
                <ul className="dropdown-menu dropdown:hover">
                <li><a className="dropdown-item" href="#">Change Password</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </li> 
          </div>
{/* <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div> */}
        </div>
      </nav>
  )
}
export default Navbar;
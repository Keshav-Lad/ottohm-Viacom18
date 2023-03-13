import { BellFilled } from '@ant-design/icons';
import { Badge, Space } from 'antd';
import React from 'react';
import "./Css/navbar.css";

const Navbar=()=>{
  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom 1px solid">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex p-2 m-2 bg-light" >
                <Space>
                <Badge count={20} dot>
                    <BellFilled style={{fontSize : 24}}/>
                </Badge>
            </Space>
            </form>
            <li className="nav-item dropdown bg-light m-2 p-2">
                <a className="nav-link dropdown-toggle dropdown:hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu dropdown:hover">
                <li><a className="dropdown-item" href="#">Change Password</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </li> 
          </div>
        </div>
      </nav>
  )
}
export default Navbar;
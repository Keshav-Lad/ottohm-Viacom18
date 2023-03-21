import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import "./Css/sidebar.css";
import logo from "../../utils/images/logo.png";
import constants from "../../utils/constants.json"
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../../utils/reducer/sidebarreducer";

const Sidebar = ({ children }) => {
 
  const navigate=useNavigate();

  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);
  const isMobileView = window.innerWidth < 768;
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeSidebar = () => {
    if(sidebarStatus){
      dispatch(hideSidebar());
    }
  }
 
  const menuItem = [
    {
      path: constants.dashboard,
      name: "DashBoard",
      
    },
    {
      path: constants.tournaments,
      name: "Tournaments",
    
    },
    {
      path: constants.games,
      name: "Games",
    },
    {
      path: constants.location,
      name: "Location",
    },
    {
      path: constants.teams,
      name: "Teams",
    },
    {
      path: constants.roles,
      name: "Roles",
    },
    {
      path: constants.users,
      name: "Users",
    },
   
  ]
  return (
    <div className="container-2">
       { isMobileView && sidebarStatus ?
      <div className="sidebar"  style={{ width: isOpen ? "230px" : "80px" }} >
        <div className="bg-body">
         
            <img className="w-100 mt-2 mb-2" src={logo} alt="Logo" onClick={() => navigate(constants.dashboard)} />
          
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link textnormal text-light"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text textnormal">{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
        :null}
            { !isMobileView && isOpen ?
      <div className="sidebar" style={{ width: isOpen ? "230px" : "80px" }}>
        <div className="bg-body">
         
            <img className="w-100 mt-2 mb-2" src={logo} alt="Logo" onClick={() => navigate(constants.dashboard)} />
          
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link textnormal"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text textnormal text-light">{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
        :null}


      <main onClick={closeSidebar}>{children}</main>
    </div>
  );
};

export default Sidebar;

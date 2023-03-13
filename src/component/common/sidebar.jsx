import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import "./Css/sidebar.css"


const Sidebar = ({ children }) => {
 
 
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

  const menuItem = [
    {
      path: "/",
      name: "DashBoard",
      
    },
    {
      path: "/tournaments",
      name: "Tournaments",
    
    },
    {
      path: "/games",
      name: "Games",
    },
    {
      path: "/location",
      name: "Location",
    },
    {
      path: "/teams",
      name: "Teams",
    },
    {
      path: "/roles",
      name: "Roles",
    },
    {
      path: "/users",
      name: "Users",
    },
    
    
    
  ]

  
  return (
    <div className="container-2">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "80px" }}>
        <div>
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <img className="w-100" src={""} alt="Logo" />
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link"
              activeclassname="active"
          
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

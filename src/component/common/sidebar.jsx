import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"


const Sidebar = ({ children }) => {
  const[subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

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
      path: "/emailanalytics",
      name: "Email Analytics",
      
    },
    {
      path: "/managejobs",
      name: "Manage Jobs",
    
    },
    {
      path: "/users",
      name: "User",
     
    },
    
  ]

  
  return (
    <div className="container-2">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "80px" }}>
        <div>
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            {/* <img className="w-100" src={Logo} alt="Logo" /> */}
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link"
              activeclassname="active"
              onClick={() => {
                item.subNav && showSubNav();
              }}
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

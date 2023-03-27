import React from "react";
import Sidebar from "../component/common/sidebar";
import Navbar from "../component/common/navbar";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../utils/reducer/sidebarreducer";
import '../App.css'
import classNames from "classnames";
import { useEffect } from "react";
const Index = ({ children }) => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const overlayClasses = classNames('overlay', {
    'active': sidebarStatus
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (sidebarStatus) {
      body.style.position = "fixed";
      body.style.left = "0";
      body.style.right = "0";
      body.style.top = "0";
      body.style.bottom = "0";
      body.style.overflow = "hidden";
    } else {
      body.style.position = "static";
      body.style.left = "0";
      body.style.right = "auto";
      body.style.top = "auto";
      body.style.bottom = "auto";
      body.style.overflow = "visible";
    }
  }, [sidebarStatus]);

  const closeSidebar = () => {
    if (sidebarStatus) {
      dispatch(hideSidebar());
    }
  };
  return (
    <div>
      <Sidebar>
      <div className={overlayClasses} onClick={closeSidebar}></div>
        <Navbar />
        <main>{children}</main>
      </Sidebar>
    </div>
  );
};
export default Index;

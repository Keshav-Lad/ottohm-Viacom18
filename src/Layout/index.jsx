import React from "react";
import Sidebar from "../component/common/sidebar";
import Navbar from "../component/common/navbar";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../utils/reducer/sidebarreducer";
import '../App.css'
import classNames from "classnames";

const Index = ({ children }) => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const overlayClasses = classNames('overlay', {
    'active': sidebarStatus
  });

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

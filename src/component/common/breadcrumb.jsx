import React  from "react";
import "../common/Css/breadcrumb.css"
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Breadcrumbs =(props)=>{
    
    return (
        <Breadcrumb>
        <Breadcrumb.Item onClick={props.onClick}  className="mt-1">
          <span className="textmedium me-1">{props.title}</span>
        </Breadcrumb.Item>
        <span className="active-item me-2 ms-1 textbold pt-2 ">&gt;&gt;</span>
        <Breadcrumb.Item className="active-item textbold mt-2">
        <span className="textbold pt-2">{props.subtitle}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
}
export default Breadcrumbs;
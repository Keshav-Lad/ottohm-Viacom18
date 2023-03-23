import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/button";
import "./login.css";
import constants from "../../utils/constants.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Index = () => {
  const navigate = useNavigate();
  //for mobile view
  const [isMobile, setisMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <920) {
        console.log("handleresize");
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };
    console.log("hello from use");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const validateForm = () => {
    const errors = {
     
    };
    if (!email) {
      errors.email = "Email is required";
      console.log("in Email1");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      console.log("in Email2");
    }
    if (!password) {
      errors.password = "Password is required";
      console.log("in password ");
    }
    setErrors(errors);
    console.log("Ans "+Object.keys(errors).length === 0);
    return Object.keys(errors).length === 0;
  };


  const handleRequest = () => {
    if (validateForm()) {
        sessionStorage.setItem(constants.token, "Authorized");
        
        toast.success('Login Successfully !',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000,
            
            onClose:()=>setTimeout(()=>{navigate(constants.dashboard)},2000)
        });
      
        

      }
      else{
        toast.error('Login failed !',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:5000
        });

      }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {!isMobile ? (
          <div className="col-md-6" id="main-container">
            <div className="justify-content-center">
              {/* <img src={im} className='img-thumbnail mx-auto d-block' id='manage-img' alt='img-content' ></img> */}
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={isMobile ? "col-md-12  ms-2 pt-5" : "col-sm-6"}
          id="right-part"
        >
          <div className="container mt-5">
            <div className="mt-5">
              <img src={""} alt="" />
            </div>
            <div className="mt-5 textbold">
              <p id="login-title" className="ms-5">
                Login
              </p>
              <p id="h5-text" className="ms-5 mb-1 textnormal">
                Welcome,
              </p>
              <p id="h5-text" className="ms-5 mb-3 textnormal">
                Please Login to your account
              </p>
            </div>

            <form onSubmit={(e)=> e.preventDefault()}>
              <div className="row">
                <div className="col-md-12">
                  <h3 id="text-style" className="mt-4 ms-5 textnormal">
                    Email ID
                  </h3>
                  <input
                    type="email"
                    id="input-fields"
                    className="w-75 ps-3 ms-5 form-control"
                    placeholder="Enter Email ID"
                    onChange={(e)=>setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-12">
                {errors.email && <p className="text-danger ps-5">{errors.email}</p>}
               
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 id="text-style" className="mt-4 ms-5 textnormal">
                    Password
                  </h3>
                  <input
                    type="password"
                    id="input-fields2"
                    className="w-75 ps-3 ms-5 form-control"
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="col-md-12">
                {errors.password && <p className="text-danger ps-5">{errors.password}</p>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-4 pt-2">
                  <a id="f-pass" className="text-wrap textmedium" href="#">
                    Forget Password ?
                  </a>
                </div>
                <div className="col-md-1"></div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              </div>
              <Button
                id="btn-setting"
                className="btn w-75 text-light ms-5 mt-4 textboldbtn"
                onClick={handleRequest}
                text="Login"
              ></Button>
              <ToastContainer />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

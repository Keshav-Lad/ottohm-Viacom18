import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/button";
import "./login.css";
import constants from "../../utils/constants.json";

const Index = () => {
  const navigate = useNavigate();
  //for mobile view
  const [isMobile, setisMobile] = useState(false);

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

  const handleRequest = () => {
    sessionStorage.setItem(constants.token, "Authorized");
    navigate(constants.dashboard);
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
          className={isMobile ? "col-md-12  pt-5" : "col-sm-6"}
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

            <form>
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
                  ></input>
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
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-4 pt-3 forget-pass-div">
                  <a id="f-pass" className="text-wrap textmedium forgot-pass" href="#">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/button';
import "./login.css";
import constants from "../../utils/constants.json"

const Index=()=> {

  const navigate=useNavigate();

  const handleRequest = () =>{
      localStorage.setItem(constants.token,"Authorized");
      navigate(constants.dashboard);
  }
  return (
    <div className='container-fluid' >
    <div className='row'>
        <div className='col-md-8' id="main-container">

            <div className='justify-content-center'>
                {/* <img src={im} className='img-thumbnail mx-auto d-block' id='manage-img' alt='img-content' ></img> */}
            </div>
            
        
        </div>
        <div className='col-md-4 border' id='right-part' >

            <div className='container mt-5'>
                <div className='mt-5'>
                    <img src={""} alt="" />
                </div>
                <div className='mt-2'>
                    <p id="login-title" className='ms-5'>Login</p>
                    <p id="h5-text" className='ms-5 mb-1'>Welcome,</p>
                    <p id="h5-text" className='ms-5 mb-3'>Please Login to your account</p>
                </div>
               
               <form>
                <div>
                    <h3 id="text-style" className='mt-4 ms-5'>Email ID</h3>
                    <input type="email" id='input-fields' className='w-75 ps-3 ms-5 form-control' placeholder='Enter Email ID'></input>
                </div>
                    <div>
                    <h3 id="text-style" className='mt-4 ms-5'>Password</h3>
                    <input type="password" id='input-fields2' className='w-75 ps-3 ms-5 form-control' placeholder='Enter Password'></input>
                   
                </div>
                <div className='mt-3'>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a id="f-pass" className='text-wrap' href='#'>Forget Password ?</a>
                </div>
                <Button  id="btn-setting" className="btn w-75 text-light ms-5 mt-4" onClick={handleRequest} text="Login"></Button>
                </form>
            </div>
        </div>
    </div>
</div>
  );
};

export default Index;
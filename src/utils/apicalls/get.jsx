import React from "react";
import axios from "axios";
import constants from "../constants.json";

const GetData=()=> {
    
   return axios
    .get(constants.baseUrl.toString()+constants.getsuffix.toString())
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default GetData;

// const Getclient=()=>{
//     const defaultOptions={
//         baseURL: "https://dummyjson.com/",
//         method: 'get',
//         headers:{
//             'Content-type':'application/json'
//         }
//     };
//     let instance=axios.create(defaultOptions);
//     instance.interceptors.request.use(function(config){
//         // config.headers['api-id']='';
//         return config;
//     });
//     return instance;
//     // console.log(config)
// };
// export default Getclient();
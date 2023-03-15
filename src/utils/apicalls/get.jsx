import React from "react";
import axios from "axios";

const GetData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/customers")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
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
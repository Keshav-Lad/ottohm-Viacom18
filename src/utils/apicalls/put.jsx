import React from "react";
import axios from "axios";
import constants from "../constants.json";

const PutData=()=> {
    
   return axios
    .post(constants.baseUrl.toString()+constants.putsuffix.toString())
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default PutData;

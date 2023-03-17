import axios from "axios";
import constants from "../constants.json";

const PatchData=()=> {
    
   return axios
    .post(constants.baseUrl.toString()+constants.patchsuffix.toString())
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default PatchData;

import axios from "axios";
import constants from "../constants.json";

const DeleteData=()=> {
    
   return axios
    .post(constants.baseUrl.toString()+constants.deletesuffix.toString())
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default DeleteData;

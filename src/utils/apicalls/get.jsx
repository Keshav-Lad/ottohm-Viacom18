import axios from "axios";
import constants from "../constants.json";

const GetData=()=> {
   return axios
    .get(constants.baseUrl+constants.getsuffix)
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default GetData;


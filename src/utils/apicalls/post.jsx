import axios from "axios";
import constants from "../constants.json";

const PostData=()=> {
    
   return axios
    .post(constants.baseUrl.toString()+constants.postsuffix.toString())
    .then((res) => {
        // console.log("Response",res);
        return res;
    })
    .catch(error => {
        return error;  
    });  
};
export default PostData;

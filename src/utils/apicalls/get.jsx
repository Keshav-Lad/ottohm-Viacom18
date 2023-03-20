import axios from "axios";
import constants from "../constants.json";

const GetData= async()=> {
   try{
   return await axios
    .get(constants.baseUrl+constants.getsuffix)
   }
   catch (error){
    console.log(error);
   }
};
export default GetData;


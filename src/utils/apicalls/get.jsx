import axios from "axios";
import constants from '../constants.json'

const GetData= async(sufix)=> {
   try{
   return await axios
    .get(constants.baseUrl+sufix)
   }
   catch (error){
    console.log(error);
   }
};
export default GetData;


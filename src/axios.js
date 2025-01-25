import axios from "axios";
import{baseUrl} from './Constants/constant'

// const config = { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain", }}

const instance = axios.create({
    baseURL: baseUrl
    
  });
export default instance
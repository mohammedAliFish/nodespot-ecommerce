import axios from "axios";
//create to make config and write the baseURL just one time
const baseUrl = axios.create({baseURL : "http://127.0.0.1:8000"})

export default baseUrl
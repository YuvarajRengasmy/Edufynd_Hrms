import API from "../Api/Api"
import { Login } from "./Endpoint"


export const loginUser = (data)=>{
    return API.post(`${Login}`,data)
}
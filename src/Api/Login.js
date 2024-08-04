import API from "../Api/Api"
import { Login } from "./endpoints"


export const loginUser = (data)=>{
    return API.post(`${Login}`,data)
}
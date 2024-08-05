import API from "../Api/Api"
import { Staff } from "./endpoints"


export const StaffCheckin= (data)=>{
    return API.post(`${Staff}`,data)
}
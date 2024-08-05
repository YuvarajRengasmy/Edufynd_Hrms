import API from "../Api/Api"
import { Staff } from "./endpoints"


export const StaffCheckin= (data)=>{
    return API.post(`${Staff}/checkin`,data)
}
export const StaffCheckOut= (data)=>{
    return API.post(`${Staff}/checkOut`,data)
}
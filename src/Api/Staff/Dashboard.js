import API from "../Api"
import { Staff } from "../Endpoint"


export const StaffCheckin= (data)=>{
    return API.post(`${Staff}/checkin`,data)
}
export const StaffCheckOut= (data)=>{
    return API.post(`${Staff}/checkOut`,data)
}

export const getSingleStaff = (data) => {
    return API.get(`${Staff}/getSingleStaff`, { params: { _id: data } })
}
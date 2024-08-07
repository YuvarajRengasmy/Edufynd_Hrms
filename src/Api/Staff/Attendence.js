import API from "../Api"
import { Attendence } from "../Endpoint"


export const Checkin= (data)=>{
    return API.post(`${Attendence}/clockIn`,data)
}
export const CheckOut= (data)=>{
    return API.put(`${Attendence}/clockOut`, { params: { _id: data } })
}

export const getallAttendence = () => {
    return API.get(`${Attendence}/`)
}

export const deleteStaff = (data) => {
    return API.delete(`${Attendence}`, { params: { _id: data } });
  };
  export const updateStaff = (data) => {
    return API.put(`${Attendence}`, data)
}
export const getSingleAttendence = (data) => {
    return API.get(`${Attendence}/getSingleAttendence`, { params: { _id: data } })
}

export const getFilterAttendence = (data) => {
    return API.put(`${Attendence}/getFilterAttendence`, data);
  };
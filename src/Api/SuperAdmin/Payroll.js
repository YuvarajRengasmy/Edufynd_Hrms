import API from "../Api"
import {Payroll } from "../Endpoint"

export const savePayroll = (data) => {
    return API.post(`${Payroll}`, data)
}

export const updatePayroll= (data) => {
    return API.put(`${Payroll}`, data)
}


export const getSingleAllPayroll = (data) => {
    return API.get(`${Payroll}/getSinglePayroll`, { params: { _id: data } })
}
export const getallPayroll = () => {
    return API.get(`${Payroll}`)
}
export const deletePayroll= (data) => {
    return API.delete(`${Payroll}`, { params: { _id: data } });
  };

  export const getFilterPayroll= (data) => {
    return API.put(`${Payroll}/getFilterDepartmentHead`, data);
  };







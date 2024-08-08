import API from "../Api"
import { DepartmentHead } from "../Endpoint"

export const saveModule = (data) => {
    return API.post(`${DepartmentHead}`, data)
}

export const updateModule= (data) => {
    return API.put(`${DepartmentHead}`, data)
}


export const getSingleAllModule = (data) => {
    return API.get(`${DepartmentHead}/getSingleDepartmentHead`, { params: { _id: data } })
}
export const getallDepartment = () => {
    return API.get(`${DepartmentHead}`)
}
export const deleteModule= (data) => {
    return API.delete(`${DepartmentHead}`, { params: { _id: data } });
  };

  export const getFilterModule= (data) => {
    return API.put(`${DepartmentHead}/getFilterDepartmentHead`, data);
  };







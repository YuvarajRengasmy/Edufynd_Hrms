import API from "../Api"
import { Department } from "../Endpoint"

export const saveDepartment = (data) => {
    return API.post(`${Department}`, data)
}

export const updateDepartment= (data) => {
    return API.put(`${Department}`, data)
}


export const getSingleAllDepartment = (data) => {
    return API.get(`${Department}/getSingleDepartment`, { params: { _id: data } })
}
export const getallDepartments = () => {
    return API.get(`${Department}`)
}
export const deleteDepartment= (data) => {
    return API.delete(`${Department}`, { params: { _id: data } });
  };

  export const getFilterDepartment= (data) => {
    return API.put(`${Department}/getFilterDepartmentHead`, data);
  };







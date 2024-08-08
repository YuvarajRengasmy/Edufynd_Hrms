import API from "../Api"
import { Policies } from "../Endpoint"

export const savePolicies = (data) => {
    return API.post(`${Policies}`, data)
}

export const updatePolicies= (data) => {
    return API.put(`${Policies}`, data)
}


export const getSingleAllPolicies = (data) => {
    return API.get(`${Policies}/getSinglePolicies`, { params: { _id: data } })
}
export const getallPolicies = () => {
    return API.get(`${Policies}`)
}
export const deletePolicies= (data) => {
    return API.delete(`${Policies}`, { params: { _id: data } });
  };

  export const getFilterPolicies= (data) => {
    return API.put(`${Policies}/getFilterPolicies`, data);
  };







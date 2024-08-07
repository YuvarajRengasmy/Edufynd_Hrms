import API from "../Api"
import { SuperAdmin } from "../Endpoint"

export const getSingleSuperAdmin = (data) => {
    return API.get(`${SuperAdmin}/getSingleSuperAdmin`, { params: { _id: data } })
}
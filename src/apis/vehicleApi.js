import axios from "axios";
import { apiUrls } from "./apiConstants";

export const addVehicleApi = (request) => {
    return axios.post(apiUrls.addVehicleUrl, request);
}

export const getAllVehicles = (request) => {
    return axios.get(apiUrls.addVehicleUrl);
}

export const addEmployeeToVehicle = (request, id) => {
return axios.post(`${apiUrls.addEmployeeToVehicleUrl}/${id}`, request);
}
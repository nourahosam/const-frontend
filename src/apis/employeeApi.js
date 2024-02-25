import axios from "axios";
import { apiUrls } from "./apiConstants";

export const addEmployeeApi = (request) => {
    return axios.post(apiUrls.addEmployeeUrl, request);
}

export const addEmployeeType = (request) =>{
    return axios.post(apiUrls.addEmployeeTypeUrl, request);
}

export const getAllEmployees = () => {
    return axios.get(apiUrls.getAllEmployeesUrl);
}

export const getAllEmployeeTypes = () => {
    return axios.get(apiUrls.getAllEmployeesTypesUrl);
}
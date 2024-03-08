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

export const getEmployeeTypeById = (id) => {
    return axios.post(`${apiUrls.getEmployeeTypeByIdUrl}/${id}`);
}

export const getEmployeeTypeByParent = async (id) => {
    return await axios.get(`${apiUrls.getEmployeeTypeByParentUrl}/${id}`).then((res)=>res.data);
}

export const getAllEmployeeTypes = async () => {
    return await axios.get(apiUrls.employeeTypeBaseUrl).then((res)=> 
    {

    console.log("Response", res)
    return res.data;
});
}
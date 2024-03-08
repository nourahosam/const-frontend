export const apiUrls = {
    addEmployeeUrl : process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_EMPLOYEE_API,
    getAllEmployeesUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_EMPLOYEE_API,
    addVehicleUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_VEHICLE_API,
    getEmployeeTypeByIdUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_EMPLOYEE_API + process.env.REACT_APP_EMPLOYEE_TYPE+ process.env.REACT_APP_GET_EMPLOYEE_TYPE_BY_ID,
    getEmployeeTypeByParentUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_EMPLOYEE_API + process.env.REACT_APP_EMPLOYEE_TYPE + process.env.REACT_APP_GET_EMPLOYEE_TYPE_BY_PARENT,
    employeeTypeBaseUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_EMPLOYEE_API + process.env.REACT_APP_EMPLOYEE_TYPE,
    addEmployeeToVehicleUrl: process.env.REACT_APP_BASE_URL_API + process.env.REACT_APP_VEHICLE_API + process.env.REACT_APP_ADD_EMPLOYEE_TO_VEHICLE_API 

}
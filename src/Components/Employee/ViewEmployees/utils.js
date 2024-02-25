export const columns = [
    { field: 'personnelNo', headerName: 'ID', width: 70 },
    { field: 'englishName', headerName: 'Name', flex: 1 },
    { field: 'nationality', headerName: 'Nationality', flex: 1 },
    { field: 'contractProf', headerName: 'Profession', flex: 1 },
    { field: 'phoneNo', headerName: 'Phone No', flex: 1 },
    { field: 'jobTitles', headerName: 'Job Title', flex: 1 },
    { field: 'vacationStatus', headerName: 'Vacation Status', flex: 1 },
    { field: 'Project', headerName: 'Project', flex: 1 },

]

export const initialValues = {
    projectDropdown: '',
    date: '',
    empType1: '',
    empType2: '',
    empType3: '',
    employeeArr: []
}
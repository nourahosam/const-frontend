import React from 'react';
import { Grid } from '@mui/material';
import { Box, width } from '@mui/system';
import * as employeeApi from '../../../apis/employeeApi';
import { useEffect } from 'react';
import { useState } from 'react';
import CustDataGrid from '../../../commons/DataGrid';
import * as utils from './utils';

function ViewEmployees(props) {
    const {setSelectionModel} = props;
    const [data, setData] = useState([]);
    const [mainRows, setMainRows] = useState([]);


    const setRows = (rows) => {
        console.log("rows ===> ", rows);
        if (rows.length != 0) {
            var tempRows = [];

            rows.forEach((row, key) => {
                console.log(row);
                tempRows.push({
                    id: key, personnelNo: row.personnelNo, englishName: row.englishName, nationality: row.nationality,
                    contractProf: row.contractProf, phoneNo: row.phoneNo,
                    jobTitles: row.jobTitles, vacationStatus: row.vacationStatus, Project: row.Project
                })
                console.log("TEMPROWS", tempRows);
            })
            setMainRows(tempRows);
            console.log(mainRows);
        }
    }
    useEffect(() => {
        employeeApi.getAllEmployees().then((res) => {
            console.log("data  ===> ", res.data)
            setData(res.data);
        });

    }, [])
    useEffect(() => {
        setRows(data);
    }, [data])

    return (
        <div className='bg-slate-100'>
            <Grid container height={'100vh'} sx={{}}>
                {/* <Grid item md={12} sx={{ height: '30%', padding: '2.5%' }}>
                    <Box display={'flex'} sx={{ justifyContent: 'space-evenly', marginBottom: '10px' }}>
                        <DropdownSelect
                            name='projectDropdown'
                            label='Project'
                            sx={{ bgcolor: 'white', borderRadius: 1, width: '20%' }}
                            menuoptions={{ "project1": 'Project1', "project2": 'Project 2', "project3": 'Project 3' }}
                        />
                        <DatePickers
                            name='date'
                            sx={{ bgcolor: 'white', borderRadius: 1, width: '20%' }}
                            label='Choose date'
                        />
                    </Box>
                    <Box display={'flex'} sx={{ justifyContent: 'space-evenly' }}>
                        <DropdownSelect
                            name='empType1'
                            label='Employee Postion'
                            sx={{ bgcolor: 'white', borderRadius: 1, width: '20%' }}
                            menuoptions={{ "project1": 'Project1', "project2": 'Project 2', "project3": 'Project 3' }}
                        />
                        <DropdownSelect
                            name='empType2'
                            disabled
                            label='Employee Sub-position 1'
                            sx={{ bgcolor: 'white', borderRadius: 1, width: '20%' }}
                            menuoptions={{ "project1": 'Project1', "project2": 'Project 2', "project3": 'Project 3' }}
                        />
                        <DropdownSelect
                            name='empType3'
                            disabled
                            label='Employee Sub-position 2'
                            sx={{ bgcolor: 'white', borderRadius: 1, width: '20%' }}
                            menuoptions={{ "project1": 'Project1', "project2": 'Project 2', "project3": 'Project 3' }}
                        />
                    </Box>
                </Grid> */}
                <Grid item md={12} sx={{ height: '70%', padding: '1%' }}>
                    <CustDataGrid
                        name='employeeArr'
                        sx={{ bgcolor: 'white', borderRadius: 1 }}
                        style={{ height: 407 }}
                        columns={utils.columns}
                        rows={mainRows}
                        setSelectionModel={setSelectionModel}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default ViewEmployees;
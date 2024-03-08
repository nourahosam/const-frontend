import React from 'react';
import { Grid } from '@mui/material';
import * as vehicleApi from '../../../apis/vehicleApi';
import { useEffect } from 'react';
import { useState } from 'react';
import CustDataGrid from '../../../commons/DataGrid';
import * as utils from './utils';

function ViewVehicles(props) {

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
                    id: row.id, plateNo: row.plateNo, plateType: row.plateType, branch: row.branch,
                    licenceEndDt: row.licenceEndDt, model: row.model,
                    year: row.year, currentUserId: row.currentUserId, checkupState: row.checkupState
                })
            })
            setMainRows(tempRows);
            console.log(mainRows);
        }
    }
    useEffect(() => {
        vehicleApi.getAllVehicles().then((res) => {
            setData(res.data);
        });

    }, [])
    useEffect(() => {
        setRows(data);
    }, [data])

    return (
        <div className='bg-slate-100'>
            <Grid container height={'100vh'} sx={{}}>
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

export default ViewVehicles;
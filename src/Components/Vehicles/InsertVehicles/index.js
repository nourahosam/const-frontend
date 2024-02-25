import React, { useEffect, useState } from 'react';
import TextField from '../../../commons/TextField/index';
import DropdownSelect from '../../../commons/DropdownSelect/index';
import { Button, Grid, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import * as utils from './utils.js';
import DatePickers from '../../../commons/DatePicker';
import { addVehicleApi } from '../../../apis/vehicleApi.js';

function InsertVehicles() {

    const [nationality, setNationality] = useState([]);
    const [hiringType, setHiringType] = useState([]);

    useEffect(()=> {
        const natList = ["Egyptian", "Saudi", "Indian", "Bengali", "Canadian", "Egyptian", "Filipino", "Jordanian", "Nepalese", "Pakistanian", "Palestinian", "Sri Lankan", "Sudanese", "Syrian", "Yemeni", "Without NAT"]
        setNationality(natList);

        const hiringTypeList = ["Employment", "Trainee", "Under Iqama", "تعين مباشر"]
        setHiringType(hiringTypeList);
    }, [])
    

    const onSubmit = (values) => {
        
        values.checkupEndDt = values.checkupEndDt.format('YYYY-MM-DD');
        values.licenceEndDt = values.licenceEndDt.format('YYYY-MM-DD');
        console.log("valuesssss", values);
        addVehicleApi(values);
    }

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: utils.initialValues
    })

    return (
        <Box sx={{ backgroundColor: grey[100], padding: 5, height: '100vh' }}>
            <Typography variant='h5' sx={{ padding: 2 }}>Add details of employee</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.currentUserId.name} label={utils.fields.currentUserId.label}
                            control={control}
                        />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.plateNo.name} label={utils.fields.plateNo.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.plateType.name} label={utils.fields.plateType.label}
                            control={control} />
                    </Grid>
                   
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.branch.name} label={utils.fields.branch.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.vehicleBrand.name} label={utils.fields.vehicleBrand.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.model.name} label={utils.fields.model.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.year.name} label={utils.fields.year.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.serialNo.name} label={utils.fields.serialNo.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.vehicleNo.name} label={utils.fields.vehicleNo.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.color.name} label={utils.fields.color.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.secondaryColor.name} label={utils.fields.secondaryColor.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.vehState.name} label={utils.fields.vehState.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <DatePickers 
                        name={utils.fields.licenceEndDt.name} 
                        label={utils.fields.licenceEndDt.label}
                        control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <DatePickers
                        control={control} 
                        name={utils.fields.checkupEndDt.name} label={utils.fields.checkupEndDt.label}
                         />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.checkupState.name} label={utils.fields.checkupState.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.insuranceState.name} label={utils.fields.insuranceState.label}
                            control={control} />
                    </Grid>
                </Grid>
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </Box>
    );
}

export default InsertVehicles;
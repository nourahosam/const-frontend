import React, { useEffect, useState } from 'react';
import TextField from '../../../commons/TextField/index';
import DropdownSelect from '../../../commons/DropdownSelect/index';
import { Button, Grid, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import * as utils from './utils';
import DatePickers from '../../../commons/DatePicker';
import { addEmployeeApi } from '../../../apis/employeeApi';
import CascadingDropdown from '../../../commons/CascadingDropdown';
import AlertSnackbar from '../../../commons/AlertSnackbar';

function InsertEmployee() {

    const [nationality, setNationality] = useState([]);
    const [hiringType, setHiringType] = useState([]);

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");

    useEffect(()=> {
        const natList = ["Egyptian", "Saudi", "Indian", "Bengali", "Canadian", "Egyptian", "Filipino", "Jordanian", "Nepalese", "Pakistanian", "Palestinian", "Sri Lankan", "Sudanese", "Syrian", "Yemeni", "Without NAT"]
        setNationality(natList);

        const hiringTypeList = ["Employment", "Trainee", "Under Iqama", "تعين مباشر"]
        setHiringType(hiringTypeList);
    }, [])
    

    const onSubmit = (values) => {
        const employeeType = Object.keys(values).filter((item)=> item.includes('empTypeId'));
        const empTypeId = values[employeeType[employeeType.length-1]];

        values.empTypeId = empTypeId;
        
        values.ContractEndDt = values.ContractEndDt.format('YYYY-MM-DD');

        addEmployeeApi(values).then(() => {
            setOpen(true);
            setSeverity("success");
            setMessage("Employee added successfully");
        }).catch(() => {
            setOpen(true);
            setSeverity("error");
            setMessage("Error adding employee");
        });

    }

    const {
        register,
        unregister,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: utils.initialValues
    })

    return (
        <Box sx={{ backgroundColor: grey[100], padding: 5, height: '100vh' }}>
             <AlertSnackbar open={open}
            setOpen={setOpen}
            message={message}
            severity={severity}/>
            <Typography variant='h5' sx={{ padding: 2 }}>Add details of employee</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.personnelNo.name} label={utils.fields.personnelNo.label}
                            control={control}
                        />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.englishName.name} label={utils.fields.englishName.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.arabicName.name} label={utils.fields.arabicName.label}
                            control={control} />
                    </Grid>
                   
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <DropdownSelect 
                        menuoptions={nationality}
                        name={utils.fields.nationality.name} 
                        label={utils.fields.nationality.label}
                        control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.contractProf.name} label={utils.fields.contractProf.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.IqamaProfession.name} label={utils.fields.IqamaProfession.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.religion.name} label={utils.fields.religion.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                    <DropdownSelect 
                        menuoptions={hiringType}
                        name={utils.fields.hiringType.name} 
                        label={utils.fields.hiringType.label}
                        control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.phoneNo.name} label={utils.fields.phoneNo.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.legalProf.name} label={utils.fields.legalProf.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.workerType.name} label={utils.fields.workerType.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.legalEntity.name} label={utils.fields.legalEntity.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.jobTitles.name} label={utils.fields.jobTitles.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.email.name} label={utils.fields.email.label} 
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.ContractDuration.name} label={utils.fields.ContractDuration.label}
                            control={control} />
                    </Grid>

                    <Grid item md={3} sx={{ padding: 2 }}>
                        <DatePickers
                        control={control}
                        name={utils.fields.ContractEndDt.name}
                        label={utils.fields.ContractEndDt.label}
                        />
                    </Grid>

                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.AramcoID.name} label={utils.fields.AramcoID.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.SEC_ID.name} label={utils.fields.SEC_ID.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.BranchName.name} label={utils.fields.BranchName.label}
                            control={control} />
                    </Grid>
                    <Grid item md={3} sx={{ padding: 2 }}>
                        <TextField name={utils.fields.CampLocation.name} label={utils.fields.CampLocation.label}
                            control={control} />
                    </Grid>
                    <Grid>
                        <CascadingDropdown 
                        control={control} 
                        label={utils.fields.empTypeId.label}
                        unregister={unregister} />
                    </Grid>
                </Grid>
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </Box>
    );
}

export default InsertEmployee;
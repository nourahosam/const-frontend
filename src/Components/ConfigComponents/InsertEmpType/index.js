import { Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { bgcolor, Box } from '@mui/system';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Select from '../../FormsUI/Select';
import {CreateEmpTypeAPI , CreateEmpSubTypeAPI, GetEmpTypeAPI} from '../../utils/apis/Employee/CreateEmpType';

function CreateEmpType(props) {
    const [typeDropDown, setTypeDropdown] = useState({});
    const initialValues = {
        subtype1: '',
        type: '',
        subtype2: '',
        subtype3: '',
        typeDropDown: ''
    }
    async function fetchData(){
        console.log("fetch data");
        const data = await GetEmpTypeAPI();
        var temp = [];
        data.forEach((el)=>{
            temp[el.id] = el.type;
        })
        setTypeDropdown(temp);
    }

    async function postType(values){
        await CreateEmpTypeAPI(values);
        await fetchData();
    }

    async function postSubType(values){
        await CreateEmpSubTypeAPI(values);
        await fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Grid container sx={{ justifyContent: 'center', width: '100%', paddingTop: '5%', paddingBottom: '5%', height: '100vh', backgroundColor: '#F5F5F5' }}>
            <Grid item md={5} sx={{ padding: '7%', backgroundColor: '#E4E5E8' }}>
                <Typography variant="h6" sx={{ margin: '3%', marginBottom: '7%' }}>Create new type</Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log("NEW TYPE");
                        postType(values);
                    }}
                >
                    <Form>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Field name='type' className="text-field" placeholder='New Type' />
                        </Box>
                        <Button type='submit' variant='contained' sx={{ margin: '2%' }}>Add New Type</Button>
                    </Form>
                </Formik>
            </Grid>
            <Divider sx={{ backgroundColor: '#F5F5F5' }} orientation="vertical" flexItem />
            <Grid item md={5} sx={{ backgroundColor: '#E4E5E8', padding: '7%' }}>
                <Typography variant="h6" sx={{ margin: '3%', marginBottom: '7%' }}>Create sub-type for already existing type</Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={
                        (values, actions) => {
                            postSubType(values);
                            
                        }
                    }
                >
                    <Form>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                            <Select name='typeDropDown'
                                label='Employee Type'
                                sx={{ bgcolor: 'white', borderRadius: 1, margin: '2%', width: '340px' }}
                                options={typeDropDown} />
                            <Field name='subtype1' className="text-field" placeholder='New Sub-Type' />
                            {/* <Field name='subtype2' className="text-field" placeholder='New Sub-Type' /> */}
                        </Box>
                        <Button type='submit' variant='contained' sx={{ margin: '2%' }}>Add New Sub-Type</Button>
                    </Form>
                </Formik>

            </Grid>
        </Grid>
    );
}

export default CreateEmpType;
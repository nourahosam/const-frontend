import { MenuItem, TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { useEffect } from 'react';

const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {

    const [field, meta ] = useField(name);

    const configSelect = {
        field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
    }

    if(meta && meta.touched && meta.error){
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField 
            {...configSelect}
        >
            {console.log("Name",name)}
            {Object.keys(options).map((el, pos) =>{
                return(<MenuItem key={pos} value={el}>{options[el]}</MenuItem>)
            })}
        </TextField>
    );
}

export default SelectWrapper;
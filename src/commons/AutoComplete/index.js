import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from 'react-hook-form';

export default function AutocompleteBox(props) {
    const { menuoptions, label, name, control, placeholder = undefined } = props;
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (<Autocomplete
                disablePortal
                value={value}
                onChange={(e, newValue)=> {
                    console.log("help", e, newValue)
                    onChange(newValue ? newValue: null);}}
                getOptionLabel={(option) => option.label || ""}
                options={menuoptions}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField
                    {...params}
                    label={label} />}
            />)} />
    );
}
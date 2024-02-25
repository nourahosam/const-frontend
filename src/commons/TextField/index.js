import {styled} from '@mui/material/styles';
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import React from 'react';

const StyledTextField = styled(TextField)({
    width: "100%"
})

const CustomTextField = (props) => {
    const {label, variant,name,control, ...properties} = props;
    return(
        <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => ( <StyledTextField
            label={label}
            onChange={onChange}
            value={value}
            name={name}
            variant={variant ? variant : "outlined"}
            {...properties}
            >
    
        </StyledTextField> )}
      />
    )
}

export default CustomTextField;
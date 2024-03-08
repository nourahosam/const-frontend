import React from 'react';
import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import * as styles from '../styles';


const StyledButton = styled(Button)((props) => ({
    backgroundColor: props.customColor ? props.customColor : "",
    width: props.customWidth ? props.customWidth : "100%",
}));

const CustomButton = (props) => {
    const { label, variant, value, classStyle, ...properties } = props;
    return (
        <StyledButton
            variant={variant ? variant : "contained"}
            {...properties}
            value={value}

        >
            {label}
        </StyledButton>)
}


export default CustomButton;

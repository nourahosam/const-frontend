import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styled from "@emotion/styled";
import { FormLabel, TextField } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRef } from "react";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

const CustomDatePicker = styled(DatePicker)((props) => ({
    width: '100%'
}))

const DatePickers = ({ label, touched, errors, name, value, control, ...params }) => {

    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => (<LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: 200 }}>
                    <CustomDatePicker
                        //   {...field}
                        //   selected={value}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        slotProps={{
                            toolbar: {
                                hidden: true,
                            },
                            textField:
                            {
                                // type: 'button',
                                variant: 'outlined', label: label, name: name,
                                InputProps: {
                                    className: "dateField",
                                },
                                // role: "button",
                            }
                        }}


                    />
                </LocalizationProvider>)}
            />
            {/* <FormLabel>{label}</FormLabel> */}

        </>
    )
}

export default DatePickers;
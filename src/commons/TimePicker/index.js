import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { Controller } from 'react-hook-form';

// const shouldDisableTime = (value, view) => {
//     const hour = value.hour();
//     if (view === 'hours') {
//       return hour < 9 || hour > 13;
//     }
//     if (view === 'minutes') {
//       const minute = value.minute();
//       return minute > 20 && hour === 13;
//     }
//     return false;
//   };

const TimePicker = (props) => {

    const { name, label, control } = props;

    return (<Controller
        control={control}
        name={name}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
        }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DigitalClock']}>
                <DemoItem label="Digital clock">
                    <DigitalClock
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                    // shouldDisableTime={shouldDisableTime}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>)} />)
}

export default TimePicker;
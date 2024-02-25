import { InputLabel, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const StyledSelect = styled(TextField)((props) => ({
  width: '100%',
}));

const DropdownSelect = (props) => {

  const { menuoptions, label, name, control, placeholder = undefined } = props;

  return (
    <>
      {/* <InputLabel id={label}>{label}</InputLabel> */}
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (<StyledSelect
          labelId={label}
          id={label}
          select
          onChange={onChange}
          value={value}
          label={label}
          placeholder={placeholder ? placeholder : label}
          {...props}
        >
          {menuoptions.map((item, index) => {
            return (<MenuItem value={item} key={index}>{item}</MenuItem>)
          })}
        </StyledSelect>)}
      />

    </>)
}

export default DropdownSelect;
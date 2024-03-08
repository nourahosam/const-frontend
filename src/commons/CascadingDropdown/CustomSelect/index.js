import { InputLabel, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const StyledSelect = styled(TextField)((props) => ({
  width: '100%',
}));

const DropdownSelect = (props) => {

  const { menuoptions, defaultValue, label, name, control, checkForParent, index, selectMap, setSelectMap, placeholder = undefined } = props;

  const setSelectedValue = (index, value) => {
    const oldObj = selectMap[index];
    oldObj.selectedValue = value;
    selectMap[index] = oldObj;
    setSelectMap(selectMap);
  }

  return (
    <>
      {console.log("wsalt")}
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (<StyledSelect
          id={label}
          select
          defaultValue={defaultValue? defaultValue: null}
          onChange={(e) => {
            onChange(e);
            setSelectedValue(index, e.target.value);
            checkForParent(e.target.value, index);
            
          }}
          value={value}
          label={label}
          // placeholder={placeholder ? placeholder : label}
          {...props}
        >
          {menuoptions.map((item, index) => {
            return (<MenuItem value={item.id} key={item.id}>{item.type}</MenuItem>)
          })}
        </StyledSelect>)}
      />

    </>)
}

export default DropdownSelect;
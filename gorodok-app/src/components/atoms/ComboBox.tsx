import React, { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IComboBoxProps } from "../../interfaces/atoms/ComboBox/IComboBoxProps";

const ComboBox: FC<IComboBoxProps> = ({
  label,
  options,
  value,
  width,
  height,
  onChange,
}) => {
  return (
    <Autocomplete
      options={options}
      value={value}
      getOptionLabel={(option) => option.title}
      onChange={(_event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => 
        <TextField 
        {...params} 
        label={label}
        />}
      sx={{ width: width && `${width}px`, height: height && `${height}px` }}
    />
  );
};

export default ComboBox;

import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { ICustomButtonProps } from '../../interfaces/atoms/CustomButton/ICustomButtonProps';


const CustomButton: FC<ICustomButtonProps> = ({ children, sx, width, height, color="#fc6c6c", startIcon, endIcon, fullWidth, onClick }) => {
  return (
    <Button 
      disableElevation 
      variant='contained'
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        ...sx,
        width: width, 
        height: height, 
        minHeight: height && `${height}px`, 
        backgroundColor: color,
        textTransform: 'none',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
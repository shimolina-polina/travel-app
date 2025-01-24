import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import { ICounterProps } from '../../interfaces/atoms/Counter/ICounterProps';

const Counter: FC<ICounterProps> = ({count, onChange, handleDecrement, handleIncrement}) => {

  return(
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleDecrement} disabled={count === 0}>
                <RemoveIcon />
              </IconButton>
              <TextField
                type="number"
                value={count}
                onChange={onChange}
                slotProps={{
                  htmlInput: {
                    min: 1
                  }
                }}
                sx={{ width: 70 }}
              />
              <IconButton onClick={handleIncrement}>
                <AddIcon />
              </IconButton>
            </Box>
        )
    }

    export default Counter
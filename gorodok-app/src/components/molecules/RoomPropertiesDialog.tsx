import { Box, Grid2, IconButton, InputAdornment, Popover, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CustomButton, Counter } from "../atoms/atoms";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setAdultsCount, setChildrenCount } from "../../store/filtersSlice";
import { IRoomPropertiesDialogProps } from "../../interfaces/molecules/RoomFlightPropertiesDialog/IRoomPropertiesDialogProps";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { pluralizeGuest } from "../../utils/pluralizeGuest";



const RoomPropertiesDialog: FC<IRoomPropertiesDialogProps> = ({width}) => {
    const [peopleCount, setPeopleCount] = useState<number>(1);

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const isPopoverOpen = Boolean(anchorEl);

    const dispatch = useDispatch();
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filters);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleChangeAdults = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue >= 1) {
            dispatch(setAdultsCount(newValue));
            setPeopleCount(newValue + filters.childrenCount)
        } else if (event.target.value === "" || newValue === 0) {
            dispatch(setAdultsCount(1));
            setPeopleCount(1 + filters.childrenCount);
        } else {
            setPeopleCount(1 + filters.childrenCount);
        }
    };

    const handleIncrementAdults = () => {
        setPeopleCount(filters.adultsCount + filters.childrenCount + 1)
        dispatch(setAdultsCount(filters.adultsCount + 1));        
    };

    const handleDecrementAdults = () => {
      if (filters.adultsCount > 1) {
        setPeopleCount(filters.adultsCount + filters.childrenCount - 1)
        dispatch(setAdultsCount(filters.adultsCount - 1))
      }
    };

    const handleChangeChildren = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
        dispatch(setChildrenCount(newValue));
        setPeopleCount(filters.adultsCount + newValue)
    } else if (event.target.value === "" || newValue < 0) {
        dispatch(setChildrenCount(0));
        setPeopleCount(filters.adultsCount + 0)
    } else {
        dispatch(setChildrenCount(0));
    }
    };

    const handleIncrementChildren = () => {
        setPeopleCount(filters.adultsCount + filters.childrenCount + 1)
        dispatch(setChildrenCount(filters.childrenCount + 1));
    };

    const handleDecrementChildren = () => {
      if (filters.childrenCount > 0) {
        setPeopleCount(filters.adultsCount + filters.childrenCount - 1)
        dispatch(setChildrenCount(filters.childrenCount - 1));
      }
    };

    const handleClickSubbmitButton = () => {
        setPeopleCount(filters.adultsCount + filters.childrenCount);
        setAnchorEl(null)
    }


    return (
    <Box>
        <TextField 
            label="Номер для "
            value={peopleCount + " " + pluralizeGuest(peopleCount)}
            sx={{width: width}}
            slotProps={{
            input: {
                readOnly: true,
            
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={handleClick} edge="end">
                        {isPopoverOpen? <ArrowDropUpIcon />: <ArrowDropDownIcon />}
                    </IconButton>
                </InputAdornment>
                ),
                style: { cursor: 'default' },
            },
            }}>
        </TextField>
        <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}            
            slotProps={{
                paper: {
                    sx: {
                        marginTop: '9px',
                        width: '400px'
                    },
                }
                
            }}
            >
            <Box padding={2}>
                <Grid2 container>
                    <Grid2 size={6}>
                        <Typography sx={{marginBottom: 1}}>Взрослые</Typography>
                        <Counter 
                            count={filters.adultsCount} 
                            onChange={handleChangeAdults}
                            handleIncrement={handleIncrementAdults}
                            handleDecrement={handleDecrementAdults}
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography sx={{marginBottom: 1}}>Дети</Typography>
                        <Counter 
                            count={filters.childrenCount} 
                            onChange={handleChangeChildren}
                            handleIncrement={handleIncrementChildren}
                            handleDecrement={handleDecrementChildren}
                        />
                    </Grid2>
                </Grid2>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10}}>
                    <CustomButton width={150} height={45} onClick={handleClickSubbmitButton}>
                        Готово
                    </CustomButton>
                </Box>
            </Box>
        </Popover>
    </Box>
    );
}

export default RoomPropertiesDialog;
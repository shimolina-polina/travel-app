import { Box, Checkbox, FormControlLabel, Paper, Slider, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { RootState } from "../../store/store";
import dayjs from "dayjs";
import { pluralizeGuest } from "../../utils/pluralizeGuest";
import ComboBox from "../atoms/ComboBox";
import { IComboBoxOption } from "../../interfaces/atoms/ComboBox/IComboBoxOption";
import { hotels } from "../../data/hotels";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stars from "../atoms/Stars";


interface IFilters {
    setPriceRange: (priceRange: number[]) => void;
    priceRange: number[];
    setStars: (stars: number[]) => void;
    stars: number[];
    setSortType: (sortType: IComboBoxOption | null)=> void;
    sortType: IComboBoxOption | null;
    minCost: number;
    maxCost: number;
    sortOptions: IComboBoxOption[];
}

const SideBar: FC<IFilters> = ({setPriceRange, priceRange, setStars, stars, setSortType, sortType, minCost, maxCost, sortOptions}) => {
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);

    const handleChangeSlider = (_event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
      };

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (isNaN(value)) return;

        const newValue = [...priceRange];
        newValue[index] = value;
        setPriceRange(newValue);
    };

    const handleCheckboxChange = (starCount: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setStars([...stars, starCount])
        } else {
            setStars(stars.filter((count) => count !== starCount));
        }
    };


    return (
        <Box sx={{marginY: 2}}>
            <Box sx={{marginY: 1}}>
                <Paper sx={{borderRadius: 3, padding: 2}} elevation={0}>
                    <Typography>{filters.location?.name}</Typography>
                    <Typography>{dayjs(filters.dateRange[0]).format('MMM D, YYYY')} - {dayjs(filters.dateRange[1]).format('MMM D, YYYY')}</Typography>
                    <Typography>Номер для {filters.adultsCount + filters.childrenCount} {pluralizeGuest(filters.adultsCount + filters.childrenCount)}</Typography>
                </Paper>
            </Box>
            <Box sx={{marginY: 1}}>
                <Paper sx={{borderRadius: 3, padding: 2}} elevation={0}>
                    <Typography sx={{marginBottom: 1}}>Сортировка</Typography>
                    <ComboBox
                        icon={null}
                        label={""}
                        value={sortType}
                        size="small"
                        options={sortOptions} 
                        onChange={(newValue: IComboBoxOption | null) => {
                                setSortType(newValue);
                        }}
                    />
                </Paper>
            </Box>
            <Box sx={{marginY: 1}}>
                <Paper sx={{borderRadius: 3, padding: 2}} elevation={0}>
                    <Typography>Цена за ночь</Typography>
                    <Box sx={{display: 'flex', marginY: 1}}>
                        <TextField 
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '8px 0 0 8px',
                                },
                            }}
                            size="small"
                            type="number"
                            onChange={handleInputChange(0)}
                            inputProps={{
                                min: minCost,
                                max: priceRange[1],
                            }}
                            value={priceRange[0]}

                        />
                        <TextField 
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '0 8px 8px 0',
                                },
                            }}
                            size="small"
                            type="number"
                            onChange={handleInputChange(1)}
                            inputProps={{
                                min: priceRange[0],
                                max: maxCost,
                            }}
                            value={priceRange[1]}
                        />
                    </Box>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={priceRange}
                        onChange={handleChangeSlider}
                        valueLabelDisplay="auto"
                        sx={{color: "#fc6c6c"}}
                        min={minCost}
                        max={maxCost}
                    />
                </Paper>
            </Box>
            <Box sx={{marginY: 1}}>
            <Paper sx={{ borderRadius: 3, padding: 2 }} elevation={0}>
                <Typography sx={{marginBottom: 1}}>Количество звезд</Typography>
                {[5, 4, 3, 2, 1].map((starCount) => (
                    <FormControlLabel
                        key={starCount}
                        control={
                            <Checkbox
                                checked={stars.includes(starCount)}
                                onChange={handleCheckboxChange(starCount)}
                                sx={{
                                    padding: 0,
                                    color: '#fc6c6c',
                                    '&.Mui-checked': {
                                        color: '#fc6c6c',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '1.5rem',
                                    },
                                }}
                            />
                        }
                        label={<Stars count={starCount} />}
                        sx={{ width: '100%', margin: 0 }}
                    />
                ))}
            </Paper>
            </Box>
        </Box>
    )
   
}

export default SideBar;
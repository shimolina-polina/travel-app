import { Box, Typography, Paper, Grid2, Link, Alert } from "@mui/material";
import React from "react";
import { CitySelector, RoomPropertiesDialog } from "../molecules/molecules";
import { CustomDateRangePicker, CustomButton } from '../atoms/atoms';
import { useSelector } from "react-redux";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const FiltersSelector = () => {
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filters);
    let navigate = useNavigate();

    return (
        <Box
            sx={{
                    backgroundColor: '#374785',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: 200,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '70px'
                }}
        >
            <Box sx={{maxWidth: 1500, marginBottom: 3, width: '100%'}}>
                <Typography variant='h2' sx={{ marginX: '5vw', marginBottom: 4, color: 'white', fontSize: {xs: '2rem', md:'h2'}  }}>
                    Найти путешествие
                </Typography>
                <Paper 
                    sx={{ 
                            padding: 3, 
                            borderRadius: '10px', 
                            marginX: '5vw',
                            flexWrap: 'wrap',
                            gap: 2,
    
                        }} 
                    elevation={0}
                >
                    <Grid2 container spacing={2} alignItems="center">
                        <Grid2 size={{xs:12, md:3}}>
                            <CitySelector width="100%" />
                        </Grid2>
                        <Grid2 size={{xs:12, md:3}}>
                            <RoomPropertiesDialog width="100%" />
                        </Grid2>
                        <Grid2 size={{xs:12, md:4}}>
                            <CustomDateRangePicker />
                        </Grid2>
                        <Grid2 size={{xs:12, md:2}}>
                            <Link href="hotels/">
                                <CustomButton width="100%" height={56} color="#fc6c6c">
                                    Найти
                                </CustomButton>
                            </Link>
                        </Grid2>
                    </Grid2>
                </Paper>     
            </Box>
        </Box>  
      )
}

export default FiltersSelector;
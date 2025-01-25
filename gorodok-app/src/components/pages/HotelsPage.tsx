import React from "react";
import { hotels } from "../../data/hotels";
import { useSelector } from "react-redux";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { RootState } from "../../store/store";
import HotelCard from "../molecules/HotelCard";
import { Box, Grid2, Typography } from "@mui/material";
import { pluralizeVariants } from "../../utils/pluralizeVariants";

const HotelsPage = () => {
  const filters: IFiltersSlice = useSelector((state: RootState) => state.filters);

  const filteredHotels = hotels.filter(
    (hotel) => hotel.city === filters.location?.name
  );

  const resultHotels = filteredHotels.length === 0? hotels: filteredHotels

  return (
    <Box sx={{
        display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingX: '70px',
          paddingRight: '70px'
        }}>
          <Box sx={{maxWidth: 1500, marginBottom: 3, width: '100%'}}>
            <Grid2 container>
              <Grid2 size={2}>

              </Grid2>
              <Grid2 size={10}>
              <Box sx={{marginY: 2}}>
              {filteredHotels.length === 0 && (
              <>
                <Typography variant="h5">К сожалению ничего подходящего не нашлось</Typography>
                <Typography variant="h6">Возможно вам понравятся другие варианты</Typography>
              </>
              )}
              {filteredHotels.length > 0 && (
                <Typography variant="h5">{pluralizeVariants(filteredHotels.length)}</Typography>
              )}
              </Box>
            <Grid2 container spacing={2}>
            {resultHotels.map((hotel) => (
                <Grid2 size={12}>
                  <HotelCard key={hotel.name} hotel={hotel} />
                </Grid2>
              ))}
            </Grid2>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
  );
};

export default HotelsPage;
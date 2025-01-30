import React, { useEffect, useState } from "react";
import { hotels } from "../../data/hotels";
import { useSelector } from "react-redux";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { RootState } from "../../store/store";
import HotelCard from "../molecules/HotelCard";
import { Box, Chip, Grid2, Typography } from "@mui/material";
import { pluralizeVariants } from "../../utils/pluralizeVariants";
import SideBar from "../organisms/SideBar";
import { IComboBoxOption } from "../../interfaces/atoms/ComboBox/IComboBoxOption";
import { pluralizeStars } from "../../utils/pluralizeStars";
import CloseIcon from '@mui/icons-material/Close';
import { IHotel } from "../../interfaces/data/hotels/hotels";

const HotelsPage = () => {
  const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);

  const filteredHotels = hotels.filter(
    (hotel) => hotel.city === filters.location?.name
  );
  useEffect(() => {console.log(filters)}, [])

  const resultHotels = filteredHotels.length === 0? hotels: filteredHotels

  const minCost = Math.min(...hotels.filter(hotel => hotel.city === filters.location?.name).map(hotel => hotel.costPerNightDollars))
  const maxCost = Math.max(...hotels.filter(hotel => hotel.city === filters.location?.name).map(hotel => hotel.costPerNightDollars))

  const sortOptions = 
  [
    {id: 1, title: "По популярности"}, 
    {id: 2, title: "Сначала дешевые"}, 
    {id: 3, title: "Сначала дорогие"}
  ];

  const [priceRange, setPriceRange] = useState<number[]>([minCost, maxCost]);
  const [stars, setStars] = useState<number[]>([]);
  const [sortType, setSortType] = useState<IComboBoxOption | null>({id: 1, title: "По популярности"});
  const [sortedHotels, setSortedHotels] = useState<IHotel[]>(resultHotels);

  useEffect(() => {
    let sorted;
  
    switch (sortType?.id) {
      case 1:
        sorted = [...resultHotels].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 2:
        sorted = [...resultHotels].sort((a, b) => a.costPerNightDollars - b.costPerNightDollars);
        break;
      case 3:
        sorted = [...resultHotels].sort((a, b) => b.costPerNightDollars - a.costPerNightDollars);
        break;
      default:
        sorted = resultHotels;
        break;
    }
  
    setSortedHotels(sorted);
  }, [sortType]);

  const handleDeleteRange = () => {
    setPriceRange([minCost, maxCost])
  }

  const handleDeleteStar = (star: number) => {
    const newStarsValue = stars.filter(oldStar => oldStar !== star)
    setStars(newStarsValue);
  }

  return (
    <Box sx={{
      paddingX: '20px',
    }}>
          <Box sx={{marginBottom: 3, width: '100%'}}>
            <Grid2 container spacing={3}>
              <Grid2 size={2}>
                <Box sx={{marginY: 2}}>
                  <SideBar 
                    setPriceRange={setPriceRange}
                    priceRange={priceRange}
                    setStars={setStars}
                    stars={stars}
                    setSortType={setSortType}
                    sortType={sortType}
                    minCost={minCost}
                    maxCost={maxCost}
                    sortOptions={sortOptions}
                  />
                </Box>
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
                {(stars.length > 0 || priceRange[0] !== minCost || priceRange[1] !== maxCost) &&
                <>
                  <Typography variant="h6" sx={{marginY: 1}}>Примененные фильтры:</Typography>
                  <Box>
                    {stars.length > 0 && 
                    stars.sort().map((star)=>(
                      <Chip key={star} sx={{borderRadius: 2, marginX: 0.5}} label={`${star} ${pluralizeStars(star)}`} onDelete={()=>handleDeleteStar(star)}></Chip>
                    ))
                    }
                    {(priceRange[0] !== minCost || priceRange[1] !== maxCost) &&
                      <Chip sx={{borderRadius: 2, marginX: 0.5}} label={`От ${priceRange[0]}$ до ${priceRange[1]}$ за ночь`} onDelete={handleDeleteRange}/>
                    }
                  </Box>
                  
                </>
                }
                
              </Box>
            <Grid2 container spacing={2}>
            {sortedHotels.map((hotel) => (
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
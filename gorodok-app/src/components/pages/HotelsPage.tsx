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
import { IHotel } from "../../interfaces/data/hotels/hotels";
import { Title } from "@mui/icons-material";

const HotelsPage = () => {
  const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);

  const [resultHotels, setResultHotels] = useState<IHotel[]>([]);

  const filteredHotels = hotels.filter(
    (hotel) => hotel.city === filters.location?.name
  );

  const sortOptions = 
  [
    {id: 1, title: "По популярности"}, 
    {id: 2, title: "Сначала дешевые"}, 
    {id: 3, title: "Сначала дорогие"},
    {id: 4, title: "Сначала 5 звезд"},
    {id: 5, title: "Сначала 1 звезда"},
  ];

  const minCost = hotels.filter(hotel => hotel.city === filters.location?.name).length > 0? 
    Math.min(...hotels.filter(hotel => hotel.city === filters.location?.name).map(hotel => hotel.costPerNightDollars))
    :
    Math.min(...hotels.map(hotel => hotel.costPerNightDollars))

  const maxCost = hotels.filter(hotel => hotel.city === filters.location?.name).length > 0?
    Math.max(...hotels.filter(hotel => hotel.city === filters.location?.name).map(hotel => hotel.costPerNightDollars))
    :
    Math.max(...hotels.map(hotel => hotel.costPerNightDollars))

  const [priceRange, setPriceRange] = useState<number[]>([minCost, maxCost]);
  const [stars, setStars] = useState<number[]>([]);
  const [sortType, setSortType] = useState<IComboBoxOption | null>({id: 1, title: "По популярности"});

  useEffect(() => {
    let filtered;
    if (filteredHotels.length > 0) {
      filtered = filteredHotels;
    } else {
      filtered = hotels;
    }

    switch (sortType?.id) {
      case 1:
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 2:
        filtered = [...filtered].sort((a, b) => a.costPerNightDollars - b.costPerNightDollars);
        break;
      case 3:
        filtered = [...filtered].sort((a, b) => b.costPerNightDollars - a.costPerNightDollars);
        break;
      case 4:
        filtered = [...filtered].sort((a, b) => b.stars - a.stars);
        break;
      case 5:
        filtered = [...filtered].sort((a, b) => a.stars - b.stars);
        break;
      default:
        break;
    }

    if (stars.length > 0) {
      filtered = filtered.filter(s => stars.includes(s.stars))
    }
    filtered = filtered.filter(f => f.costPerNightDollars <= priceRange[1] && f.costPerNightDollars >= priceRange[0])

    setResultHotels(filtered);
  }, [sortType, stars, priceRange[0], priceRange[1]]);

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

                {resultHotels.length === 0 && (
                  <>
                    <Typography variant="h5">К сожалению, под ваши критерии не подходит ни один отель.</Typography>
                    <Typography variant="h6">Попробуйте отменить по крайней мере один из примененных фильтров</Typography>
                  </>
                )}

                {filteredHotels.length > 0 && (
                  <Typography variant="h5">{pluralizeVariants(resultHotels.length)}</Typography>
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
                {resultHotels.map((hotel) => (
                  <Grid2 size={12} key={hotel.name}>
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
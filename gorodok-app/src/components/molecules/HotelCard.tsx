import { Box, Card, CardActionArea, CardContent, Chip, Grid2, IconButton, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { IHotel } from "../../interfaces/data/hotels/hotels";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Stars from "../atoms/Stars";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const StyledCardActionArea = styled(CardActionArea)(({ }) => ({
    '& .MuiCardActionArea-focusHighlight': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  }));


const HotelCard:FC<{hotel: IHotel}> = ({hotel}) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const isAuthenticated: boolean = useSelector((state: RootState) => state.authReducer.isAuthenticated);

    return (
        <>
        <Card sx={{display: 'flex', borderRadius: 3, padding: 0}} elevation={0}>
            <StyledCardActionArea sx={{flexGrow: 1}}>
                <CardContent sx={{padding: 0}}>
                    <Grid2 container>
                        <Grid2 size={{xs: 12, md: 3}} sx={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                loading="lazy"
                                style={{ maxWidth: '100%', height: 'auto', display: 'block', objectFit: 'cover', }}
                            />
                        </Grid2>
                        
                        <Grid2 size={{xs: 12, md: 9}} sx={{padding: 2}}>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={{flexGrow: 1, width: 1}}>
                                    <Stars count={hotel.stars}/>
                                </Box>
                                {isAuthenticated && 
                                    <IconButton sx={{flexGrow: 1}} onClick={()=>{setIsFavourite(!isFavourite)}}>
                                        {!isFavourite? <FavoriteBorderIcon/> : <FavoriteIcon/>}
                                    </IconButton>
                                }
                            </Box>
                            <Typography gutterBottom variant="h5" component="div">
                                {hotel.name}
                            </Typography>
                            <Typography variant="h6">
                                {hotel.city}
                            </Typography>
                            <Chip sx={{borderRadius: 2}} label={`${hotel.costPerNightDollars}$ за ночь`}/>                            
                            <Typography variant="body1">
                                {hotel.description}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </StyledCardActionArea>
        </Card>
        </>
    );
}

export default HotelCard;
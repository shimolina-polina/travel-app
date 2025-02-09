import { Box, Grid2, Paper, Typography, TextField } from "@mui/material";
import React from "react";
import CustomButton from "../atoms/CustomButton";

const Offer = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '70px' }}>
            <Box sx={{width: '100%', maxWidth: 1500}}>
                <Paper elevation={0} sx={{ borderRadius: 3, marginX: '5vw', overflow: 'hidden'  }}>
                    <Grid2 container spacing={0} alignItems="center">
                        <Grid2 size={{xs:12, sm:4, md:3}} sx={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}> 
                            <img
                                src={process.env.PUBLIC_URL + '/1737722549963.png'}
                                alt="Offer Image"
                                loading="lazy"
                                style={{ maxWidth: '100%', height: 'auto', display: 'block', objectFit: 'cover', }}
                            />
                        </Grid2>
                        <Grid2 size={{xs:12, sm:8, md:9}} sx={{ padding: '30px' }}>
                            <Typography variant="h5" gutterBottom>
                                <b>Откройте Мир Путешествий!</b>
                            </Typography>
                            <Typography variant="body1">
                                Получайте вдохновение для новых приключений, полезные советы и эксклюзивные материалы о путешествиях прямо на вашу почту. Подпишитесь!
                            </Typography>
                            <Box sx={{ width: '100%', marginTop: 2, boxSizing: 'border-box' }}>
                                <Grid2 container spacing={2}>
                                    <Grid2 size={{md: 8, xs: 12}}> 
                                        <TextField
                                            label="Электронная почта"
                                            variant="outlined"
                                            type="email"
                                            fullWidth
                                        />
                                    </Grid2>
                                    <Grid2 size={{md: 4, xs: 12}} sx={{ display: 'flex' }}> 
                                        <CustomButton color="#fc6c6c" sx={{ flexGrow: 1, height: 68 }}>
                                            Подписаться
                                        </CustomButton>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Box>
        </Box>
    );
}

export default Offer;
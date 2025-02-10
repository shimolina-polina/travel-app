import { Paper, Box, Grid2, Typography, Divider, Link } from "@mui/material"
import React from "react"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
    <Paper sx={{ borderRadius: '10px'}} elevation={0}>
        <Box sx={{margin: 3, marginX: 10}}>
            <Grid2 container>
                <Grid2 size={{xs:12, md: 5}}>
                    <Typography variant="h6">Городок!</Typography>
                </Grid2>
                <Grid2 size={{xs:12, md: 4}}>
                    <Typography>Наши социальные сети</Typography>
                    <Link href="https://t.me/gorodok_travel" color="inherit" sx={{ mr: 2 }}>
                      <TelegramIcon />
                    </Link>
                    <Link href="#" color="inherit">
                        <InstagramIcon />
                    </Link>
                </Grid2>
                <Grid2 size={{xs:12, md: 3}}>
                    <Grid2 container>
                        <Grid2 size={12}>
                         <Link href="#" underline="none" color="inherit">Наш блог</Link>
                        </Grid2>
                        <Grid2 size={12}>
                            <Link href="#" underline="none" color="inherit">Служба поддержки</Link>
                        </Grid2>
                        <Grid2 size={12}>
                            <Link href="#" underline="none" color="inherit">Популярные направления</Link>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Divider sx={{marginTop: 2, marginBottom: 1}}/>
            <Grid2 container>
                <Grid2 size={{xs:12, md: 6}}>
                <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>Все права защищены, 2025</Typography>
                </Grid2>
                <Grid2 size={{xs:12, md: 3}}>
                <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
                    <Link href="#" underline="none" color="inherit">
                    Согласие на обработку персональных данных
                    </Link>
                </Typography>
                </Grid2>
                <Grid2 size={{xs:12, md: 3}}>
                <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
                    <Link href="#" underline="none" color="inherit">
                    Политика обработки персональных данных
                    </Link>
                </Typography>
                </Grid2>
            </Grid2>
        </Box>
    </Paper>)

}

export default Footer;
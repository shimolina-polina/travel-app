import { AppBar, Box, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Popover, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu";
import { LoginButton } from "./molecules";


const CustomAppBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    
    const menuItems = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleClose}
          onKeyDown={handleClose}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/">
                <ListItemText primary="О нас" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/">
                <ListItemText primary="Служба поддержки" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/">
                <ListItemText primary="Блог о путешествиях" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );
    

    return (
        <Box>
            <AppBar position="static" elevation={0} sx={{backgroundColor: '#374785'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/travel-app/" sx={{ flexGrow: 1 }} underline="none" color="inherit">
                      <Typography variant="h6" component="div" >
                          Городок!
                      </Typography>
                    </Link>
                    <LoginButton/>
                </Toolbar>
            </AppBar>
            <Popover
                open={isMenuOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                sx={{
                  '& .MuiPaper-root': { // Обращаемся к внутреннему элементу Paper
                      borderRadius: 3, // Убираем скругление
                  },
              }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {menuItems}
            </Popover>
        </Box>
)
}

export default CustomAppBar
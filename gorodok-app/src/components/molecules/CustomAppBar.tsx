import { AppBar, Box, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu";
import { LoginButton } from "./molecules";


const CustomAppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => () => {
    setIsMenuOpen(open);
    };
    
    const menuItems = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
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
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Городок!
                    </Typography>
                    <LoginButton/>
                </Toolbar>
            </AppBar>
            <Drawer open={isMenuOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </Box>
)
}

export default CustomAppBar
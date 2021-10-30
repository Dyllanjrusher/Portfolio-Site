import React, { useState } from 'react';
import { Link } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import NatIcon from '@mui/icons-material/Nat';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
    Typography, Stack, Grid, IconButton, Box, Drawer,
    List, ListItem, ListItemText, ListItemIcon, useTheme,
    Button
} from '@mui/material';

import logo from '../../PortfolioLogo.png';
import './index.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (bool) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(bool);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    let pageLabels = ['Home', 'About Me', 'Projects', 'Blog', 'Contact', 'Resume'];
    let pageRoutes = ['/', '/about', '/projects', '/blog', '/contact', '/resume'];

    return (
        <header>
            <AppBar position="fixed">
                <ToolBar>
                    <Grid container spacing={isMobile ? 4 : 3}>
                        <Grid item xs={4} md={3} lg={1}>
                            <div className='logo-header'>
                                <img src={logo} alt="Logo" />
                            </div>
                        </Grid>
                        <Grid item xs={5} md={3} lg={3}>
                            <Stack>
                                <Typography align='left' sx={{ mt: 2 }}> Dyllan Usher </Typography>
                                <Typography align='left'> Software Developer </Typography>
                            </Stack>
                        </Grid>
                        <Grid item md lg >
                            {!isMobile && pageLabels.slice(0, isLarge ? 6 : 5).map((text, index) => (
                                <Button
                                    key={text}
                                    to={pageRoutes[index]}
                                    color="inherit"
                                    component={Link}
                                    sx={{ mt: 2.5 }}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Grid>
                        <Grid item container xs={1} md={1} lg={1}>
                            <IconButton onClick={toggleDrawer(true)} size="large">
                                <MenuIcon edge="start" color="inherit" aria-label="menu" fontSize="inherit" />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                variant="temporary"
                                open={open}
                                onClose={toggleDrawer(false)}
                            >
                                <Box>
                                    <List>
                                        {pageLabels.map((text, index) => (
                                            // add an onclick to this button for route nav
                                            <ListItem button key={text} component={Link} to={pageRoutes[index]}>
                                                <ListItemIcon>
                                                    <NatIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Drawer>
                        </Grid>
                    </Grid>
                </ToolBar>
            </AppBar>
        </header >
    )
}

export default Header;
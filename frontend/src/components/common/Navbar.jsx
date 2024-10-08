import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../images/logo.jpg';

const pages = ['Home', 'Interests', 'Contact'];
const settings = [
    { name: 'Sign in', path: '/login' },
    { name: 'Sign up', path: '/register' },
];

function Navbar(props) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { user, logoutUser, isLoggedIn } = useAuth();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        logoutUser();
        setAnchorElUser(null);
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#C9A9A6'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            display: 'flex',
                            marginRight: '8px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%'
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            letterSpacing: '0rem',
                            color: 'white',
                            textDecoration: 'none'
                        }}
                    >
                        BeautifyMe
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            sx={{
                                '& .MuiDrawer-paper': { bgcolor: '#C9A9A6' }
                            }}
                        >
                            <Box
                                sx={{
                                    width: 250
                                }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {pages.map((page) => (
                                        <ListItem key={page} disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={page} sx={{ 
                                                    textAlign: 'center', 
                                                    fontFamily: 'Inter',
                                                    color: 'white'}} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={RouterLink}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            letterSpacing: '0rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        BeautifyMe
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Inter',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    fontSize: 17
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {isLoggedIn() ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key={"logout"} onClick={handleLogout}>
                                    {"logout"}
                                </MenuItem>
                            </Menu>
                        </Box>
                    ) :
                        (
                            <Button
        variant="contained"
        href="/login"
        sx={{
            my: 2,
            backgroundColor: '#FFF5EE', // White background
            color: '#C9A9A6', // Adjust text color to match your design
            fontFamily: 'Inter',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: '#f0f0f0' // Optional: lighter shade on hover
            }
        }}
    >
        Login
    </Button>
                        )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;

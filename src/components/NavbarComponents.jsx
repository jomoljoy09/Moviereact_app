import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponents = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#90e0ef' }}> {/* Change this color */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* You can add an icon here if needed */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {/* Your brand/logo can go here */}
          </Typography>
          <Box sx={{ display: 'flex' }}>
          <Link to="/dashboard">
          <Button color="inherit">Home</Button>
          </Link>
            <Link to={'/login'}>
              <Button color="inherit">Login</Button>
            </Link>
            <Link to={'/signup'}>
              <Button color="inherit">Signup</Button>
            </Link>
            <Link to={'/addmovie'}>
              <Button color="inherit">Addmovie</Button>
            </Link>
            <Link to={'/logout'}>
              <Button color="inherit">Logout</Button>
            </Link>
           </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarComponents;

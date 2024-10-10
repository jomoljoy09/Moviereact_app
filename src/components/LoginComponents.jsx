import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginComponents = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        '& .MuiTextField-root': { m: 1, width: '50ch' }, // Margin and width for TextFields
        mt: 10, // Add margin-top to create space below the navbar
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" component="h1" sx={{ color: '#90e0ef', mb: 3 }}>
        LOGIN
      </Typography>
      <TextField fullWidth label="Email" id="email" />
      <TextField fullWidth label="Password" id="password" type="password" />
      <Button 
        variant="contained" 
        sx={{ 
          mt: 2, 
          backgroundColor: '#90e0ef', // Change this to your desired color
          '&:hover': {
            backgroundColor: '#45a049', // Darker shade on hover
          },
        }}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default LoginComponents;

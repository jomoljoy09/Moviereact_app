import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const AddmovieComponents = () => {
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
        ADD MOVIE
      </Typography>
      <TextField fullWidth label="Movie Name" id="movie_name" />
      <TextField
          id="outlined-multiline-flexible"
          label="Movie Description"
          multiline
          maxRows={4}
        />
      <TextField fullWidth label="Movie Ratings" id="rating"/>
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
        ADD MOVIE
      </Button>
    </Box>
  );
};

export default AddmovieComponents;

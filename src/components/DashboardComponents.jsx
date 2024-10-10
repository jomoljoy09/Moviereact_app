import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DashboardComponents = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://dummyapi.online/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);

    return (
      
        <div>
            <Typography variant="h3" style={{ marginTop: '80px' }} component="h1" sx={{ color: '#90e0ef', mb: 3 }}>
                MOVIE DASHBOARD
            </Typography>
            <table style={{ width: '70%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '2px solid #90e0ef', padding: '8px' }}>ID</th>
                        <th style={{ borderBottom: '2px solid #90e0ef', padding: '8px' }}>Movie Name</th>
                        <th style={{ borderBottom: '2px solid #90e0ef', padding: '8px' }}>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{movie.id}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{movie.movie}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{movie.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     
    );
};

export default DashboardComponents;
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from './Header';
import { useHistory, useLocation } from 'react-router-dom';
import ResultTitle from './ResultTitle';
import Footer from './stateless/Footer';

const FalconeResult = () => {
    const history = useHistory();
    const location = useLocation();

    const { result, timeTaken } = location.state;

    return (
        <Box className="container">
            <Header />
            <Box className="section">
                <ResultTitle result={result} timeTaken={timeTaken} />
                <Box sx={{ padding: { xs: '2rem 0', md: '1rem 0', lg: '0' } }}>
                    <Button
                        variant="contained"
                        onClick={() => history.push('/')}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                padding: '0 0.5rem',
                                fontWeight: 700,
                                letterSpacing: '0.1rem',
                                textTransform: 'capitalize',
                            }}
                        >
                            Start Again! 🦅
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default FalconeResult;

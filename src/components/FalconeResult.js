import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from './Header';
import HeroTitle from './stateless/HeroTitle';
import { useHistory } from 'react-router-dom';

const FalconeResult = () => {
    const history = useHistory();

    return (
        <Box className="container">
            <Box className="header">
                <Header showBack={true} />
            </Box>
            <Box className="section">
                <HeroTitle />
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

            {/* <Box className="footer">
                <Footer />
            </Box> */}
        </Box>
    );
};

export default FalconeResult;

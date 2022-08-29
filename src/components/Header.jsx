import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = ({ handleResetClick, showReset }) => {
    return (
        <Box className="header">
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="https://www.geektrust.com/"
                target="_blank"
                rel="noopener"
                sx={{
                    padding: '0 1rem',
                    mr: 2,
                    display: { xs: showReset ? 'none' : 'flex', sm: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '0.2rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                GEEKTRUST
            </Typography>
            {showReset && (
                <Button onClick={handleResetClick} variant="button">
                    <Typography
                        variant="h6"
                        sx={{
                            padding: '0 1rem',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.1rem',
                            color: { xs: 'white', sm: '#4d0655f2' },
                        }}
                    >
                        RESET
                    </Typography>
                </Button>
            )}
        </Box>
    );
};

export default Header;

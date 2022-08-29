import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = ({ handleResetClick, showReset }) => {
    return (
        <Box
            className="header"
            sx={{ flexDirection: { xs: 'row-reverse', sm: 'row' } }}
        >
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="https://www.geektrust.com/"
                target="_blank"
                rel="noopener"
                sx={{
                    padding: '0 1rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '0.2rem',
                    color: { xs: '#8b0d9a', sm: 'white' },
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
                            fontSize: '1rem',
                            color: { xs: 'white', sm: '#8b0d9a' },
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

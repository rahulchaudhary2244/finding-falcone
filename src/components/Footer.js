import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Footer = () => {
    return (
        <Box className="footer">
            <Typography
                variant="h6"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '0.1rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                Challenge by geektrust.in
            </Typography>
        </Box>
    );
};

export default Footer;

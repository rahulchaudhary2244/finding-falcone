import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box className="footer">
            <Typography
                variant="h6"
                component="a"
                href="https://www.geektrust.com/challenge/space"
                rel="noopener"
                target="_blank"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '0.1rem',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center',
                }}
            >
                Challenge by geektrust.in
            </Typography>
            <Typography
                variant="h6"
                component="a"
                href="https://www.linkedin.com/in/rahulchaudhary2244/"
                rel="noopener"
                target="_blank"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '0.1rem',
                    color: '#ffcc70',
                    textDecoration: 'none',
                    textAlign: 'center',
                }}
            >
                Coded by Rahul Chaudhary
            </Typography>
            <Typography
                variant="h6"
                component="a"
                href="https://github.com/rahulchaudhary2244"
                rel="noopener"
                target="_blank"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '0.1rem',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center',
                }}
            >
                Github
            </Typography>
        </Box>
    );
};

export default Footer;

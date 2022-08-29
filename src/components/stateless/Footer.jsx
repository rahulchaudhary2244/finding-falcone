import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerData } from '../../utils/constants';
// import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box className="footer">
            {footerData.map((item) => (
                <Typography
                    key={item.id}
                    variant="h6"
                    component="a"
                    href={item.link}
                    rel="noopener"
                    target="_blank"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 400,
                        letterSpacing: '0.1rem',
                        color: item.colour,
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontSize: '1rem',
                    }}
                >
                    {item.text}
                    {/* <GitHubIcon /> */}
                </Typography>
            ))}
        </Box>
    );
};

export default Footer;

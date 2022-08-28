import React from 'react';
import { Typography, Stack } from '@mui/material';

const HeroTitle = () => {
    return (
        <Stack
            mt={{ xs: 1, sm: 2, md: 3 }}
            mb={{ xs: 3, sm: 4, md: 5 }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <Typography
                variant="h3"
                component="h3"
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                }}
            >
                Finding Falcone!
            </Typography>
            <Typography
                variant="h5"
                component="h5"
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                }}
            >
                Select planets you want to search in:
            </Typography>
        </Stack>
    );
};

export default HeroTitle;

import React from 'react';
import { Typography, Stack } from '@mui/material';

const ResultTitle = ({ result, timeTaken }) => {
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
            {result.status === 'success' && (
                <>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        {`🎉 Success! Congratulations on Finding Falcone. King Shan is mighty pleased. 🎉`}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'center',
                            margin: '2rem 0 0',
                        }}
                    >
                        {`Time taken: ${timeTaken}`}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'center',
                            margin: '0 0 2rem',
                        }}
                    >
                        {`Planet found: ${result.planet_name} 🌏`}
                    </Typography>
                </>
            )}
            {result.status === 'false' && (
                <>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        {`😭 Failure! Falcone not found. 😭`}
                    </Typography>
                </>
            )}
        </Stack>
    );
};

export default ResultTitle;

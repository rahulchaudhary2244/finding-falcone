import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { config, getDestinationArray } from '../utils/utility';
import HeroTitle from './stateless/HeroTitle';
import Destination from './Destination';
import Vehicle from './Vehicle';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainComponent = () => {
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [destinationArray, setDestinationArray] = useState(
        getDestinationArray()
    );

    const getPlanets = async () => {
        try {
            const response = await axios.get(`${config.endpoint}/planets`);
            if (response.status !== 200) return [];
            setPlanets(response.data);
            return response.data;
        } catch (err) {
            console.log('Fetching planets failed');
            return [];
        }
    };

    const getVehicles = async () => {
        try {
            const response = await axios.get(`${config.endpoint}/vehicles`);
            if (response.status !== 200) return [];
            const buildVehicle = response.data.map((vehicle) => {
                return {
                    ...vehicle,
                };
            });
            setVehicles(buildVehicle);
            return buildVehicle;
        } catch (err) {
            console.log('Fetching vehicles failed');
            return [];
        }
    };

    useEffect(() => {
        getPlanets();
        getVehicles();
    }, []);

    const handleDropdownChange = (e) => {
        e.stopPropagation();
        const newDestinations = destinationArray.map((item) => {
            if (item.name !== e.target.name) return item;
            return {
                ...item,
                value: e.target.value,
                distance: planets.find(
                    (planet) => planet.name === e.target.value
                ).distance,
            };
        });
        setDestinationArray(newDestinations);
    };

    const handleResetClick = (e) => {
        e.stopPropagation();
        setDestinationArray(getDestinationArray());
    };

    const handleVehicleChange = (e) => {
        e.stopPropagation();
        const currName = e.target.name; //destination1
        const currValue = e.target.value; //Space pod

        const destination = destinationArray.find(
            (destination) => destination.name === currName
        );

        const oldSelectedValue = destination.selectedVehicle;

        const currVehicle = vehicles.find(
            (vehicle) => vehicle.name === currValue
        );

        const builDestinations = destinationArray.map((item) => {
            if (item.name === currName)
                return {
                    ...item,
                    selectedVehicle: currValue,
                    timeTaken: item.distance / currVehicle.speed,
                };

            return item;
        });

        const buildVehicle = vehicles.map((vehicle) => {
            if (vehicle.name === currValue)
                return {
                    ...vehicle,
                    total_no: vehicle.total_no - 1,
                };
            if (vehicle.name === oldSelectedValue)
                return {
                    ...vehicle,
                    total_no: vehicle.total_no + 1,
                };
            return vehicle;
        });
        setDestinationArray(builDestinations);
        setVehicles(buildVehicle);
    };

    return (
        <Box className="container">
            <Box className="header">
                <Header handleResetClick={handleResetClick} />
            </Box>
            <Box className="section">
                <HeroTitle />
                <Stack
                    // mt={{ xs: 1, sm: 2, md: 3 }}
                    direction={{ xs: 'column', lg: 'row' }}
                    justifyContent="center"
                    alignItems={{ xs: 'center', lg: 'flex-start' }}
                    spacing={{ xs: 2, md: 4 }}
                    sx={{ width: '95%', margin: '0 auto' }}
                >
                    <Grid
                        container
                        spacing={4}
                        sx={{ width: '100%', margin: '0 auto' }}
                    >
                        {destinationArray.map((destination) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={3}
                                key={destination.key}
                            >
                                <Item elevation={12}>
                                    <Destination
                                        destination={destination}
                                        destinationArray={destinationArray}
                                        planets={planets}
                                        handleDropdownChange={
                                            handleDropdownChange
                                        }
                                    />
                                    {!!destination.value && (
                                        <Vehicle
                                            vehicles={vehicles}
                                            destination={destination}
                                            handleVehicleChange={
                                                handleVehicleChange
                                            }
                                        />
                                    )}
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                    <Box>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            {`Time taken: ${destinationArray.reduce(
                                (p, c) => p + c.timeTaken,
                                0
                            )}`}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            {/* <Box className="footer">
                <Footer />
            </Box> */}
        </Box>
    );
};

export default MainComponent;

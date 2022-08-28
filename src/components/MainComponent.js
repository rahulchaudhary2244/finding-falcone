import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    Stack,
    styled,
    Typography,
    Button,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import {
    config,
    getDestinationArray,
    getToken,
    headersList,
} from '../utils/utility';
import HeroTitle from './stateless/HeroTitle';
import Destination from './Destination';
import Vehicle from './Vehicle';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

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

    const postFindFalcone = async () => {
        const API_URL = `${config.endpoint}/find`;
        const payload = {
            token: await getToken(),
            planet_names: destinationArray.map(({ value }) => value),
            vehicle_names: destinationArray.map(
                ({ selectedVehicle }) => selectedVehicle
            ),
        };
        const header = {
            headers: headersList,
        };
        try {
            const response = await axios.post(API_URL, payload, header);
            history.push({
                pathname: '/result',
                state: {
                    result: response.data,
                    timeTaken: destinationArray.reduce(
                        (p, c) => p + c.timeTaken,
                        0
                    ),
                },
            });
        } catch (err) {
            console.log(err.response.data.error);
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
        getPlanets();
        getVehicles();
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

    const handleFindFalconeClick = (e) => {
        e.stopPropagation();
        postFindFalcone();
    };

    return (
        <Box className="container">
            <Box className="header">
                <Header showReset={true} handleResetClick={handleResetClick} />
            </Box>
            <Box className="section">
                <HeroTitle />
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    justifyContent="center"
                    alignItems={{ xs: 'center', lg: 'flex-start' }}
                    spacing={{ xs: 5, md: 6 }}
                    sx={{
                        width: '95%',
                        minHeight: { xs: '', md: '34rem' },
                        margin: '0 auto',
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, md: 4 }}
                        rowSpacing={{ xs: 5, md: 4 }}
                        sx={{ width: '95%', margin: '0 auto' }}
                    >
                        {destinationArray.map((destination) => (
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                lg={3}
                                key={destination.key}
                                sx={{ margin: '0 auto' }}
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
                                textAlign: 'center',
                            }}
                        >
                            {`Time taken: ${destinationArray.reduce(
                                (p, c) => p + c.timeTaken,
                                0
                            )}`}
                        </Typography>
                    </Box>
                </Stack>
                <Box sx={{ padding: { xs: '2rem 0', md: '1rem 0', lg: '0' } }}>
                    <Button
                        variant="contained"
                        onClick={handleFindFalconeClick}
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
                            Find Falcone! 🚀
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

export default MainComponent;

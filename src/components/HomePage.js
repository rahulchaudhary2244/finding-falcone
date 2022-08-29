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
    defaultDestinationArray,
    getToken,
    headersList,
    getTotalByKey,
    getVehiclesWithUpdatedTotalNoCount,
    getDestinationsWithNewVehicle,
} from '../utils/utility';
import HeroTitle from './stateless/HeroTitle';
import Destination from './Destination';
import Vehicle from './Vehicle';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f0f0d0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary, //#641db933
}));

const HomePage = () => {
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [destinationArray, setDestinationArray] = useState(
        defaultDestinationArray
    );
    const history = useHistory();

    const getPlanets = async () => {
        const API_URL = `${config.endpoint}/planets`;
        try {
            const response = await axios.get(API_URL);
            if (response.status !== 200)
                throw new Error('Planets list not fetched');
            setPlanets(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    const getVehicles = async () => {
        const API_URL = `${config.endpoint}/vehicles`;
        try {
            const response = await axios.get(API_URL);
            if (response.status !== 200)
                throw new Error('Vehicles list not fetched');
            setVehicles(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
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
                    timeTaken: getTotalByKey(destinationArray, 'timeTaken'),
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
        setDestinationArray(defaultDestinationArray);
    };

    const handleVehicleChange = (e) => {
        e.stopPropagation();
        //currDestination = destination1
        //currVehicle = Space pod

        const currDestination = destinationArray.find(
            (destination) => destination.name === e.target.name
        );

        const currVehicle = vehicles.find(
            (vehicle) => vehicle.name === e.target.value
        );

        const buildVehicle = getVehiclesWithUpdatedTotalNoCount(
            vehicles,
            currDestination.selectedVehicle,
            currVehicle.name
        );

        const builDestinations = getDestinationsWithNewVehicle(
            destinationArray,
            currDestination.name,
            currVehicle
        );

        setDestinationArray(builDestinations);
        setVehicles(buildVehicle);
    };

    const handleFindFalconeClick = (e) => {
        e.stopPropagation();
        postFindFalcone();
    };

    return (
        <Box className="container">
            <Header showReset={true} handleResetClick={handleResetClick} />
            <Box className="section">
                <HeroTitle />
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    justifyContent="center"
                    alignItems={{ xs: 'center', lg: 'flex-start' }}
                    spacing={{ xs: 5, md: 6 }}
                    sx={{
                        width: '95%',
                        minHeight: { xs: '', md: '18rem' },
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
                            {`Time taken: ${getTotalByKey(
                                destinationArray,
                                'timeTaken'
                            )} ⏰`}
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        padding: { xs: '2rem 0', md: '1rem 0', lg: '2rem 0 0' },
                    }}
                >
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
            <Footer />
        </Box>
    );
};

export default HomePage;

import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Stack,
    Grid,
    Paper,
    Container,
    styled,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { config, getDestinationArray } from '../utils/utility';
import HeroTitle from './static_components/HeroTitle';
import Destination from './Destination';

const MainComponent = () => {
    const [planets, setPlanets] = useState([]);
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

    useEffect(() => {
        getPlanets();
    }, []);

    const filterPlanets = (key) => {
        const names = destinationArray
            .filter((item) => item.key !== key && item.value.length)
            .map((item) => item.value);
        const arr = planets.filter(({ name }) => !!!names.includes(name));
        return arr;
    };

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

    return (
        <Box className="container">
            <Box className="header">
                <Header handleResetClick={handleResetClick} />
            </Box>
            <Box className="section">
                <HeroTitle />
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        {destinationArray.map((destination) => (
                            <Destination
                                key={destination.key}
                                destination={destination}
                                planets={filterPlanets(destination.key)}
                                handleDropdownChange={handleDropdownChange}
                            />
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box className="footer">
                <Footer />
            </Box>
        </Box>
    );
};

export default MainComponent;

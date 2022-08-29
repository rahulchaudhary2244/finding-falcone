import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from '@mui/material';

const Destination = ({
    handleDropdownChange,
    destination,
    destinationArray,
    planets,
}) => {
    const filterPlanets = (key) => {
        const names = destinationArray
            .filter((item) => item.key !== key && !!item.selectedPlanet)
            .map((item) => item.selectedPlanet);
        const arr = planets.filter(({ name }) => !!!names.includes(name));
        return arr;
    };

    const { selectedPlanet, label, name, planetDistance, key } = destination;
    const filteredPlanets = filterPlanets(key);

    return (
        <>
            <Box my={2}>
                <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        value={selectedPlanet || ''}
                        label={label}
                        name={name}
                        onChange={handleDropdownChange}
                    >
                        {filteredPlanets.map(({ name }, idx) => (
                            <MenuItem key={idx} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Typography component="div" mb={2}>
                Distance: {planetDistance}
            </Typography>
        </>
    );
};

export default Destination;

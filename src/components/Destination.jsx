import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from '@mui/material';
import { getPlanetsAvailableForSelection } from '../utils/helper';

const Destination = ({
    handleDropdownChange,
    destination,
    destinationArray,
    planets,
}) => {
    const { selectedPlanet, label, name, planetDistance } = destination;

    const filteredPlanets = getPlanetsAvailableForSelection(
        destinationArray,
        planets,
        'name',
        name
    );

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

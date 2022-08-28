import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
} from '@mui/material';
import { filterPlanets } from '../utils/utility';

const Destination = ({
    handleDropdownChange,
    destination,
    destinationArray,
    planets,
}) => {
    const { value, label, name, distance, key } = destination;
    const filteredPlanets = filterPlanets(planets, destinationArray, key);

    return (
        <>
            <Box my={2}>
                <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        value={value || ''}
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
                Distance: {distance}
            </Typography>
        </>
    );
};

export default Destination;

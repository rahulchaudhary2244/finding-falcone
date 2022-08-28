import React from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@mui/material';

const Vehicle = ({ vehicles, destination, handleVehicleChange }) => {
    const { name, distance, selectedVehicle } = destination;
    const isDisbaled = (max_distance, available_count) =>
        distance > max_distance || available_count === 0;

    return (
        <Box>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={selectedVehicle}
                    name={name}
                    onChange={handleVehicleChange}
                >
                    {vehicles.map(({ name, total_no, max_distance }, idx) => (
                        <FormControlLabel
                            key={idx}
                            disabled={isDisbaled(max_distance, total_no)}
                            value={name}
                            control={<Radio />}
                            label={`${name} (${total_no}) ${max_distance}`}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default Vehicle;
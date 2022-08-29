import React from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@mui/material';
import { isVehicleDisabledForSelection } from '../utils/helper';

const Vehicle = ({ vehicles, destination, handleVehicleChange }) => {
    const { name, planetDistance, selectedVehicle } = destination;

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
                            disabled={isVehicleDisabledForSelection(
                                planetDistance,
                                max_distance,
                                total_no
                            )}
                            value={name}
                            control={<Radio />}
                            label={`${name} (${total_no})`}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default Vehicle;

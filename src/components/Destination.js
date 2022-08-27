import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    Select,
    Grid,
    styled,
    Paper,
} from '@mui/material';

const Destination = ({ handleDropdownChange, destination, planets }) => {
    const { value, label, name, distance } = destination;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Item elevation={12}>
                {/* <Typography component="div" >
                    {label}
                </Typography> */}
                <Box my={2}>
                    <FormControl fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Select
                            value={value || ''}
                            label={label}
                            name={name}
                            onChange={handleDropdownChange}
                        >
                            {planets.map(({ name }, idx) => (
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
            </Item>
        </Grid>
    );
};

export default Destination;

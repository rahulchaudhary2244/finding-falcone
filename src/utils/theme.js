import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#56108be0',
        },
        secondary: {
            main: '#de2bf1',
        },
    },
    typography: {
        fontFamily: ['Comic Neue', 'cursive'].join(','),
        body1: {
            fontWeight: 700,
            fontSize: 16,
        },
        body2: {
            fontWeight: 700,
            fontSize: 16,
        },
    },
});

export default theme;

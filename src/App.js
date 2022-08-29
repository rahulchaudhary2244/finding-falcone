import HomePage from './components/HomePage';
import FalconeResult from './components/FalconeResult';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

//Please find netlify deployed url below
//https://finding-falcone-by-rahul.netlify.app/

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    dense
                    preventDuplicate
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    autoHideDuration={3000}
                >
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/result"
                            element={<FalconeResult />}
                        />
                    </Routes>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;

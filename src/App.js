import HomePage from './components/HomePage';
import FalconeResult from './components/FalconeResult';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/result" element={<FalconeResult />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;

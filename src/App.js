import HomePage from './components/HomePage';
import FalconeResult from './components/FalconeResult';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/result" component={FalconeResult} />
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;

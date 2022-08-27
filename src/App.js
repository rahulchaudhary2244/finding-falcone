import beforeLoadConfig from './utils/beforeLoadConfig';
import MainComponent from './components/MainComponent';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';

beforeLoadConfig();

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <MainComponent />
            </ThemeProvider>
        </div>
    );
}

export default App;

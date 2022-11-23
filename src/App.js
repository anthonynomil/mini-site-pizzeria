import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Appbar from './components/Appbar';
import Home from './components/Home';
import PizzaMenu from './components/PizzaMenu';
import PizzaMaker from './components/PizzaMaker';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <div className='App'>
          <Appbar />
          <Home />
          <PizzaMenu />
          <PizzaMaker />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

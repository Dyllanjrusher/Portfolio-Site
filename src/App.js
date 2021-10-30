import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles'

/** Components */
import Main from './AppRoute';
/** Components */


const ThemeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1E5128',
    },
    secondary: {
      main: '#D8E9A8',
    },
    background: {
      paper: '#222222',
      default: '#191A19',
    },
    text: {
      primary: '#bebebe',
      secondary: '#bdbdbd',
      disabled: '#a0a0a0',
      hint: '#858585',
    },
    success: {
      main: '#4E9F3D',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={ThemeOptions}>

      <Main />
    </ThemeProvider>
  )
};

export default App;

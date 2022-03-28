import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import Home from './components/Home';
import Mint from './components/Mint';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: blue[500],
    },
    secondary: {
      main: blue[500],
    },
    error: {
      main: grey[400],
    }
  },
  typography: {
    fontFamily: 'Comic Sans MS',
    color: blue[500],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/Mint" element={<Mint/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

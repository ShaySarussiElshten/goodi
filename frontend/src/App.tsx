import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router/router';



const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff3d00',
    },
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
           <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
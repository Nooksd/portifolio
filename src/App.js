import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;

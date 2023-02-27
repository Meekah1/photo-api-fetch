import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
// import theme from './theme';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

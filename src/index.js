import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider  ,extendTheme} from '@chakra-ui/react'


const colors = {
  primaryColor:{
      color1: "#EF5D7B",
      color2: "#ED4D6E",
      color3: "#DB6C79",
      color4: "#DEB986",
      color5: "#C0DF85",
      color6: "#7DDF64"
  }
}

const theme = extendTheme({colors})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Panier from './pages/Panier';
// import { ThemeOptions } from '@mui/material/styles';


// export const themeOptions: ThemeOptions = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#9c1019',
//     },
//     secondary: {
//       main: '#909090',
//     },
//     text: {
//       primary: '#3b3b3b',
//       secondary: 'rgba(255,255,255,0.7)',
//     },
//     background: {
//       default: '#ffffff',
//       paper: '#ffffff',
//     },
//   },
// };

ReactDOM.render(
  <React.StrictMode>
    <Panier />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

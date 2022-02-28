import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {oneTheme} from "./Components/Theme/themeOne";
import {ThemeProvider} from "@emotion/react";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={oneTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

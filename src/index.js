import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar'

import PeopleList from './pages/people';
import Films from './pages/films';
import People from './pages/people/[cod]';
import Film from './pages/films/[cod]';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.furthestBackground};
    color: ${({ theme }) => theme.colors.textColor};
    /* font-family: 'Roboto', sans-serif; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    color: ${({ theme }) => theme.colors.yellow};
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: '#FFE81F',
    closestBackground: '#303030',
    middleBrackground: '#0F0F0F',
    furthestBackground: '#000000',
    yellow: '#FFE81F',
    textColor: '#FAFAFA',
    borderColor: '#606060'
  },
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/people/:cod" element={<People />} />
        <Route path="/films" element={<Films />} />
        <Route path="/film/:cod" element={<Film />} />
      </Routes>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

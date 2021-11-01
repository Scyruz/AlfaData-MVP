import React from 'react';
import logo from './logo.svg';
import './App.css';
import Verifier from './components/Verifier';
import { CssBaseline } from '@material-ui/core';
import Home from './containers/Home';
import Result from './components/Result';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
        <BrowserRouter>
      <Routes />
      </BrowserRouter>    
    </React.Fragment>
  );
}

export default App;

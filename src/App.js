import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import { Container } from '@material-ui/core';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/router/Routes';



class App extends Component {

  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Header></Header>
          <Container fixed className="layout-fix" >
            <Routes></Routes>

          </Container>
          <Footer></Footer>
        </BrowserRouter>
      </React.StrictMode>
    );
  }

}

export default App;

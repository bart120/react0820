import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import { Container } from '@material-ui/core';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/router/Routes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

class App extends Component {

  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Header></Header>
            <Container fixed className="layout-fix" >
              <Routes></Routes>

            </Container>
            <Footer></Footer>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
  }

}

export default App;

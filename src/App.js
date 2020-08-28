import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import { Container } from '@material-ui/core';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/router/Routes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';
import './core/conf/translation';
import i18next from 'i18next';


class App extends Component {

  componentDidMount() {
    const browserLang = navigator.language || navigator.userLanguage;
    i18next.changeLanguage(browserLang.split('-')[0]);
    //i18next.changeLanguage('fr');
    this.setState({});
  }

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

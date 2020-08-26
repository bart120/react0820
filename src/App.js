import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import { Container } from '@material-ui/core';
import Footer from './layout/Footer';


class App extends Component {

  render() {
    return (
      
      <>
        <Header></Header>
        <Container fixed className="layout-fix" >
          l'app
          
        </Container>
        <Footer></Footer>
      </>
    );
  }

}

export default App;

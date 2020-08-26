import React, { Component } from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import HeaderLogin from '../core/components/HeaderLogin';
//import { PropTypes } from 'prop-types';

class Header extends Component {


    /*static propTypes = {
        couleur: PropTypes.string.isRequired
    };*/


    // sur le chargement du comp. dans le DOM
    componentDidMount() {
        console.log('DidMount');
    }

    // sur la mise à jour du comp.
    componentDidUpdate() {
        console.log('DidUpdate');
    }



    render() {
        console.log('render');
        return (
            /*<>
                <h3>MonApp</h3>
                <Button variant="contained" color="primary">test</Button>
            </>*/
            <AppBar>
                <Toolbar>
                    <h3>MonApp</h3>
                    <a href="" className="lien">Accueil</a>
                    <a href="" className="lien">Salles</a>
                    <a href="" className="lien">Ajouter</a>

                    <HeaderLogin></HeaderLogin>

                </Toolbar>
            </AppBar>

        );
    }



}

export default Header;
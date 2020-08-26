import React, { Component } from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core';

class Header extends Component {

    render() {
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
                </Toolbar>
            </AppBar>

        );
    }

}

export default Header;
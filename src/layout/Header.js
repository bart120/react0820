import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import HeaderLogin from '../core/components/HeaderLogin';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

//import { PropTypes } from 'prop-types';

class Header extends Component {


    /*static propTypes = {
        couleur: PropTypes.string.isRequired
    };*/


    // sur le chargement du comp. dans le DOM
    componentDidMount() {
        console.log('DidMount');
        console.log('PROPS HEADER', this.props);
    }

    // sur la mise à jour du comp.
    componentDidUpdate() {
        console.log('DidUpdate');
    }

    render() {
        console.log('render');
        const { t } = this.props;
        return (
            /*<>
                <h3>MonApp</h3>
                <Button variant="contained" color="primary">test</Button>
            </>*/
            <AppBar>
                <Toolbar>
                    <h3>MonApp</h3>
                    <Link to="/" className="lien">{t('header.home')}</Link>
                    <Link to="/rooms/list" className="lien">{t('header.rooms')}</Link>
                    <Link to="/rooms/add" className="lien">{t('header.add')}</Link>

                    <HeaderLogin></HeaderLogin>

                </Toolbar>
            </AppBar>

        );
    }



}

export default withTranslation()(Header);
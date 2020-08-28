import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/AuthenticationActions';

class HeaderLogin extends Component {

    /*constructor(props) {
        super(props);

        this.onTest = this.onTest.bind(this);
    }*/

    /*state = {
        user: null
    }*/

    onLogout = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        console.log('PROPS HEADERLOGIN: ', this.props);
        return (
            <>
                {this.props.user ?
                    (<>
                        <span>Bonjour {this.props.user.email}</span>
                        <Button onClick={this.onLogout}>Se déconnecter</Button>
                    </>
                    ) : (<Link to="/auth/login" className="lien">Se connecter</Link>)
                }
            </>);
    }

    /*onTest() {
        console.log('THIS ', this);
        this.setState({ user: 'toto' });
        console.log("USER ", this.state.user);
    }*/

    /*onTest = () => {
        console.log('THIS ', this);
        //this.state.user = 'toto';
        this.setState({ user: 'toto' });
        console.log("USER ", this.state.user);
    }*/
}

const mapStateToProps = (stateStore) => {
    return { user: stateStore.auth.user };
}

const mapDispatchToProps = (payload) => {
    return { logout: bindActionCreators(logout, payload) };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderLogin));
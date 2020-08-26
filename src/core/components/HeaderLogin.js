import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class HeaderLogin extends Component {

    /*constructor(props) {
        super(props);

        this.onTest = this.onTest.bind(this);
    }*/

    state = {
        user: null
    }

    render() {
        return (
            <>
                {this.state.user ?
                    (<span>Bonjour {this.state.user}</span>) :
                    (<Button onClick={this.onTest}>Se connecter</Button>)
                }
            </>);
    }

    /*onTest() {
        console.log('THIS ', this);
        this.setState({ user: 'toto' });
        console.log("USER ", this.state.user);
    }*/

    onTest = () => {
        console.log('THIS ', this);
        //this.state.user = 'toto';
        this.setState({ user: 'toto' });
        console.log("USER ", this.state.user);
    }
}

export default HeaderLogin;
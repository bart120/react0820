import React, { Component } from 'react';
import LoginForm from '../../core/components/LoginForm';


class LoginPage extends Component {

    onLog = (user) => {
        console.log('USER: ', user);
    }

    render() {
        return (
            <>

                <LoginForm onLogon={this.onLog} email="vleclerc@inow.fr" password="bonjour">
                    <h2>Connexion</h2>
                </LoginForm>
            </>
        );
    }

}

export default LoginPage;
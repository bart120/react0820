import React, { Component } from 'react';
import LoginForm from '../../core/components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../core/redux/actions/AuthenticationActions';


class LoginPage extends Component {

    onLog = (user) => {
        //console.log('USER: ', user);
        this.props.actionLogin(user);
        this.props.history.push('/');
    }

    render() {
        //console.log('PROPS', this.props);
        return (
            <>
                <LoginForm onLogon={this.onLog} email="vleclerc@inow.fr" password="bonjour">
                    <h2>Connexion</h2>
                </LoginForm>
            </>
        );
    }

}

const mapDispatchToProps = (payload) => {
    return { actionLogin: bindActionCreators(login, payload) };
}

export default connect(null, mapDispatchToProps)(LoginPage);
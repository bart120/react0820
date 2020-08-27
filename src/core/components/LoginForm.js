import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import InputMail from './InputMail';
import { PropTypes } from 'prop-types';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state.email = props.email;
        this.state.password = props.password;
    }

    static propTypes = {
        onLogon: PropTypes.func,
        email: PropTypes.string,
        password: PropTypes.string
    }

    state = {
        email: '',
        password: ''
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        //console.log(ev);
        this.props.onLogon(this.state);
    }

    onChangeFormField = (ev) => {
        //console.log(ev.target);
        this.setState({ [ev.target.name]: ev.target.value });
    }

    click = () => {
        console.log('coucou');
    }

    render() {
        console.log(this.state);
        return (
            <>
                {this.props.children}
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <InputMail label="Login" name="email" onChange={this.onChangeFormField} value={this.state.email} onClick={this.click} />
                    </div>
                    <div>
                        <TextField label="Mot de passe" type="password" name="password" value={this.state.password} onChange={this.onChangeFormField} />
                    </div>
                    <Button type="submit" variant="contained" color="primary">Se connecter</Button>
                </form>
            </>
        );
    }
}

export default LoginForm;
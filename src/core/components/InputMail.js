import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class InputMail extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        validator: PropTypes.bool,
        name: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.string
    }

    state = {
        errorEmail: false
    };

    onChange = (ev) => {
        if (this.props.validator) {
            let value = ev.target.value;
            if (regEmail.test(value)) {
                this.setState({ errorEmail: false });
            } else {
                this.setState({ errorEmail: true });
            }
        }
        this.props.onChange(ev);
    }

    render() {
        return (
            <TextField {...this.props} type="email" onChange={this.onChange} error={this.state.errorEmail} />
        );
    }
}

export default InputMail;
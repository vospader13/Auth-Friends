import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {

        credentials: {
            username: "",
            password: ""
        },
        isFetching: false
    }

    login = e => {
        e.preventDefault()
        this.setState({
            isFetching: true
        })
        console.log("credentials", this.state.credentials)
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                console.log("response", res)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            }).catch(err => {
                console.log('error', err)
                this.props.history.push('/error');
            })
    }
    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }

        })
        console.log(this.state.credentials)
    }

    render() {
        return (
            <div>
                <h2 >Login</h2>

                <form onSubmit={this.login}>
                    <label>Username</label>
                    <input style = {
                      {
                        padding: '5px'
                      }
                    }
                    type = "text"
                    name = "username"
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                    />
                    <label>Password</label>
                    <input style = {
                      {
                        padding: '5px'
                      }
                    }
                    type = "text"
                    name = "password"
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    />
                    <button style = {
                      {
                        padding: '5px'
                      }
                    } >Log in</button>
                    {this.state.isFetching && "logging in"}
                </form>

                <div style = {{display: `flex` , justifyContent: `center`}}>


                </div>

            </div>
        )
    }
}

export default Login;
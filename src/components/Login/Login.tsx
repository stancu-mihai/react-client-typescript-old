import React, { useState } from 'react';
import './Login.css';
import PropTypes, { InferProps } from "prop-types";

type LoginCredentials = {
    username: string,
    password: string
}

async function loginUser(credentials: LoginCredentials) {
    let response = await fetch('https://localhost:6001/users/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    return response.json();
}

const LoginPropTypes = {
    setToken: PropTypes.func.isRequired
};

type LoginTypes = InferProps<typeof LoginPropTypes>; // compile time prop type-checking

const Login = ({ setToken }: LoginTypes) => {
    const [username, setUserName] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //Don't refresh the page after submitting form
        const user = await loginUser({
          username: username? username : '',
          password: password? password : ''
        });
        setToken(user.token);
      }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

Login.propTypes = LoginPropTypes; // runtime prop type-checking

export default Login;
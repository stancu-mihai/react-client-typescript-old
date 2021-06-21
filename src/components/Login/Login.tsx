import React from 'react';
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
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit}>
                    <h1>Please Log In</h1>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input name="username" className="form-control form-control-lg" type="text" placeholder="Enter username"  onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input name="password" className="form-control form-control-lg" type="password" placeholder="Enter password"  onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                            className="link-danger">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = LoginPropTypes; // runtime prop type-checking

export default Login;
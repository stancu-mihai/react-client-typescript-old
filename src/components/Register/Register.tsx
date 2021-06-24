import React from 'react';
import PropTypes, { InferProps } from "prop-types";

type RegisterCredentials = {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

async function registerUser(credentials: RegisterCredentials) {
    let response = await fetch('https://localhost:6001/users/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    return response.json();
}

const RegisterPropTypes = {
    setUser: PropTypes.func.isRequired
};

type RegisterTypes = InferProps<typeof RegisterPropTypes>; // compile time prop type-checking

const Register = ({ setUser }: RegisterTypes) => {
    const [username, setUserName] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [firstName, setFirstName] = React.useState<string>();
    const [lastName, setLastName] = React.useState<string>();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //Don't refresh the page after submitting form
        const user = await registerUser({
          firstName: firstName? firstName : '',
          lastName: lastName? lastName : '',
          username: username? username : '',
          password: password? password : ''
        });
        setUser(user);
      }

    return(
        <div className="login-wrapper">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit}>
                    <h1>Please Register</h1>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="firstName">First name</label>
                        <input name="firstName" className="form-control form-control-lg" type="text" placeholder="Enter first name"  onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="lastName">Last name</label>
                        <input name="lastName" className="form-control form-control-lg" type="text" placeholder="Enter last name"  onChange={e => setLastName(e.target.value)}/>
                    </div>
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
                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login" className="link-danger">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

Register.propTypes = RegisterPropTypes; // runtime prop type-checking

export default Register;
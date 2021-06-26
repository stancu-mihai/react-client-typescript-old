import React from 'react';
import PropTypes, { InferProps } from "prop-types";
import { Formik, Form, Field  } from 'formik';
import * as Yup from 'yup';

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

const RegisterSchema = Yup.object().shape({ // form validation
    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

const Register = ({ setUser }: RegisterTypes) => {
    const [username, setUserName] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [firstName, setFirstName] = React.useState<string>();
    const [lastName, setLastName] = React.useState<string>();

    const initialValues: RegisterCredentials = { firstName: '', lastName: '', username: '', password: ''};

    return(
        <div className="login-wrapper">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Formik
                    initialValues={initialValues}
                    validationSchema = { RegisterSchema }
                    onSubmit={async (values, actions) => {
                        const user = await registerUser({
                            firstName: firstName? firstName : '',
                            lastName: lastName? lastName : '',
                            username: username? username : '',
                            password: password? password : ''
                        });
                        setUser(user);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <h1>Please Sign Up</h1>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="firstName">First name</label>
                                <Field 
                                    name="firstName" 
                                    className="form-control form-control-lg" 
                                    type="text"
                                    placeholder="Enter first name"  
                                    onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && touched.firstName ? (<div className="invalid-feedback d-block">{errors.firstName}</div>) : null}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="lastName">Last name</label>
                                <Field 
                                    name="lastName" 
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Enter last name"  
                                    onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                />
                                {errors.lastName && touched.lastName ? (<div className="invalid-feedback d-block">{errors.lastName}</div>) : null}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="username">Username</label>
                                <Field 
                                    name="username" 
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Enter username"  
                                    onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                                />
                                {errors.username && touched.username ? (<div className="invalid-feedback d-block">{errors.username}</div>) : null}
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <Field 
                                    name="password" 
                                    className="form-control form-control-lg" 
                                    type="password" 
                                    placeholder="Enter password"  
                                    onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                                {errors.password && touched.password ? (<div className="invalid-feedback d-block">{errors.password}</div>) : null}
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg">
                                    Submit
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Already have an account? 
                                    <a href="/login" className="link-danger">Login</a>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

Register.propTypes = RegisterPropTypes; // runtime prop type-checking

export default Register;
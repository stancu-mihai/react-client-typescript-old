import React from 'react';
import PropTypes, { InferProps } from "prop-types";
import { Formik, Form, Field  } from 'formik';
import * as Yup from 'yup';

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
    setUser: PropTypes.func.isRequired
};

type LoginTypes = InferProps<typeof LoginPropTypes>; // compile time prop type-checking

const LoginSchema = Yup.object().shape({ // form validation
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

const Login = ({ setUser }: LoginTypes) => {
    const [username, setUserName] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();

    const initialValues: LoginCredentials = { username: '', password:'' };

    return(
        <div className="login-wrapper">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <Formik
                    initialValues={initialValues}
                    validationSchema = { LoginSchema }
                    onSubmit={async (values, actions) => {
                        const user = await loginUser({
                          username: username? username : '',
                          password: password? password : ''
                        });
                        setUser(user);
                      }}
                >
                    {({ errors, touched }) => (
                    <Form >
                        <h1>Please Log In</h1>
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
                                Don't have an account?
                            <a href="/register" className="link-danger">Sign up</a></p>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

Login.propTypes = LoginPropTypes; // runtime prop type-checking

export default Login;
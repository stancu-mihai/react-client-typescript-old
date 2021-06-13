import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';

function setToken(userToken: string) {
  sessionStorage.setItem('token', userToken);
}

function getToken() {
  return sessionStorage.getItem('token');
}

function App() {
    const token = getToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
          <h1>React-Client-Typescript app</h1>
          <BrowserRouter>
            <Switch>
              <Route path="/privateroute">
                <PrivateRoute />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import useUserInfo from './useUserInfo';

function App() {
  const { user, setUser } = useUserInfo();

    if(!user) {
        return <Login setUser={setUser} />
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
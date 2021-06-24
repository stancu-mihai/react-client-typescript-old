import React from 'react';
import './App.css';
import { Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';
import useUserInfo from './useUserInfo';
import { createBrowserHistory } from "history";
import Register from '../Register/Register';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

const history = createBrowserHistory();

const logout = () => {
  sessionStorage.removeItem("user");
};

function App() {
  const { user, setUser } = useUserInfo();

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            React-Client-Typescript app
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {user? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {user.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logout}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            {/*Login and Register components receive callback prop to modify state of its parent (App)*/}
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser}/>} />
            <Route exact path="/register" render={(props) => <Register {...props} setUser={setUser}/>} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
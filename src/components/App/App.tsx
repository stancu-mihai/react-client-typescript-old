import {Fragment} from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import Login from '../Login/Login';
import useUserInfo from './useUserInfo';
import { createBrowserHistory } from "history";
import Register from '../Register/Register';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Landing from '../Landing/Landing';
import Menu from '../Menu/Menu';

const history = createBrowserHistory();

function App() {
  const { user, setUser } = useUserInfo();

  return (
    <Router history={history}>
      <div>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/landing"]} component={Landing} />{/*Exclude Menu from Landing component*/}
            <Fragment>
              <Menu/>
              <Route exact path="/home" component={Home} />
              {/*Login and Register components receive callback prop to modify state of its parent (App)*/}
              <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser}/>} />
              <Route exact path="/register" render={(props) => <Register {...props} setUser={setUser}/>} />
              <Route exact path="/profile" component={Profile} />
            </Fragment>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
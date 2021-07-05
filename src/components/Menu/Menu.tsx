import { Link} from 'react-router-dom';
import useUserInfo from '../App/useUserInfo';

const logout = () => {
    sessionStorage.removeItem("user");
  };

function Menu() {
  const { user, setUser } = useUserInfo();
  return (
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
  );
}

export default Menu;
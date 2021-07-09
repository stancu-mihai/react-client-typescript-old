import useUserInfo from '../App/useUserInfo';

const logout = () => {
    sessionStorage.removeItem("user");
  };

function Menu() {
  const { user } = useUserInfo();
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a href="/home" className="navbar-brand" > React-Client-Typescript app </a>
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/home" className="nav-link" > Home </a>
        </li>
        {user? (
          <li className="nav-item">
            <a href="/profile" className="nav-link" >
              {user.email}
            </a>
          </li>
          ) : (
          <li className="nav-item">
            <a href="/login" className="nav-link" > Login </a>
          </li>
          )}
          {user? (
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logout}>
              LogOut
            </a>
          </li>
      ) : (
          <li className="nav-item">
            <a href="/register" className="nav-link" > Sign up </a>
          </li>
      )}
      </div>
    </nav>
  );
}

export default Menu;
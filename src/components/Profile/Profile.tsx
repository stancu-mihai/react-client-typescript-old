import { Redirect } from 'react-router-dom';
import useUserInfo from "../App/useUserInfo";

const Profile = () => {
  const { user } = useUserInfo();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{user.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>First name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Token:</strong> {user.token}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
};

export default Profile;
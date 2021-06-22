import { useState } from 'react';
import { IUser } from '../../interfaces/IUser';

export default function useUserInfo() {
  // Get user from session data, if it exists
  const getUser = () => {
    const serializedUser = sessionStorage.getItem('user');
    return serializedUser ? JSON.parse(serializedUser) : undefined;
  };

  // Fetch user and set as initial state
  const [user, setUser] = useState(getUser());

  const saveUser = (newUser: IUser) => {
    sessionStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return {
    setUser: saveUser,
    user
  }
}
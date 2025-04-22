import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import Profile from '../components/Profile';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginComponent onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default Login;
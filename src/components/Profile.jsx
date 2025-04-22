import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUserInfo = async () => {
        try {
          const response = await getUserInfo(token);
          setUser(response.data);
        } catch (err) {
          setError('Failed to fetch user info');
        }
      };
      fetchUserInfo();
    }
  }, []);

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-4" role="alert">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Profile</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Member since:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;

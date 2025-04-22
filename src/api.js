import axios from 'axios';

const api = axios.create({
  baseURL: 'https://box-pr-backend.fly.dev',  // URL do seu backend no Fly.io
});

export const registerUser = (email, password) => {
  return api.post('/register', {
    user: { email, password },
  });
};

export const loginUser = (email, password) => {
  return api.post('/login', { email, password });
};

export const getUserInfo = (token) => {
  return api.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

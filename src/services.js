import axios from 'axios';

const authUrl = 'https://time-capsule-server-omega.vercel.app/api/auth';
// const authUrl = 'http://localhost:3000/api/auth';

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${authUrl}/login`, { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg || 'Error logging in');
    } else {
      throw new Error('Error logging in');
    }
  }
}

// Register
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${authUrl}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg || 'Error registering');
    } else {
      throw new Error('Error registering');
    }
  }
}

// Get user
export const getUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('User not authenticated, please sign in.');

    const response = await axios.get(`${authUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error getting user');
  }
};

import axios from 'axios';

const authUrl = 'https://time-capsule-server-omega.vercel.app/api/auth';
// const authUrl = 'http://localhost:3000/api/auth';

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

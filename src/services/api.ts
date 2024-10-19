import { axios } from '@/shared/components';
import type { User } from '@/interface/type'
import type { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  withCredentials: true,
  headers:{
    'Content-Type': 'application/json',
  }
});
const apiToken = axios.create({
  baseURL: import.meta.env.VITE_APP_TOKEN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});
export const getToken = async () => {
    return await apiToken.get('/sanctum/csrf-cookie');
}
export const signInAuthenticated = async (user: User) => {
    await getToken();
    return api.post('/login',{
      email: user.email,
      password: user.password,
    }).then((res:AxiosResponse) =>{
      const token = res.data.user.access_token;
      localStorage.setItem('token',token);
      return res.data
    });
}
export const signUpAuthenticated = async (user: User) => {
  return api.post('/register',{
    name: user.name,
    email: user.email,
    password: user.password,
    phone_number: user.phone_number,
    address: user.address
  }).then((res) => {
    return res.data;
  });
}

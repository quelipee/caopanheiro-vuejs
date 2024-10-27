import { axios } from '@/shared/components';
import type { AdoptForm, User } from '@/interface/type'
import type { AxiosResponse } from 'axios'
import type { RouteParamValue } from 'vue-router'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  withCredentials: true,
  headers:{
    'Content-Type': 'application/json',
  }
});
const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  withCredentials: true,
  headers:{
    'Content-Type': 'application/json',
  }
});

apiAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn('Token not found!');
  }
  return config;
}, (error) => {
  return Promise.reject(error);
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
      return res.data;
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

export const getAllAnimalsForAdoption = async () => {
  return apiAuth.get('/animals').then((res) => {
    return res.data;
  });
}

export const addToFavorites = async (id : string) => {
  return apiAuth.post('favorite/' + id).then((res) => {
    return res.data;
  });
}

export const getToFavorites = async () => {
  return apiAuth.get('/favorites').then((res) => {
    return res.data;
  });
}

export const removeToFavorite = async (id: string) => {
  return apiAuth.delete(`favorite/${id}`).then((res) => {
    return res.data;
  });
}

export const petProfileView = async (id: string | RouteParamValue[]) => {
  return apiAuth.get(`/animals/${id}`).then((res) => {
    return res.data;
  });
}

export const adoptionAnalysis = async (adoptForm: AdoptForm, id: string | RouteParamValue[]) => {
  return apiAuth.post(`/adoption/${id}`, {
    housing_type: adoptForm.housing_type,
    availability: adoptForm.availability,
    experience: adoptForm.experience,
    other_animals: adoptForm.other_animals,
    reason: adoptForm.reason,
    animal_id: id
  }).then(res => {
    console.log(res.data);
    return res.data;
  });
}

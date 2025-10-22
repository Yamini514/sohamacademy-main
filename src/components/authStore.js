import { create } from 'zustand';
import { api } from '../store/api';
 
// Auth Store with Zustand
export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('authToken') || null,
 
  login: (token, userData) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    set({ token, user: userData });
  },
 
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    set({ token: null, user: null });
  },
 
  isLoggedIn: () => !!localStorage.getItem('authToken')
}));
 
export const login = async (email, password) => {
  try {
    const response = await api.post('login', { data: { email, password } }, { auth: false });
 
    if (!response || !response.data) {
      throw new Error('Invalid response from server');
    }
 
    const { token, info } = response.data;
    if (!token || !info) {
      throw new Error('Invalid authentication data');
    }
   
    useAuthStore.getState().login(token, info);
    return { info };
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
 
export const logout = () => {
  useAuthStore.getState().logout();
};
 
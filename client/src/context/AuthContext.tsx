import React, { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { getUserFromToken } from '../utils/auth';
import apiClient from '../api/client';

// Define the user type
interface User {
  role: string;
  userName: string;
  userId: number;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  error: string | null;
}

// Initialize the AuthContext with a default value
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  error: null
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = getUserFromToken(token) as User;
      setUser(decodedUser);
      apiClient.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

  const login = (token: string) => {
    try {
      setError(null);
      localStorage.setItem('token', token);
      const decodedUser = getUserFromToken(token) as User;
      setUser(decodedUser);
      apiClient.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      setError("Failed to authenticate user.");
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    apiClient.defaults.headers.Authorization = '';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

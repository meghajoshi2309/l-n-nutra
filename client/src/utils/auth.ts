import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = (token: string) => {
  try {
    const decoded = jwtDecode(token) as { role: string; userId: number; userName: string };
    return decoded;
  } catch (error) {
    return null;
  }
};
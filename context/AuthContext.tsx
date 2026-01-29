// context/AuthContext.tsx
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Platform } from "react-native";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const API_URL = "http://YOUR_LARAVEL_API_URL/api";

  // Helper function to get token from secure storage
  const getStoredToken = async () => {
    try {
      if (Platform.OS === "web") {
        return typeof window !== "undefined"
          ? localStorage.getItem("auth_token")
          : null;
      } else {
        return await SecureStore.getItemAsync("auth_token");
      }
    } catch (error) {
      console.warn("Error retrieving token:", error);
      return null;
    }
  };

  // Load token on app start
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getStoredToken();
      if (storedToken) {
        setToken(storedToken);
        await fetchUser(storedToken);
      }
    };
    loadToken();
  }, []);

  const fetchUser = async (overrideToken?: string) => {
    try {
      const t = overrideToken || token;
      if (!t) return;

      const res = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      setUser(res.data);
    } catch (err: any) {
      console.log("fetchUser error", err.response?.data || err.message);
      if (err.response?.status === 401) {
        await logout(); // auto logout if token expired
      }
    }
  };

  const login = async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    setToken(res.data.token);
    setUser(res.data.user);
    try {
      if (Platform.OS === "web") {
        if (typeof window !== "undefined")
          localStorage.setItem("auth_token", res.data.token);
      } else {
        await SecureStore.setItemAsync("auth_token", res.data.token);
      }
    } catch (error) {
      console.warn("Error saving token:", error);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      password_confirmation: password,
    });
    setToken(res.data.token);
    setUser(res.data.user);
    try {
      if (Platform.OS === "web") {
        if (typeof window !== "undefined")
          localStorage.setItem("auth_token", res.data.token);
      } else {
        await SecureStore.setItemAsync("auth_token", res.data.token);
      }
    } catch (error) {
      console.warn("Error saving token:", error);
    }
  };

  const logout = async () => {
    if (token) {
      try {
        await axios.post(
          `${API_URL}/logout`,
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } catch {}
    }
    setUser(null);
    setToken(null);
    try {
      if (Platform.OS === "web") {
        if (typeof window !== "undefined")
          localStorage.removeItem("auth_token");
      } else {
        await SecureStore.deleteItemAsync("auth_token");
      }
    } catch (error) {
      console.warn("Error removing token:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

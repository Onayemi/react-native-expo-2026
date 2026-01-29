import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const apiBase = process.env.EXPO_PUBLIC_APIBASE;
// const apiBase = process.env.EXPO_PUBLIC_APIBASE || "https://remlex-api.test/api";
const api = axios.create({
  baseURL: apiBase,
  headers: {
    Accept: "application/json",
  },
});

// Helper function to get token from secure storage
const getToken = async () => {
  try {
    if (Platform.OS === "web") {
      // Use localStorage for web
      return typeof window !== "undefined"
        ? localStorage.getItem("auth_token")
        : null;
    } else {
      // Use SecureStore for native
      return await SecureStore.getItemAsync("auth_token");
    }
  } catch (error) {
    console.warn("Error retrieving token:", error);
    return null;
  }
};

// Attach token automatically
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

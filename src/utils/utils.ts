import { JWT_TOKEN } from "@/config";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function autenticateToken() {
  const token = JWT_TOKEN;
  return token ? `Bearer ${token}` : undefined;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
export function baseURL() {
  return "https://api.sandbox.pagos360.com";
}

export const axiosInstance = axios.create({
  baseURL: baseURL(),
  headers: {
    "Content-Type": "application/json",
    Authorization: autenticateToken(),
  },
});

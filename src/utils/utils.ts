import { JWT_TOKEN } from "@/config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function autenticateToken() {
  const token = JWT_TOKEN;
  return token ? `Bearer ${token}` : undefined;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

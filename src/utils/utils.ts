import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function autenticateToken() {
  const token = import.meta.env.JWT_TOKEN;
  return token ?? `Bearer ${token}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

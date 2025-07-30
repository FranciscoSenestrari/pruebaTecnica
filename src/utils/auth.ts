import { JWT_TOKEN, FIRABASE_API_KEY } from "@/config";

export const getJWT = (): string | null => {
  return JWT_TOKEN;
};

export const getAPIUrl = (): string => {
  return FIRABASE_API_KEY;
};

export const getAuthHeaders = (): Record<string, string> => {
  const jwt = getJWT();
  return {
    "Content-Type": "application/json",
    ...(jwt && { Authorization: `Bearer ${jwt}` }),
  };
};

export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const headers = getAuthHeaders();
  const url = `${getAPIUrl()}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  return response;
};

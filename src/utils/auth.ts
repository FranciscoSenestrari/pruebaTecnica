export const getJWT = (): string | null => {
  return import.meta.env.VITE_JWT || null;
};

export const getAPIUrl = (): string => {
  return import.meta.env.VITE_API_URL || "";
};

export const getAuthHeaders = (): Record<string, string> => {
  const jwt = getJWT();
  return {
    "Content-Type": "application/json",
    ...(jwt && { Authorization: `Bearer ${jwt}` }),
  };
};

// Función para hacer peticiones a la API con JWT
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

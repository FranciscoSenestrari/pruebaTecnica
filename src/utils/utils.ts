export function autenticateToken() {
  const token = import.meta.env.JWT_TOKEN;
  return token ?? `Bearer ${token}`;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
type PaymentRequest = {
  id: string;
  user: string;
  amount: number;
  status: "Pendiente" | "Pagado" | "Reversado";
  createdAt: string;
};

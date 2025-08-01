import { create } from "zustand";

export type PaymentRequestResult = {
  id: number;
  type: string;
  channel: string;
  paid_at: string;
  created_at: string;
  available_at: string;
  is_available: boolean;
  amount: number;
  gross_fee: number;
  net_fee: number;
  fee_iva: number;
  net_amount: number;
};

export type PaymentRequest = {
  id: number;
  type: string;
  state: "pending" | "paid" | "reversed";
  created_at: string;
  external_reference: string;
  payer_name: string;
  payer_email: string;
  description: string;
  first_due_date: string;
  first_total: number;
  checkout_url: string;
  request_result: PaymentRequestResult[];
};

export type PaymentStore = {
  requests: PaymentRequest[];
  setRequests: (reqs: PaymentRequest[]) => void;
  updateRequestState: (
    id: number,
    state: "pending" | "paid" | "reversed"
  ) => void;
};

export const usePaymentStore = create<PaymentStore>((set) => ({
  requests: [],
  setRequests: (reqs: PaymentRequest[]) => set({ requests: reqs }),
  updateRequestState: (id: number, state: "pending" | "paid" | "reversed") =>
    set((prev) => ({
      requests: prev.requests.map((r) => (r.id === id ? { ...r, state } : r)),
    })),
}));

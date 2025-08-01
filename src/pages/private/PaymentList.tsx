import React, { useEffect, useState } from "react";
import { usePaymentStore } from "@/store/paymentStore";
import LoaderCompoenent from "@/components/LoaderComponent/LoaderCompoenent";
import { DotsIcon } from "@/assets/dots";
import CustomButton from "@/components/ui/Button/CustomButton";

const PAGE_SIZE = 5;

export default function PaymentList() {
  const { requests, setRequests, updateRequestState } = usePaymentStore();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<{ open: boolean; request: any | null }>({
    open: false,
    request: null,
  });

  useEffect(() => {
    if (requests.length === 0) {
      setLoading(true);
      setTimeout(() => {
        setRequests([
          {
            id: 5,
            type: "payment_request",
            state: "pending",
            created_at: "2019-02-22T17:38:23-03:00",
            external_reference: "AWSL88",
            payer_name: "nombre_pagador",
            payer_email: "payer@example.com",
            description: "concepto_del_pago",
            first_due_date: "2019-02-26T00:00:00-03:00",
            first_total: 1554.97,
            checkout_url:
              "https://checkout.pagos360.com/payment-request/cc94799a-36e1-11e4-a340-acde48001122",
            request_result: [
              {
                id: 7,
                type: "collected_payment_request_result",
                channel: "Pago Fácil",
                paid_at: "2017-02-12T00:00:00-03:00",
                created_at: "2019-02-22T17:38:24-03:00",
                available_at: "2017-02-16T00:00:00-03:00",
                is_available: false,
                amount: 2503.95,
                gross_fee: 151.49,
                net_fee: 125.2,
                fee_iva: 26.29,
                net_amount: 2352.46,
              },
            ],
          },
        ]);
        setLoading(false);
      }, 800);
    }
  }, [requests.length, setRequests]);

  // Paginado local
  const total = requests.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const paginated = requests.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleChangeStatus = (
    id: number,
    state: "pending" | "paid" | "reversed"
  ) => {
    setLoading(true);
    setTimeout(() => {
      updateRequestState(id, state);
      setLoading(false);
      setModal((prev) =>
        prev.open && prev.request && prev.request.id === id
          ? { ...prev, request: { ...prev.request, state } }
          : prev
      );
    }, 500);
  };

  const openModal = (req: any) => setModal({ open: true, request: { ...req } });
  const closeModal = () => setModal({ open: false, request: null });

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Payment List</h1>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {loading && <LoaderCompoenent />}
          <table className="w-full rounded-md bg-white shadow">
            <thead>
              <tr className="bg-neutral-200">
                <th className="p-2">Usuario</th>
                <th className="p-2">Monto</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Fecha</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((req) => (
                <tr key={req.id} className="border-b">
                  <td className="p-2">{req.payer_name}</td>
                  <td className="p-2">${req.first_total.toFixed(2)}</td>
                  <td className="p-2">{req.state}</td>
                  <td className="p-2">
                    {new Date(req.created_at).toLocaleString()}
                  </td>
                  <td className="p-2 space-x-2">
                    <button
                      className="p-2 rounded hover:bg-neutral-200"
                      onClick={() => openModal(req)}
                      aria-label="Ver Detalle"
                    >
                      <DotsIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Paginado */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <CustomButton
              className="px-3 py-1 rounded bg-neutral-300 text-black disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Anterior
            </CustomButton>
            <span className="font-bold">
              Página {page} de {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-neutral-300 text-black disabled:opacity-50"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.open && modal.request && (
        <div className="fixed inset-0 bg-black opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">Detalle de Solicitud</h2>
            <div className="mb-4">
              <div>
                <b>ID:</b> {modal.request.id}
              </div>
              <div>
                <b>Referencia:</b> {modal.request.external_reference}
              </div>
              <div>
                <b>Nombre Pagador:</b> {modal.request.payer_name}
              </div>
              <div>
                <b>Email:</b> {modal.request.payer_email}
              </div>
              <div>
                <b>Descripción:</b> {modal.request.description}
              </div>
              <div>
                <b>Fecha de creación:</b>{" "}
                {new Date(modal.request.created_at).toLocaleString()}
              </div>
              <div>
                <b>Primer vencimiento:</b>{" "}
                {new Date(modal.request.first_due_date).toLocaleString()}
              </div>
              <div>
                <b>Monto:</b> ${modal.request.first_total.toFixed(2)}
              </div>
              <div>
                <b>Estado:</b> {modal.request.state}
              </div>
              <div>
                <b>Checkout:</b>{" "}
                <a
                  href={modal.request.checkout_url}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al checkout
                </a>
              </div>
            </div>
            <div className="mb-4">
              <b>Resultados:</b>
              <ul className="list-disc ml-6">
                {modal.request.request_result.map((r: any) => (
                  <li key={r.id}>
                    Canal: {r.channel}, Monto: ${r.amount.toFixed(2)}, Estado
                    disponible: {r.is_available ? "Sí" : "No"}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <label className="font-bold mr-2">Cambiar estado:</label>
              <select
                className="border rounded px-2 py-1"
                value={modal.request.state}
                onChange={(e) =>
                  handleChangeStatus(
                    modal.request.id,
                    e.target.value as "pending" | "paid" | "reversed"
                  )
                }
              >
                <option value="pending">Pendiente</option>
                <option value="paid">Pagado</option>
                <option value="reversed">Reversado</option>
              </select>
            </div>
            <div className="flex justify-end">
              <CustomButton
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={closeModal}
              >
                Cerrar
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Checkout</h1>

        <div className="mt-4 border-t pt-4">
          <p className="text-gray-700">
            <strong>Product:</strong> {name}
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Price:</strong> ₹{price}
          </p>
        </div>

        <button
          onClick={() => {
            alert("Order placed (payment will be added later)");
            window.location.href = "/success";
          }}
          className="mt-6 w-full rounded-xl bg-green-600 py-2 text-white hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </main>
  );
}

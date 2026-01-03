"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Product";
  const price = searchParams.get("price") || "0";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="mb-2">Product: {name}</p>
        <p className="mb-4">Price: ₹{price}</p>

        <button
          onClick={() => (window.location.href = "/success")}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Confirm Order
        </button>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

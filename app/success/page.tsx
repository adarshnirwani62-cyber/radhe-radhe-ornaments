"use client";

export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">Order Successful 🎉</h1>
        <p className="mt-4">Thank you for shopping with Radhe Radhe Ornaments.</p>
      </div>
    </main>
  );
}

"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Product";
  const price = searchParams.get("price") || "0";
  const image = searchParams.get("image") || "";

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-80 w-full">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="rounded-xl object-cover"
            />
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="mt-2 text-xl text-gray-700">₹{price}</p>

          <p className="mt-4 text-gray-600">
            Premium handcrafted jewelry from Radhe Radhe Ornaments.
          </p>

          <button
            onClick={() =>
              (window.location.href = `/checkout?name=${encodeURIComponent(
                name
              )}&price=${price}`)
            }
            className="mt-6 rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}

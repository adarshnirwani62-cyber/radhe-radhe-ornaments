"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold">{name}</h2>
      <p className="mt-1 text-gray-600">₹{price}</p>

      <button
        onClick={() =>
          router.push(
            `/product/${name
              .toLowerCase()
              .replace(/\s+/g, "-")}?name=${encodeURIComponent(
              name
            )}&price=${price}&image=${encodeURIComponent(image)}`
          )
        }
        className="mt-4 w-full rounded-xl bg-black py-2 text-white hover:bg-gray-800 transition"
      >
        Buy Now
      </button>
    </div>
  );
}

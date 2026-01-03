import Image from "next/image";

type ProductProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="rounded-xl"
      />

      <h3 className="mt-3 text-lg font-semibold">{name}</h3>
      <p className="text-yellow-700 font-medium">₹{price}</p>

      <a
        href={`https://wa.me/919561255062?text=I want to buy ${name} for ₹${price}`}
        target="_blank"
        className="mt-4 block w-full text-center bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
      >
        Buy on WhatsApp
      </a>
    </div>
  );
}

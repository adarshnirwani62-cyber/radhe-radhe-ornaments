import Image from "next/image";

type ProductProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-lg"
      />

      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-gray-600">₹{price}</p>

      <a
        href={`https://wa.me/919561255062text=I want to buy ${name} for ₹${price}`}
        target="_blank"
        className="mt-3 block w-full text-center bg-green-600 text-white py-2 rounded"
      >
        Buy on WhatsApp
      </a>
    </div>
  );
}

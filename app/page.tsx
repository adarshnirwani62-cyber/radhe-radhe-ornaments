import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">My Shop 🛍️</h1>
        <p className="mt-2 text-gray-600">
          Discover premium products at the best price
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
         <ProductCard
  name="Gold Ring"
  price={5000}
  image="/products/gold-ring.jpg"
/>

<ProductCard
  name="Silver Chain"
  price={3000}
  image="/products/silver-chain.jpg"
/>

<ProductCard
  name="Diamond Earrings"
  price={12000}
  image="/products/diamond-earrings.jpg"
/>


        </div>
      </div>
    </main>
  );
}

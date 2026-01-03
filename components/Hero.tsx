import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Radhe Radhe Ornaments
        </h1>

        <p className="text-lg mb-6">
          Premium Gold, Silver & Diamond Jewellery
        </p>

        <Link
          href="#products"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

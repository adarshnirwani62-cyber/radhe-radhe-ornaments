import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Radhe Radhe Ornaments"
          width={45}
          height={45}
          priority
        />
        <span className="text-xl font-bold">
          Radhe Radhe Ornaments
        </span>
      </div>

      <Link href="/" className="text-gray-600 hover:text-black">
        Home
      </Link>
    </header>
  );
}

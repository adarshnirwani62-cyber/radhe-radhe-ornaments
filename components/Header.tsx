"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Radhe Radhe Ornaments 🛍️

        </Link>

        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

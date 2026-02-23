// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-[12px] font-semibold tracking-[0.18em] uppercase text-stone-900"
        >
          Gareth Pitt-Hart
        </Link>

        <nav className="flex gap-6 text-[12px] text-stone-700">
          <Link href="/work" className="hover:text-stone-900">
            Series
          </Link>
          <Link href="/about" className="hover:text-stone-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-stone-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

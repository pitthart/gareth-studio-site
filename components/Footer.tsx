import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 px-6 pt-12 pb-16">
      <div className="mx-auto max-w-6xl border-t border-stone-200 pt-10">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0 md:gap-x-12">

          {/* SERIES */}
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Series
            </div>
            <ul className="space-y-2 text-sm text-stone-800">
              <li>
                <Link href="/work/totem" className="hover:text-stone-950">
                  Totem
                </Link>
              </li>
              <li>
                <Link href="/work/transmission" className="hover:text-stone-950">
                  Transmission
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/work/archive"
                  className="text-stone-500 hover:text-stone-800"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* STUDIO */}
          <div>
            <Link
              href="/studio"
              className="mb-3 block text-[11px] uppercase tracking-[0.18em] text-stone-500 hover:text-stone-800"
            >
              Studio
            </Link>

            <ul className="space-y-2 text-sm text-stone-800 pl-3">
              <li>
                <Link href="/studio" className="hover:text-stone-950">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/studio/studies" className="hover:text-stone-950">
                  Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* INFO */}
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Info
            </div>
            <ul className="space-y-2 text-sm text-stone-800">
              <li>
                <Link href="/about" className="hover:text-stone-950">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-stone-950">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COPYRIGHT */}
          <div className="flex items-end md:justify-end">
            <div className="text-sm text-stone-500">
              © {new Date().getFullYear()} Gareth Pitt-Hart
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

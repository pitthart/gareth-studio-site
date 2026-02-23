// app/series/page.tsx
import Link from "next/link";

export default function SeriesPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-8 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-0 pb-24 md:px-10">
        <div className="page-pad">
          <header className="mb-14">
            <div className="text-[10px] md:text-sm text-stone-900">Series</div>
          </header>
          
          <section className="space-y-6">
            <Link
              href="/work/totem"
              className="block text-1xl md:text-5xl font-normal tracking-tight text-stone-900 hover:opacity-70 transition-opacity"
            >
              Totem
            </Link>

            <Link
              href="/work/transmission"
              className="block text-1xl md:text-5xl font-normal tracking-tight text-stone-900 hover:opacity-70 transition-opacity"
            >
              Transmission
            </Link>
          </section>

          <div className="mt-16 border-t border-stone-200 pt-10">
            <Link
              href="/work/archive"
              className="text-[18px] md:text-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              Archive
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

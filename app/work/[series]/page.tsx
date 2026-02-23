import Image from "next/image";
import Link from "next/link";

export default function SeriesPage() {
  return (
      <main className="min-h-screen bg-stone-100">
        <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
        <header className="mb-12">
          <h1 className="text-[26px] md:text-[30px] font-normal mb-1 leading-tight text-stone-900">
            Series
          </h1>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl leading-tight">
            Totem. Transmission.
          </p>
        </header>

        <section className="space-y-10">
          {/* Totem */}
          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] bg-stone-200 overflow-hidden rounded-md border border-stone-200 shrink-0">
              <Image
                src="/art/totem/cover.jpg"
                alt="Totem"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/totem"
                className="text-lg md:text-xl text-stone-900 hover:opacity-70 transition-opacity leading-tight"
              >
                Totem
              </Link>
              <div className="mt-[1px] text-[11px] text-stone-500 leading-tight">
                Rhythm. Repetition. Stacked symbols.
              </div>
            </div>
          </div>

          {/* Transmission */}
          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] bg-stone-200 overflow-hidden rounded-md border border-stone-200 shrink-0">
              <Image
                src="/art/transmission/cover.jpg"
                alt="Transmission"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/transmission"
                className="text-lg md:text-xl text-stone-900 hover:opacity-70 transition-opacity leading-tight"
              >
                Transmission
              </Link>
              <div className="mt-[1px] text-[11px] text-stone-500 leading-tight">
                Signal. Drift. Interruption.
              </div>
            </div>
          </div>
        </section>

        {/* Archive pushed back */}
        <div className="mt-16 border-t border-stone-200 pt-8">
          <Link
            href="/work/archive"
            className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
          >
            Archive
          </Link>
        </div>
      </div>
    </main>
  );
}

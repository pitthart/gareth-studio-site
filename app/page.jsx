// app/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100">

      <div className="mx-auto max-w-5xl px-6 pt-10 pb-16 md:px-10 md:pt-12 md:pb-20">
        {/* SERIES */}
        <section className="mt-24 md:mt-12">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 leading-none">
              Series
            </div>
            <div className="mt-2 text-[13px] text-stone-600 leading-snug">
              Paintings formed through repetition, pressure, and revision.
            </div>
          </div>

          <div className="mt-4 border-t border-stone-200" />

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-center">
                <Link href="/work/totem" className="group flex justify-center">
                  <div className="w-full max-w-[420px] text-center">
                    <div className="relative h-[160px] md:h-[200px] bg-stone-200 overflow-hidden rounded-lg border border-stone-200">
                      <Image
                        src="/totem-thumb.jpg"
                        alt="Totem"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-3 text-xl md:text-2xl text-stone-900 group-hover:opacity-70 transition-opacity">
                      Totem
                    </div>
                  </div>
                </Link>

                <Link href="/work/transmission" className="block group">
                  <div className="relative h-[160px] md:h-[200px] bg-stone-200 overflow-hidden rounded-lg border border-stone-200">
                    <Image
                      src="/transmission-thumb.jpg"
                      alt="Transmission"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3 text-xl md:text-2xl text-stone-900 group-hover:opacity-70 transition-opacity">
                    Transmission
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* more separation between sections */}
        <div className="mt-20 md:mt-36" />

        {/* STUDIO */}
        <section className="mt-12">
          {/* Centered label + copy (like Series) */}
          <div className="mt-6 flex justify-center text-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500 leading-none">
                Studio
              </div>
              <div className="mt-2 text-[13px] text-stone-600 leading-snug">
                Notes. Fragments. In progress.
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-stone-200 flex items-center justify-between">
            {/* keep the line simple; put view subtly to the right */}
            <span />
           
          </div>

          <div className="mt-5">
            <Link href="/studio" className="block">
              <div className="relative h-[220px] md:h-[300px] overflow-hidden bg-stone-200 rounded-lg border border-stone-200">
                <Image
                  src="/studio-hero.jpg"
                  alt="Studio"
                  fill
                  className="object-cover contrast-80 brightness-95"
                />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

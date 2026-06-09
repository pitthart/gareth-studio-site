// app/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gareth Pitt-Hart | Abstract Painter",
  description:
    "Gareth Pitt-Hart is an abstract painter based in Saint Louis, working with canvas, cardboard, paper, and layered materials exploring trace, pressure, erosion, and repetition.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <h1 className="sr-only">
        Gareth Pitt-Hart — Abstract painter based in Saint Louis
      </h1>

      {/* HERO / NEW WORK */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-stone-900">
        <Image
          src="/new-work-hero1.png"
          alt="New large-scale black and white painting by Gareth Pitt-Hart"
          fill
          priority
          className="object-cover opacity-95"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-6xl text-white">
            <div className="mb-8 text-[16px] font-bold uppercase tracking-[0.24em] text-white">
              NEW PAINTINGS - THRESHOLD SERIES
            </div>

            <div className="text-[44px] leading-none md:text-[72px] font-bold uppercase tracking-[0.02em]">
              GARETH PITT-HART
            </div>

            <div className="mt-7 text-[15px] font-semibold uppercase tracking-[0.16em] text-white">
              JUNE 2026 · SAINT LOUIS
            </div>

            <div className="mt-10">
              <Link
                href="/new-work"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-white hover:opacity-70 transition-opacity"
              >
                VIEW WORK →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        {/* SERIES */}
        <section>
          <div className="text-center">
            <div className="text-[12px] uppercase tracking-[0.18em] text-stone-500 leading-none">
              SERIES
            </div>

            <div className="mt-2 text-[13px] text-stone-600 leading-snug">
              Earlier bodies of work formed through repetition, pressure, and revision.
            </div>
          </div>

          <div className="mt-4 border-t border-stone-200" />

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-center">
                {/* TOTEM */}
                <Link href="/work/totem" className="group block">
                  <div className="relative h-[140px] md:h-[180px] bg-stone-200 overflow-hidden rounded-lg border border-stone-200">
                    <Image
                      src="/totem-thumb.jpg"
                      alt="Totem"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 text-lg md:text-xl text-stone-900 group-hover:opacity-70 transition-opacity">
                    Totem
                  </div>
                </Link>

                {/* TRANSMISSION */}
                <Link href="/work/transmission" className="group block">
                  <div className="relative h-[140px] md:h-[180px] bg-stone-200 overflow-hidden rounded-lg border border-stone-200">
                    <Image
                      src="/transmission-thumb.jpg"
                      alt="Transmission"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3 text-lg md:text-xl text-stone-900 group-hover:opacity-70 transition-opacity">
                    Transmission
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
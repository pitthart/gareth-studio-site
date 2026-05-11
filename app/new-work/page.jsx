import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "New Work | Gareth Pitt-Hart",
  description:
    "New large-scale black and white paintings by Gareth Pitt-Hart.",
};

export default function NewWorkPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-20 pb-32 md:px-10">
      <section className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="mb-20 text-center">
          <div className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            NEW WORK
          </div>

          <div className="text-[15px] font-semibold uppercase tracking-[0.16em] text-stone-600">
            MAY 2026 · SAINT LOUIS
          </div>
        </header>

        {/* FULL WORK */}
        <section>
          <div className="relative aspect-square overflow-hidden bg-stone-200">
            <Image
              src="/new-work-09.png"
              alt="New work by Gareth Pitt-Hart"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="inline-block border border-stone-300 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              Artwork Inquiry
            </Link>
          </div>
        </section>

        {/* DETAILS */}
        <section className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-stone-200">
            <Image
              src="/new-work-09-detail-1.png"
              alt="Detail from painting"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-square overflow-hidden bg-stone-200">
            <Image
              src="/new-work-09-detail-2.png"
              alt="Detail from painting"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
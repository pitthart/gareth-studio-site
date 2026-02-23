import Image from "next/image";
import Link from "next/link";


export default function StudioPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
        <header className="mb-12">
          <h1 className="text-[26px] md:text-[30px] font-normal mb-4">
            Studio
          </h1>
          <p className="text-[13px] md:text-sm text-stone-600 max-w-2xl leading-relaxed">
            Process. Notemaking.
          </p>
        </header>

        {/* IMAGES (process only) */}
        <section className="grid gap-10 md:grid-cols-3">
          <figure className="space-y-3">
            <div className="relative h-[340px] bg-stone-200 overflow-hidden rounded-[1px]">
              <Image
                src="/study-03.jpg"
                alt="Studio notes"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-[11px] text-stone-600">Notes</figcaption>
          </figure>

          <figure className="space-y-3">
            <div className="relative h-[340px] bg-stone-200 overflow-hidden rounded-[1px]">
              <Image
                src="/inspiration.jpg"
                alt="Studio fragment"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-[11px] text-stone-600">Inspiration</figcaption>
          </figure>

          <figure className="space-y-3">
            <div className="relative h-[340px] bg-stone-200 overflow-hidden rounded-[1px]">
              <Image
                src="/studiochaos.jpg"
                alt="Studio surface"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-[11px] text-stone-600">Surface</figcaption>
          </figure>
        </section>

        {/* STUDIES LINK (quiet) */}
        <section className="mt-14">
          <div className="text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-2">
            Studies
          </div>

          <Link
            href="/studio/studies"
            className="text-[13px] md:text-sm text-stone-700 hover:text-stone-900 transition-colors"
          >
            View ongoing studies and material tests →
          </Link>
        </section>
      </div>
    </main>
  );
}

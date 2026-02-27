import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
      

        <header className="max-w-3xl mb-8">
          <h1 className="text-[26px] md:text-[24px] font-medium mb-1 leading-tight text-stone-900">
            About
          </h1>
        </header>

        <section className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
          {/* Image (optional, quiet) */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-md bg-stone-200 border border-stone-200">
            <Image
              src="/studio.jpg"
              alt="Studio"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-sm md:text-base text-stone-700 leading-relaxed">
            <p>
              Gareth Pitt-Hart is a painter working primarily in oil and acrylic, developing large-scale bodies of work defined by pressure, structure, and restraint.

His work is built through repetition, pressure, and revision—where vertical forms emerge from accumulation rather than design. Surfaces carry the record of force: abrasion, concealment, interruption.

Working across canvas, cardboard, and paper, Pitt-Hart develops bodies of work that test structure against collapse. Each painting holds tension between control and surrender, monument and erosion.

He lives and works in Saint Louis.
            </p>

            <p>
              Current series: Totem and Transmission.
            </p>

            <p className="text-stone-600">
              For inquiries, use the contact page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

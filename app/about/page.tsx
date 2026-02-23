import Image from "next/image";
import Link from "next/link";

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
              Gareth Pitt-Hart is an artist working primarily in painting and mixed media.
His work explores structure, repetition, and symbolic systems—often built through serial processes and physical revision.

Recent bodies of work investigate vertical form, transmission, and the residue of decision-making across surfaces. Materials include cardboard, paper, acrylic, oil, and chalk pastel.

Gareth lives and works in the United States.
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

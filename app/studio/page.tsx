import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Studio | Gareth Pitt-Hart",
  description:
    "Studio process, notes, studies, and material tests from abstract painter Gareth Pitt-Hart, including surfaces, fragments, and works in progress.",
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    title: "Studio | Gareth Pitt-Hart",
    description:
      "Studio process, notes, studies, and material tests from abstract painter Gareth Pitt-Hart.",
    url: "https://garethpitthart.com/studio",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/studiochaos.jpg",
        width: 1200,
        height: 800,
        alt: "Studio surface and process materials from Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Gareth Pitt-Hart",
    description:
      "Studio process, notes, studies, and material tests from abstract painter Gareth Pitt-Hart.",
    images: ["/studiochaos.jpg"],
  },
};

export default function StudioPage() {
  return (
    <div className="px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-0 pt-10 pb-24 md:px-10">
        <header className="mb-12">
          <h1 className="mb-4 text-[26px] font-normal text-stone-900 md:text-[30px]">
            Studio
          </h1>

          <p className="max-w-2xl text-[13px] leading-relaxed text-stone-600 md:text-sm">
            Process, notes, fragments, and material tests from the studio.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          <figure className="space-y-3">
            <div className="relative h-[340px] overflow-hidden rounded-[1px] bg-stone-200">
              <Image
                src="/study-03.jpg"
                alt="Studio notes and process materials by Gareth Pitt-Hart"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <figcaption className="text-[11px] text-stone-600">
              Notes
            </figcaption>
          </figure>

          <figure className="space-y-3">
            <div className="relative h-[340px] overflow-hidden rounded-[1px] bg-stone-200">
              <Image
                src="/inspiration.jpg"
                alt="Studio fragment and visual reference from Gareth Pitt-Hart"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <figcaption className="text-[11px] text-stone-600">
              Inspiration
            </figcaption>
          </figure>

          <figure className="space-y-3">
            <div className="relative h-[340px] overflow-hidden rounded-[1px] bg-stone-200">
              <Image
                src="/studiochaos.jpg"
                alt="Studio surface, tools, and material traces from Gareth Pitt-Hart"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <figcaption className="text-[11px] text-stone-600">
              Surface
            </figcaption>
          </figure>
        </div>

        <div className="mt-14">
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-stone-600">
            Studies
          </div>

          <Link
            href="/studio/studies"
            className="text-[13px] text-stone-700 transition-colors hover:text-stone-900 md:text-sm"
          >
            View ongoing studies and material tests →
          </Link>
        </div>
      </div>
    </div>
  );
}
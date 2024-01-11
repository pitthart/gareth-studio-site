import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Gareth Pitt-Hart",
  description:
    "Gareth Pitt-Hart is an abstract painter based in St. Louis, Missouri, working across canvas, cardboard, and paper to explore pressure, trace, erosion, restraint, and vertical form.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Gareth Pitt-Hart",
    description:
      "Abstract painter based in St. Louis, Missouri, working across canvas, cardboard, and paper to explore pressure, trace, erosion, and restraint.",
    url: "https://garethpitthart.com/about",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/studio.jpg",
        width: 1200,
        height: 800,
        alt: "Studio of abstract painter Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Gareth Pitt-Hart",
    description:
      "Abstract painter based in St. Louis, Missouri, working across canvas, cardboard, and paper.",
    images: ["/studio.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-0 pt-10 pb-24 md:px-10">
        <header className="mb-8 max-w-3xl">
          <h1 className="mb-1 text-[26px] font-medium leading-tight text-stone-900 md:text-[24px]">
            About
          </h1>
        </header>

        <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="relative h-64 overflow-hidden rounded-md border border-stone-200 bg-stone-200 md:h-80">
            <Image
              src="/studio.jpg"
              alt="Studio of abstract painter Gareth Pitt-Hart"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-stone-700 md:text-base">
            <p>
              Gareth Pitt-Hart is an abstract painter based in St. Louis,
              Missouri. He works across canvas, cardboard, and paper using oil,
              acrylic, pastel, graphite, gesso, and ink to build surfaces where
              pressure, trace, and erosion remain visible.
            </p>

            <p>
              The paintings develop through repetition and restraint. Forms are
              not designed so much as found through accumulation: marks pressed,
              covered, scraped, interrupted, and returned to. A vertical
              structure often appears — part figure, part ruin, part witness.
            </p>

            <p>
              Across current bodies of work, Pitt-Hart tests structure against
              collapse. Surfaces buckle, stain, veil, and shift as materials
              respond over time. The work holds tension between control and
              surrender, monument and erosion, presence and disappearance.
            </p>

            <p>
              Current series include <em>Totem</em> and <em>Transmission</em>.
              His recent large-scale black and white paintings extend this
              language into more severe fields of light, pressure, and abrasion.
            </p>

            <p className="text-stone-600">
              Pitt-Hart lives and works in St. Louis, Missouri.
            </p>

            <p className="text-stone-600">
              For inquiries, please use the{" "}
              <Link href="/contact" className="underline hover:text-stone-900">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
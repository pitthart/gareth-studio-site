import Image from "next/image";
import NewWorkInquiry from "@/components/NewWorkInquiry";

export const metadata = {
  title: "New Work | Large-Scale Abstract Paintings",
  description:
    "Recent large-scale black and white abstract paintings by Gareth Pitt-Hart exploring pressure, trace, erosion, restraint, and vertical form.",
  alternates: {
    canonical: "/new-work",
  },
  openGraph: {
    title: "New Work | Gareth Pitt-Hart",
    description:
      "Recent large-scale black and white abstract paintings exploring pressure, trace, erosion, restraint, and vertical form.",
    url: "https://garethpitthart.com/new-work",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/new-work-09.png",
        width: 1200,
        height: 1200,
        alt: "Untitled 09, a large-scale black and white abstract painting by Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Work | Gareth Pitt-Hart",
    description:
      "Recent large-scale black and white abstract paintings exploring pressure, trace, erosion, restraint, and vertical form.",
    images: ["/new-work-09.png"],
  },
};

const works = [
  {
    slug: "untitled-09",
    number: "09",
    title: "Untitled 09",
    year: "2026",
    medium: "Oil, acrylic, graphite, and gesso on canvas",
    dimensions: "60 × 60 in",
    image: "/new-work-09.png",
    imageAlt:
      "Untitled 09, a large-scale black and white abstract painting by Gareth Pitt-Hart",
    details: [
      {
        src: "/new-work-09-detail-1.png",
        alt: "Surface detail from Untitled 09 by Gareth Pitt-Hart",
      },
      {
        src: "/new-work-09-detail-2.png",
        alt: "Close detail showing layered marks and surface texture in Untitled 09 by Gareth Pitt-Hart",
      },
    ],
  },
];

export default function NewWorkPage() {
  return (
    <div className="px-6 pt-20 pb-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <h1 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            New Work
          </h1>

          <p className="mx-auto max-w-2xl text-[15px] leading-7 text-stone-600">
            Recent large-scale black and white paintings exploring pressure,
            trace, erosion, restraint, and vertical form.
          </p>
        </header>

        <div className="space-y-36">
          {works.map((work) => (
            <article key={work.slug} id={work.slug} className="scroll-mt-24">
              <div className="relative aspect-square overflow-hidden bg-stone-200">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  priority={work.number === "09"}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>

              <div
                className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
                aria-label={`${work.title} painting details`}
              >
                {work.details.map((detail) => (
                  <div
                    key={detail.src}
                    className="relative aspect-square overflow-hidden bg-stone-200"
                  >
                    <Image
                      src={detail.src}
                      alt={detail.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <NewWorkInquiry work={work} />
            </article>
          ))}
        </div>

        {works.length > 1 && (
          <div className="mt-28 border-t border-stone-200 pt-8">
            <div className="mb-6 text-[10px] uppercase tracking-[0.22em] text-stone-500">
              Works
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {works.map((work) => (
                <a
                  key={work.slug}
                  href={`#${work.slug}`}
                  className="group border-t border-stone-200 pt-4 transition-colors hover:border-stone-500"
                >
                  <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    {work.number}
                  </div>

                  <div className="text-[13px] text-stone-900 group-hover:text-stone-600">
                    {work.title}
                  </div>

                  <div className="mt-1 text-[11px] leading-relaxed text-stone-500">
                    {work.year} · {work.dimensions}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
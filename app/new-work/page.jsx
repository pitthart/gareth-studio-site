import Image from "next/image";
import Link from "next/link";
import { thresholdWorks } from "@/lib/thresholdWorks";

export const metadata = {
  title: "Threshold Series | Gareth Pitt-Hart",
  description:
    "Threshold is a series of recent large-scale abstract paintings by Gareth Pitt-Hart exploring pressure, trace, erosion, restraint, and vertical form.",
  alternates: {
    canonical: "/new-work",
  },
  openGraph: {
    title: "Threshold Series | Gareth Pitt-Hart",
    description:
      "Recent large-scale abstract paintings exploring pressure, trace, erosion, restraint, and vertical form.",
    url: "https://garethpitthart.com/new-work",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: thresholdWorks[0].image,
        width: 1200,
        height: 1200,
        alt: "Threshold series painting by Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Threshold Series | Gareth Pitt-Hart",
    description:
      "Recent large-scale abstract paintings exploring pressure, trace, erosion, restraint, and vertical form.",
    images: [thresholdWorks[0].image],
  },
};

export default function NewWorkPage() {
  return (
    <div className="px-6 pt-20 pb-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <h1 className="mb-5 text-[24px] font-semibold uppercase tracking-[0.12em] text-stone-500">
            Threshold Series
          </h1>

          <p className="mx-auto max-w-2xl text-[15px] leading-7 text-stone-600">
            Recent large-scale paintings exploring pressure, trace, erosion,
            restraint, and vertical form.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {thresholdWorks.map((work, index) => (
            <Link
              key={work.slug}
              href={`/new-work/${work.slug}`}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-200">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>

              <div className="mt-5 border-t border-stone-200 pt-4">
                <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  Threshold {work.number}
                </div>

                <div className="text-[13px] text-stone-900 group-hover:text-stone-600">
                  {work.title}
                </div>

                <div className="mt-1 text-[11px] leading-relaxed text-stone-500">
                  {work.year} · {work.dimensions}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
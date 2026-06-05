import Image from "next/image";
import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";

export const metadata = {
  title: "Circles | Works on Newsprint",
  description:
    "The Circles series by Gareth Pitt-Hart gathers abstract works on aged newsprint exploring repetition, orbit, mark, pressure, color, and time.",
  alternates: {
    canonical: "/work/circles",
  },
  openGraph: {
    title: "Circles | Gareth Pitt-Hart",
    description:
      "Abstract works on aged newsprint exploring repetition, orbit, mark, pressure, color, and time.",
    url: "https://garethpitthart.com/work/circles",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/art/circles/circle-01.png",
        width: 1200,
        height: 1500,
        alt: "Circle 01 from the Circles series by Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circles | Gareth Pitt-Hart",
    description:
      "Abstract works on aged newsprint exploring repetition, orbit, mark, pressure, color, and time.",
    images: ["/art/circles/circle-01.png"],
  },
};

const getCircleNumber = (piece) => {
  const match = piece.slug?.match(/circle-(\d+)/);
  return match ? Number(match[1]) : 999;
};

const circles = getArtworksBySeries("circles").sort(
  (a, b) => getCircleNumber(a) - getCircleNumber(b)
);

export default function CirclesPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] px-6 pt-14 pb-28">
      <div className="mx-auto max-w-6xl px-0 pb-24 md:px-10">
        <div className="mb-8 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-700">
            Series
          </Link>
          <span className="mx-2">/</span>
          <span>Circles</span>
        </div>

        <header className="mb-16 border-b border-stone-200 pb-12">
          <div className="mb-4 text-[10px] uppercase tracking-[0.22em] text-stone-500">
            Works on Newsprint
          </div>

          <h1 className="mb-10 text-[46px] font-normal leading-none tracking-tight text-stone-900 md:text-[72px]">
            Circles
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-stone-600 md:text-base">
            A series of 18 × 24 inch works on aged newsprint. Circular forms,
            pressure marks, stains, and blocks of color sit against the fragile
            surface of the paper, holding time as part of the image.
          </p>
        </header>

        {circles.length === 0 ? (
          <div className="text-sm text-stone-600">
            No works in this series yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 xl:grid-cols-4">
            {circles.map((piece, index) => {
              const img = piece.imageDetail ?? piece.imageFull ?? piece.image;
              if (!img) return null;

              return (
                <Link
                  key={piece.slug}
                  href={`/artwork/${piece.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-transparent">
                    <Image
                      src={img}
                      alt={`${piece.title} from the Circles series by Gareth Pitt-Hart`}
                      fill
                      priority={index < 4}
                      sizes="(max-width: 768px) 50vw,
                             (max-width: 1280px) 33vw,
                             25vw"
                      className="object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>

                  <div className="mt-4 border-t border-stone-200 pt-3">
                    <div className="text-[12px] text-stone-900">
                      {piece.title}
                    </div>

                    <div className="mt-1 text-[10px] leading-relaxed text-stone-500">
                      {piece.year ?? "2015"} ·{" "}
                      {piece.medium ?? "Mixed media on aged newsprint"} ·{" "}
                      {piece.size ?? "18 × 24 in"}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
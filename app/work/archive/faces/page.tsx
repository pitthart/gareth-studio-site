import Image from "next/image";
import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";

export const metadata = {
  title: "Faces Archive | Gareth Pitt-Hart",
  description:
    "Faces is an archive of earlier portrait-based works by Gareth Pitt-Hart on canvas and paper.",
  alternates: {
    canonical: "/work/archive/faces",
  },
  openGraph: {
    title: "Faces Archive | Gareth Pitt-Hart",
    description:
      "Earlier portrait-based works by Gareth Pitt-Hart on canvas and paper.",
    url: "https://garethpitthart.com/work/archive/faces",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/art/faces/cover.jpg",
        width: 1200,
        height: 1200,
        alt: "Faces archive by Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faces Archive | Gareth Pitt-Hart",
    description:
      "Earlier portrait-based works by Gareth Pitt-Hart on canvas and paper.",
    images: ["/art/faces/cover.jpg"],
  },
};

const faces = getArtworksBySeries("faces");

export default function FacesArchivePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 md:px-10">
      <div className="mb-8 text-xs text-stone-500">
        <Link href="/work" className="hover:text-stone-700">
          Series
        </Link>

        <span className="mx-2">/</span>

        <Link href="/work/archive" className="hover:text-stone-700">
          Other Work
        </Link>

        <span className="mx-2">/</span>

        <span>Faces</span>
      </div>

      <header className="mb-10 max-w-2xl">
        <h1 className="mb-2 text-3xl font-normal tracking-tight text-stone-900 md:text-4xl">
          Faces
        </h1>

        <p className="text-sm leading-relaxed text-stone-600">
          Earlier portrait-based works on canvas and paper.
        </p>
      </header>

      {faces.length === 0 ? (
        <p className="text-sm text-stone-600">No works in this archive yet.</p>
      ) : (
        <div
          aria-label="Faces archive works"
          className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {faces.map((piece) => {
            const img = piece.imageDetail ?? piece.imageFull;
            if (!img) return null;

            return (
              <Link
                key={piece.slug}
                href={`/artwork/${piece.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-stone-200 bg-transparent">
                  <Image
                    src={img}
                    alt={`${piece.title} by Gareth Pitt-Hart`}
                    fill
                    sizes="(max-width: 768px) 50vw,
                           (max-width: 1024px) 33vw,
                           (max-width: 1280px) 25vw,
                           16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-1 text-[11px] leading-tight text-stone-500">
                  {piece.title}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
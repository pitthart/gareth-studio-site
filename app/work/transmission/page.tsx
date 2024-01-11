import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";
import ArtworkCard from "@/components/ArtworkCard";

export const metadata = {
  title: "Transmission Series | Abstract Paintings on Cardboard and Canvas",
  description:
    "The Transmission series by Gareth Pitt-Hart gathers abstract mixed media paintings on cardboard, canvas, and paper exploring signal, drift, interruption, trace, pressure, erosion, and restraint.",
  alternates: {
    canonical: "/work/transmission",
  },
  openGraph: {
    title: "Transmission Series | Gareth Pitt-Hart",
    description:
      "Abstract mixed media paintings exploring signal, drift, interruption, trace, pressure, erosion, and restraint.",
    url: "https://garethpitthart.com/work/transmission",
    siteName: "Gareth Pitt-Hart",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Transmission Series | Gareth Pitt-Hart",
    description:
      "Abstract mixed media paintings exploring signal, drift, interruption, trace, pressure, erosion, and restraint.",
  },
};

const transmission = getArtworksBySeries("transmission");

export default function TransmissionPage() {
  const firstSix = transmission.slice(0, 6);
  const rest = transmission.slice(6);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
      <div className="mb-10 text-sm text-stone-500">
        <Link href="/work" className="hover:text-stone-900">
          Series
        </Link>
        <span className="mx-2">/</span>
        <span>Transmission</span>
      </div>

      <header className="mb-10 max-w-3xl">
        <h1 className="mb-2 text-3xl font-normal leading-[1.05] tracking-tight md:text-4xl">
          Transmission
        </h1>

        <p className="max-w-2xl text-lg leading-[1.25] text-stone-600 md:text-xl">
          Signal, drift, and interruption. Panels that carry marks like syntax —
          repeated, corrected, and relayed across seams and surfaces.
        </p>
      </header>

      <div aria-label="Transmission works">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {firstSix.map((piece) => (
            <ArtworkCard key={piece.slug} piece={piece} />
          ))}
        </div>
      </div>

      {rest.length > 0 && (
        <div className="mt-14 border-t border-stone-200 pt-8">
          <details>
            <summary className="cursor-pointer text-[11px] uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900">
              View full series
            </summary>

            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {rest.map((piece) => (
                <ArtworkCard key={piece.slug} piece={piece} />
              ))}
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
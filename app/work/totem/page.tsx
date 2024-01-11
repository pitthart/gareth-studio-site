import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";
import ArtworkCard from "@/components/ArtworkCard";

export const metadata = {
  title: "Totem Series | Mixed Media Abstract Paintings",
  description:
    "The Totem series by Gareth Pitt-Hart gathers mixed media abstract paintings built through vertical structure, rhythm, repetition, pressure, trace, and restraint.",
  alternates: {
    canonical: "/work/totem",
  },
  openGraph: {
    title: "Totem Series | Gareth Pitt-Hart",
    description:
      "Mixed media abstract paintings built through vertical structure, rhythm, repetition, pressure, trace, and restraint.",
    url: "https://garethpitthart.com/work/totem",
    siteName: "Gareth Pitt-Hart",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Totem Series | Gareth Pitt-Hart",
    description:
      "Mixed media abstract paintings built through vertical structure, rhythm, repetition, pressure, trace, and restraint.",
  },
};

const totems = getArtworksBySeries("totem");

export default function TotemPage() {
  const firstSix = totems.slice(0, 6);
  const rest = totems.slice(6);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
      <div className="mb-10 text-sm text-stone-500">
        <Link href="/work" className="hover:text-stone-900">
          Series
        </Link>
        <span className="mx-2">/</span>
        <span>Totem</span>
      </div>

      <header className="mb-10 max-w-3xl">
        <h1 className="mb-2 text-3xl font-medium leading-[1.05] tracking-tight md:text-4xl">
          Totem
        </h1>

        <p className="max-w-2xl text-lg leading-[1.25] text-stone-600 md:text-xl">
          Vertical structures built through rhythm, repetition, pressure, trace,
          and stacked symbols.
        </p>
      </header>

      <div aria-label="Totem works">
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
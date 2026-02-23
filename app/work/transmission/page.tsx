import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";
import ArtworkCard from "@/components/ArtworkCard";

const transmission = getArtworksBySeries("transmission");

export default function TransmissionPage() {
  const firstSix = transmission.slice(0, 6);
  const rest = transmission.slice(6);

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
        <div className="mb-10 text-sm text-stone-500">
          <Link href="/work" className="hover:text-stone-900">
            Series
          </Link>
          <span className="mx-2">/</span>
          <span>Transmission</span>
        </div>

        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight leading-[1.05] mb-2">
            Transmission
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-[1.25] max-w-2xl">
            Signal, drift, and interruption. Panels that carry marks like syntax — repeated,
            corrected, and relayed across seams and surfaces.
          </p>
        </header>

        <section aria-label="Transmission works">
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {firstSix.map((piece) => (
              <ArtworkCard key={piece.slug} piece={piece} actionLabel="Inquire" />
            ))}
          </div>
        </section>

        {rest.length > 0 && (
          <section className="mt-14 border-t border-stone-200 pt-8">
            <details>
              <summary className="cursor-pointer text-[11px] uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900">
                View full series
              </summary>
              <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-3">
                {rest.map((piece) => (
                  <ArtworkCard key={piece.slug} piece={piece} actionLabel="Inquire" />
                ))}
              </div>
            </details>
          </section>
        )}
      </div>
    </main>
  );
}

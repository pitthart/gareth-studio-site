// app/artwork/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtworkBySlug, getArtworksBySeries, artworks } from "@/lib/artworks";
import InquiryButton from "@/components/InquiryButton";
import ArtworkImageWithLightbox from "@/components/ArtworkImageWithLightbox";

interface ArtworkPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return artworks.map((art) => ({ slug: art.slug }));
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const piece = getArtworkBySlug(params.slug);
  if (!piece) return notFound();

  const seriesWorks = getArtworksBySeries(piece.series);
  const currentIndex = seriesWorks.findIndex((a) => a.slug === piece.slug);

  const prev = currentIndex > 0 ? seriesWorks[currentIndex - 1] : null;
  const next = currentIndex < seriesWorks.length - 1 ? seriesWorks[currentIndex + 1] : null;

  // Prefer full image, but never crash if it's missing.
  const fullSrc = (piece as any).imageFull ?? (piece as any).image;

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-14">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-700" scroll={false}>
            Series
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/work/${piece.series}`}
            className="hover:text-stone-700 capitalize"
            scroll={false}
          >
            {piece.series}
          </Link>
          <span className="mx-2">/</span>
          <span>{piece.title}</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
          {/* Image */}
          <div className="relative">
            <div className="rounded-[10px] bg-stone-200/60 p-4 md:p-5 ring-1 ring-stone-200">
              <ArtworkImageWithLightbox src={fullSrc} alt={piece.title} />
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-2">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight leading-[1.05] mb-4">
              {piece.title}
            </h1>

            <div className="space-y-0.5 text-[13px] text-stone-700 leading-snug pl-3 mb-3">
              {piece.year && <p>{piece.year}</p>}
              {piece.medium && <p>{piece.medium}</p>}
              {piece.size && <p>{piece.size}</p>}
            </div>

            {piece.note && (
              <p className="text-[13px] text-stone-600 leading-relaxed pl-3 mb-8">
                {piece.note}
              </p>
            )}

            {/* Inquiry */}
            <div className="mb-5 text-right">
              <InquiryButton
                artworkTitle={piece.title}
                artworkSlug={piece.slug}
                series={piece.series}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between text-[11px] text-stone-500 border-t border-stone-200 pt-3">
              {prev ? (
                <Link
                  href={`/artwork/${prev.slug}`}
                  scroll={false}
                  className="hover:text-stone-800"
                >
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}

              {next ? (
                <Link
                  href={`/artwork/${next.slug}`}
                  scroll={false}
                  className="hover:text-stone-800 ml-auto"
                >
                  {next.title} →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

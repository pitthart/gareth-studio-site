// app/studio/studies/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";

const studies = getArtworksBySeries("studies");

export default function StudiesPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-24 md:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-stone-500">
          <Link href="/studio" className="hover:text-stone-700" scroll={false}>
            Studio
          </Link>
          <span className="mx-2">/</span>
          <span>Studies</span>
        </div>

        {/* Header */}
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight leading-[1.05] mb-2 text-stone-900">
            Studies
          </h1>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-2xl">
            Smaller works and material tests.
          </p>
        </header>

        {studies.length === 0 ? (
          <div className="text-sm text-stone-600">No studies yet.</div>
        ) : (
          <section aria-label="Studies works">
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
              {studies.map((piece) => (
                <article key={piece.slug} className="group">
                  <Link
                    href={`/artwork/${piece.slug}`}
                    scroll={false}
                    className="block"
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[6px] bg-stone-200">
                      <Image
                        src={piece.imageDetail}
                        alt={piece.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-3">
                      <div className="text-[13px] text-stone-900 leading-tight group-hover:opacity-70 transition-opacity">
                        {piece.title}
                      </div>
                      <div className="mt-1 text-[11px] text-stone-500 leading-tight">
                        {piece.medium ? piece.medium : null}
                        {piece.size ? (
                          <>
                            {piece.medium ? <span> · </span> : null}
                            {piece.size}
                          </>
                        ) : null}
                        {piece.year ? <span> · {piece.year}</span> : null}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
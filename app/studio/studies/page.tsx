import Image from "next/image";
import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";

const studies = getArtworksBySeries("studies");

export default function StudiesPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-stone-500">
          <Link href="/studio" className="hover:text-stone-700">
            Studio
          </Link>
          <span className="mx-2">/</span>
          <span>Studies</span>
        </div>

        {/* Header */}
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-2">
            Studies
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Process. Notes. Fragments. In progress.
          </p>
        </header>

        {/* Drawer Grid */}
        {studies.length === 0 ? (
          <p className="text-sm text-stone-600">No studies yet.</p>
        ) : (
          <section
            aria-label="Studies"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-8"
          >
            {studies.map((piece) => (
              <Link key={piece.slug} href={`/artwork/${piece.slug}`} className="group">
                <div className="relative w-full aspect-[3/4] bg-stone-200 overflow-hidden rounded-md border border-stone-200">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="object-contain"
                  />
                </div>

                {/* optional minimal label */}
                <div className="mt-2 text-[11px] text-stone-600 leading-tight">
                  {piece.title}
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

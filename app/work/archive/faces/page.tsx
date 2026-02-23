import Image from "next/image";
import Link from "next/link";
import { getArtworksBySeries } from "@/lib/artworks";

const faces = getArtworksBySeries("faces");

export default function FacesArchivePage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-700">
            Work
          </Link>
          <span className="mx-2">/</span>
          <Link href="/work/archive" className="hover:text-stone-700">
            Archive
          </Link>
          <span className="mx-2">/</span>
          <span>Faces</span>
        </div>

        {/* Header */}
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-2">
            Faces
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Earlier work. Record.
          </p>
        </header>

        {faces.length === 0 ? (
          <p className="text-sm text-stone-600">No works in this archive yet.</p>
        ) : (
          <section
            aria-label="Faces archive works"
            className="grid gap-x-4 gap-y-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            }}
          >
            {faces.map((piece) => {
              const img = piece.imageDetail ?? piece.imageFull;

              return (
                <Link key={piece.slug} href={`/artwork/${piece.slug}`} className="group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden border border-stone-200 bg-transparent">
                    <Image
                      src={img}
                      alt={piece.title}
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-1 text-[11px] text-stone-500 leading-tight">
                    {piece.title}
                  </div>
                </Link>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}

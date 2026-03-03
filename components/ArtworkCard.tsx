// components/ArtworkCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/lib/artworks";

export default function ArtworkCard({
  piece,
}: {
  piece: Artwork;
}) {
  return (
    <article className="group">
      <Link href={`/artwork/${piece.slug}`} className="block">
        <div className="overflow-hidden rounded-[6px] bg-stone-200">
          <div className="relative h-[240px] w-full md:h-[260px]">
            <Image
              src={piece.imageDetail}
              alt={piece.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-sm text-stone-900 leading-tight">
            {piece.title}
          </div>

          <div className="mt-2 text-[11px] text-stone-600 leading-relaxed">
            {piece.medium ? <div>{piece.medium}</div> : null}
            <div>
              {piece.size ? piece.size : null}
              {piece.year ? ` · ${piece.year}` : ""}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
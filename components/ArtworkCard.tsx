// components/ArtworkCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/lib/artworks";

export default function ArtworkCard({
  piece,
  actionLabel = "Inquire",
}: {
  piece: Artwork;
  actionLabel?: string;
}) {
  return (
    <article className="group">
      <Link href={`/artwork/${piece.slug}`} className="block">
        <div className="overflow-hidden rounded-[6px] bg-stone-200">
          <div className="relative h-[240px] w-full md:h-[260px]">
            <Image
              src={piece.imageDetail} // ✅ series/grid image (close-up)
              alt={piece.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-sm text-stone-900 leading-tight">{piece.title}</div>

          <div className="mt-2 text-[11px] text-stone-600 leading-relaxed">
            {piece.medium ? <div>{piece.medium}</div> : null}
            <div>
              {piece.size ? piece.size : null}
              {piece.year ? ` · ${piece.year}` : ""}
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 group-hover:text-stone-900">
              {actionLabel}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

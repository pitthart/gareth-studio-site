"use client";

import { useState } from "react";
import Image from "next/image";
import ArtworkLightbox from "@/components/ArtworkLightbox";

type Props = {
  src: string;
  alt: string;
};

export default function ArtworkImageWithLightbox({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full text-left"
        aria-label="Open artwork"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={2400}
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="mx-auto h-auto w-auto max-h-[52vh] object-contain rounded-[6px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        />
      </button>

      <ArtworkLightbox
        isOpen={open}
        src={src}
        alt={alt}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect } from "react";

type ArtworkLightboxProps = {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ArtworkLightbox({
  isOpen,
  src,
  alt,
  onClose,
}: ArtworkLightboxProps) {
  // ESC to close + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label="Artwork preview"
      onMouseDown={(e) => {
        // click backdrop closes (but not clicks on the image)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button bottom-right */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed bottom-5 right-5 z-[70] inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white text-sm leading-none ring-1 ring-white/15 hover:ring-white/30"
      >
        ×
      </button>

      {/* Centered image */}
      <div className="flex h-full w-full items-center justify-center px-4 py-6">
        <div className="relative max-h-[92vh] w-full max-w-[1100px]">
          <Image
            src={src}
            alt={alt}
            width={2200}
            height={2200}
            priority
            className="h-auto max-h-[92vh] w-full object-contain rounded-[6px]"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>
      </div>
    </div>
  );
}

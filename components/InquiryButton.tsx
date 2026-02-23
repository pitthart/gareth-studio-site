// components/InquiryButton.tsx
"use client";

import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";

type Props = {
  artworkTitle: string;
  artworkSlug: string;
  series: string;
};

export default function InquiryButton({ artworkTitle, artworkSlug, series }: Props) {
  const [open, setOpen] = useState(false);

  // window.location.href is client-only; pass empty during SSR
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[11px] uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900"
      >
        Inquire
      </button>

      <InquiryModal
        open={open}
        onClose={() => setOpen(false)}
        artworkTitle={artworkTitle}
        artworkSlug={artworkSlug}
        series={series}
        pageUrl={pageUrl}
      />
    </>
  );
}

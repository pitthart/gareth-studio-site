// components/InquiryModal.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  artworkTitle: string;
  artworkSlug: string;
  series: string;
  pageUrl: string; // pass window.location.href from caller
};

export default function InquiryModal({
  open,
  onClose,
  artworkTitle,
  artworkSlug,
  series,
  pageUrl,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);
  const iframeName = "netlify-inquiry-target";

  const subject = useMemo(() => `Inquiry: ${artworkTitle}`, [artworkTitle]);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setError(null);

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // When the hidden iframe receives a response, treat it as "sent"
  function onIFrameLoad() {
    if (!sending) return;
    setSending(false);
    setSent(true);

    // clear fields
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
  }

  function onSubmit(_e: React.FormEvent<HTMLFormElement>) {
    // IMPORTANT: do NOT prevent default; we WANT a normal form POST for Netlify
    setSending(true);
    setError(null);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Hidden iframe target to avoid full-page navigation */}
      <iframe
        name={iframeName}
        className="hidden"
        onLoad={onIFrameLoad}
        title="Netlify form target"
      />

      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close inquiry modal"
        type="button"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl rounded-lg bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <div className="flex items-start justify-between px-6 pt-6">
          <div className="text-left">
            <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Inquiry
            </div>
            <div className="mt-2 text-lg text-stone-900 leading-tight">
              {artworkTitle}
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700"
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="px-6 pb-6 pt-5">
          {sent ? (
            <div className="text-sm text-stone-700 leading-relaxed">
              Sent. I’ll respond as soon as I can.
            </div>
          ) : (
            <form
              ref={formRef}
              name="artwork-inquiry"
              method="POST"
              // CRITICAL: no action="/" (avoids www/apex or http/https redirects dropping POST body)
              data-netlify="true"
              data-netlify-honeypot="company"
              target={iframeName}
              onSubmit={onSubmit}
              className="space-y-4"
            >
              {/* Required by Netlify */}
              <input type="hidden" name="form-name" value="artwork-inquiry" />

              {/* Honeypot (must exist in HTML) */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Company{" "}
                  <input
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </label>
              </div>

              {/* Context fields (hidden but present) */}
              <input type="hidden" name="artworkTitle" value={artworkTitle} />
              <input type="hidden" name="artworkSlug" value={artworkSlug} />
              <input type="hidden" name="series" value={series} />
              <input type="hidden" name="pageUrl" value={pageUrl} />

              <div>
                <label className="block text-left text-xs text-stone-600 mb-1">
                  Name *
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm outline-none focus:border-stone-400"
                />
              </div>

              <div>
                <label className="block text-left text-xs text-stone-600 mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm outline-none focus:border-stone-400"
                />
              </div>

              <div>
                <label className="block text-left text-xs text-stone-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm outline-none focus:border-stone-400"
                  placeholder="Optional"
                />
              </div>

              {error && <div className="text-xs text-red-600">{error}</div>}

              <div className="flex items-center justify-between pt-2">
                <a
                  className="text-xs text-stone-500 hover:text-stone-800"
                  href={`mailto:studio@garethpitthart.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(
                    `Hello Gareth,\n\nI'm interested in:\n${artworkTitle}\n${series}\n${pageUrl}\n\nMessage:\n`
                  )}`}
                >
                  Prefer email?
                </a>

                <button
                  type="submit"
                  disabled={sending}
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 disabled:opacity-50"
                >
                  {sending ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
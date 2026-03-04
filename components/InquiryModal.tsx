// components/InquiryModal.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

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

  const iframeName = "netlify-inquiry-target";

  const subject = useMemo(() => `Inquiry: ${artworkTitle}`, [artworkTitle]);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setSending(false);

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

  function onSubmit() {
    // IMPORTANT: do NOT prevent default
    setSending(true);
  }

  function onIFrameLoad() {
    // iframe loads after submit; treat as success
    if (!sending) return;
    setSending(false);
    setSent(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Hidden iframe target so we don't navigate away */}
      <iframe
        name={iframeName}
        className="hidden"
        onLoad={onIFrameLoad}
        title="Netlify inquiry form target"
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
              name="artwork-inquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/netlify-forms-success.html"
              target={iframeName}
              onSubmit={onSubmit}
              className="space-y-4"
            >
              {/* Netlify required */}
              <input type="hidden" name="form-name" value="artwork-inquiry" />

              {/* Honeypot required */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Context fields */}
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
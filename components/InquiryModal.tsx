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

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

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

  const subject = useMemo(() => `Inquiry: ${artworkTitle}`, [artworkTitle]);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setError(null);

    // lock background scroll
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const body = encode({
        "form-name": "artwork-inquiry",
        "bot-field": "",

        artworkTitle,
        artworkSlug,
        series,
        pageUrl,

        name,
        email,
        message,
      });

      // IMPORTANT:
      // Posting to "/" can get 301/302 redirected (www <-> apex, http <-> https),
      // which can drop the POST body. Post to the current pathname instead.
      const action =
        typeof window !== "undefined" ? window.location.pathname : "/";

      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      aria-modal="true"
      role="dialog"
    >
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
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="space-y-4"
            >
              {/* Netlify form identifier */}
              <input type="hidden" name="form-name" value="artwork-inquiry" />

              {/* Honeypot (must exist in HTML) */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

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
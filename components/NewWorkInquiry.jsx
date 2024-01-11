"use client";

import { useState } from "react";

export default function NewWorkInquiry({ work }) {
  const [open, setOpen] = useState(false);

  const inquirySubject = `New Work ${work.title}`;

  return (
    <div className="mt-8 border-t border-stone-200 pt-5">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">
            New Work
          </div>

          <h2 className="text-[15px] font-normal text-stone-900">
            {work.title}
          </h2>

          <div className="mt-2 max-w-2xl text-[11px] leading-relaxed text-stone-500 md:text-[12px]">
            {work.year} · {work.medium} · {work.dimensions}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="w-fit border border-stone-300 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
        >
          {open ? "Close Inquiry" : "Artwork Inquiry"}
        </button>
      </div>

      {open && (
        <form
          name="artwork-inquiry"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
          className="mt-8 max-w-xl border-t border-stone-200 pt-6"
        >
          <input type="hidden" name="form-name" value="artwork-inquiry" />

          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <input type="hidden" name="subject" value={inquirySubject} />
          <input type="hidden" name="artworkTitle" value={work.title} />
          <input type="hidden" name="artworkNumber" value={work.number} />
          <input type="hidden" name="artworkSlug" value={work.slug} />
          <input type="hidden" name="series" value="New Work" />
          <input
            type="hidden"
            name="pageUrl"
            value={`https://garethpitthart.com/new-work#${work.slug}`}
          />

          <div className="grid gap-4">
            <div>
              <label
                htmlFor={`${work.slug}-name`}
                className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-stone-500"
              >
                Name
              </label>

              <input
                id={`${work.slug}-name`}
                type="text"
                name="name"
                required
                className="w-full border border-stone-300 bg-transparent px-3 py-2 text-sm text-stone-800 outline-none transition-colors focus:border-stone-600"
              />
            </div>

            <div>
              <label
                htmlFor={`${work.slug}-email`}
                className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-stone-500"
              >
                Email
              </label>

              <input
                id={`${work.slug}-email`}
                type="email"
                name="email"
                required
                className="w-full border border-stone-300 bg-transparent px-3 py-2 text-sm text-stone-800 outline-none transition-colors focus:border-stone-600"
              />
            </div>

            <div>
              <label
                htmlFor={`${work.slug}-message`}
                className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-stone-500"
              >
                Message
              </label>

              <textarea
                id={`${work.slug}-message`}
                name="message"
                rows="5"
                defaultValue={`Hello - I'm inquiring about ${inquirySubject}.`}
                className="w-full resize-none border border-stone-300 bg-transparent px-3 py-2 text-sm text-stone-800 outline-none transition-colors focus:border-stone-600"
              />
            </div>

            <button
              type="submit"
              className="w-fit border border-stone-300 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
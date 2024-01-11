// components/NetlifyInquiryForm.tsx
export default function NetlifyInquiryForm() {
  return (
    <form
      name="artwork-inquiry"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
    >
      {/* Netlify form identifier */}
      <input type="hidden" name="form-name" value="artwork-inquiry" />

      {/* Honeypot */}
      <input
        type="text"
        name="bot-field"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Context fields */}
      <input type="hidden" name="artworkTitle" />
      <input type="hidden" name="artworkSlug" />
      <input type="hidden" name="series" />
      <input type="hidden" name="pageUrl" />

      {/* User fields */}
      <input type="hidden" name="name" />
      <input type="hidden" name="email" />
      <textarea name="message" hidden />
    </form>
  );
}
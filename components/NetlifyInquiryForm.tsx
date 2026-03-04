// components/NetlifyInquiryForm.tsx
export default function NetlifyInquiryForm() {
  return (
    <form
      name="artwork-inquiry"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
    >
      {/* Netlify form identifier */}
      <input type="hidden" name="form-name" value="artwork-inquiry" />

      {/* Honeypot */}
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

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
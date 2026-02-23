// components/NetlifyInquiryForm.tsx
export default function NetlifyInquiryForm() {
  return (
    <form
      name="artwork-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      {/* Netlify requires this hidden input */}
      <input type="hidden" name="form-name" value="artwork-inquiry" />

      {/* Honeypot */}
      <input name="bot-field" />

      {/* Context fields */}
      <input type="text" name="artworkTitle" />
      <input type="text" name="artworkSlug" />
      <input type="text" name="series" />
      <input type="text" name="pageUrl" />

      {/* User fields */}
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form>
  );
}

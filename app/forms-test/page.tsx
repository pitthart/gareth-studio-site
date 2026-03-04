export default function FormsTestPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Forms Test</h1>

      <form name="artwork-inquiry" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="artwork-inquiry" />

        <p>
          <label>
            Name <input name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input name="email" type="email" />
          </label>
        </p>
        <p>
          <label>
            Message <textarea name="message" />
          </label>
        </p>

        <button type="submit">Send test</button>
      </form>
    </main>
  );
}
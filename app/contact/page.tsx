import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
      
        <header className="max-w-2xl">
          <h1 className="text-[26px] md:text-[24px] font-medium mb-1 leading-tight text-stone-900">
            Contact
          </h1>
          <p className="text-xs md:text-sm text-stone-600 leading-tight">
           For general inquiries or availability.
          </p>
        </header>

          <section className="mt-12 max-w-2xl">
          <a
            href="mailto:studio@garethpitthart.com?subject=Artwork%20Inquiry%20—%20Gareth%20Pitt-Hart"
            className="text-sm font-medium text-stone-800 hover:opacity-70 transition-opacity"
          >
            studio@garethpitthart.com
          </a>

          

          <p className="mt-4 text-sm text-stone-600 leading-relaxed">
            If inquiring about a specific work, please include the title in your message.
          </p>
        </section>
      </div>
    </main>
  );
}

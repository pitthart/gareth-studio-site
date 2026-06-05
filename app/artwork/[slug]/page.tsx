import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArtworkBySlug,
  getPublicArtworks,
  seriesMeta,
  type Artwork,
} from "@/lib/artworks";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSeriesHref(piece: Artwork) {
  if (piece.series === "faces") return "/work/archive/faces";
  if (piece.series === "studies") return "/studio/studies";
  return `/work/${piece.series}`;
}

function getSeriesWorks(piece: Artwork) {
  return getPublicArtworks()
    .filter((item) => item.series === piece.series)
    .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

function getAdjacentWorks(piece: Artwork) {
  const works = getSeriesWorks(piece);
  const index = works.findIndex((item) => item.slug === piece.slug);

  return {
    previous: index > 0 ? works[index - 1] : null,
    next: index >= 0 && index < works.length - 1 ? works[index + 1] : null,
  };
}

function getArtworkInquirySubject(piece: Artwork) {
  if (piece.series === "circles") {
    return `Inquiry: ${piece.title}`;
  }

  return `Artwork Inquiry: ${piece.title}`;
}

function getArtworkInquiryMessage(piece: Artwork) {
  if (piece.series === "circles") {
    return `Hello - I'm inquiring about ${piece.title}.`;
  }

  return `Hello - I'm inquiring about ${piece.title}.`;
}

export async function generateStaticParams() {
  return getPublicArtworks().map((piece) => ({
    slug: piece.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const piece = getArtworkBySlug(slug);

  if (!piece) {
    return {
      title: "Artwork | Gareth Pitt-Hart",
    };
  }

  const image = piece.imageFull ?? piece.imageDetail;

  return {
    title: `${piece.title} | Gareth Pitt-Hart`,
    description: `${piece.title}, ${piece.year ?? ""}. ${
      piece.medium ?? "Artwork"
    } by Gareth Pitt-Hart.`,
    alternates: {
      canonical: `/artwork/${piece.slug}`,
    },
    openGraph: {
      title: `${piece.title} | Gareth Pitt-Hart`,
      description: `${piece.title}, ${piece.year ?? ""}. ${
        piece.medium ?? "Artwork"
      } by Gareth Pitt-Hart.`,
      url: `https://garethpitthart.com/artwork/${piece.slug}`,
      siteName: "Gareth Pitt-Hart",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 1500,
          alt: `${piece.title} by Gareth Pitt-Hart`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${piece.title} | Gareth Pitt-Hart`,
      description: `${piece.title}, ${piece.year ?? ""}. ${
        piece.medium ?? "Artwork"
      } by Gareth Pitt-Hart.`,
      images: [image],
    },
  };
}

export default async function ArtworkPage({ params }: PageProps) {
  const { slug } = await params;
  const piece = getArtworkBySlug(slug);

  if (!piece) {
    notFound();
  }

  const image = piece.imageFull ?? piece.imageDetail;
  const series = seriesMeta[piece.series];
  const seriesHref = getSeriesHref(piece);
  const { previous, next } = getAdjacentWorks(piece);
  const isCircles = piece.series === "circles";

  const inquirySubject = getArtworkInquirySubject(piece);
  const inquiryMessage = getArtworkInquiryMessage(piece);

  return (
    <div className="min-h-screen bg-[#f7f6f2] px-6 pt-14 pb-28">
      <div className="mx-auto max-w-6xl px-0 md:px-10">
        <div className="mb-12 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-800">
            Series
          </Link>
          <span className="mx-2">/</span>
          <Link href={seriesHref} className="hover:text-stone-800">
            {series?.title ?? piece.series}
          </Link>
          <span className="mx-2">/</span>
          <span>{piece.title}</span>
        </div>

        <div className="mx-auto mb-20 max-w-2xl">
          <div className="relative aspect-[4/5] overflow-hidden bg-transparent">
            <Image
              src={image}
              alt={`${piece.title} by Gareth Pitt-Hart`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className={`object-contain ${
                isCircles ? "mix-blend-multiply" : ""
              }`}
            />
          </div>
        </div>

        <section className="grid gap-10 border-t border-stone-200 pt-10 md:grid-cols-[1fr,1fr] md:items-start">
          <div>
            <h1 className="text-[38px] font-normal leading-none tracking-tight text-stone-900 md:text-[48px]">
              {piece.title}
            </h1>

            <div className="mt-8 space-y-1 text-sm leading-relaxed text-stone-600">
              {piece.year && <div>{piece.year}</div>}
              {piece.medium && <div>{piece.medium}</div>}
              {piece.size && <div>{piece.size}</div>}
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <details className="group w-full max-w-xl md:max-w-md">
              <summary className="list-none cursor-pointer text-left text-[11px] uppercase tracking-[0.28em] text-stone-600 transition-colors hover:text-stone-950 md:text-right [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Inquire</span>
                <span className="hidden group-open:inline">Close Inquiry</span>
              </summary>

              <form
                name="artwork-inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/"
                className="mt-10 border-t border-stone-200 pt-8"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="artwork-inquiry"
                />

                <p className="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <input type="hidden" name="subject" value={inquirySubject} />
                <input type="hidden" name="artworkTitle" value={piece.title} />
                <input type="hidden" name="artworkSlug" value={piece.slug} />
                <input type="hidden" name="series" value={piece.series} />
                <input
                  type="hidden"
                  name="pageUrl"
                  value={`https://garethpitthart.com/artwork/${piece.slug}`}
                />

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-stone-500"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-stone-300 bg-transparent px-3 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-stone-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-stone-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-stone-300 bg-transparent px-3 py-3 text-sm text-stone-900 outline-none transition-colors focus:border-stone-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-stone-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      defaultValue={inquiryMessage}
                      className="w-full resize-none border border-stone-300 bg-transparent px-3 py-3 text-sm leading-relaxed text-stone-900 outline-none transition-colors focus:border-stone-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="border border-stone-300 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-stone-600 transition-colors hover:border-stone-700 hover:text-stone-950"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </details>
          </div>
        </section>

        <nav className="mt-14 border-t border-stone-200 pt-6 text-sm text-stone-600">
          <div className="flex items-center justify-between gap-6">
            <div>
              {previous ? (
                <Link
                  href={`/artwork/${previous.slug}`}
                  className="hover:text-stone-950"
                >
                  ← {previous.title}
                </Link>
              ) : (
                <span />
              )}
            </div>

            <div>
              {next ? (
                <Link
                  href={`/artwork/${next.slug}`}
                  className="hover:text-stone-950"
                >
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
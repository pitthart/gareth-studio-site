import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewWorkInquiry from "@/components/NewWorkInquiry";
import {
  thresholdWorks,
  getThresholdWorkBySlug,
  getAdjacentThresholdWorks,
} from "@/lib/thresholdWorks";

export async function generateStaticParams() {
  return thresholdWorks.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getThresholdWorkBySlug(slug);

  if (!work) {
    return {
      title: "Threshold Series | Gareth Pitt-Hart",
    };
  }

  return {
    title: `${work.title} | Threshold Series`,
    description: `${work.title}, ${work.year}. ${work.medium}. ${work.dimensions}. A work from the Threshold series by Gareth Pitt-Hart.`,
    alternates: {
      canonical: `/new-work/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} | Threshold Series`,
      description: `${work.title}, ${work.year}. ${work.medium}. ${work.dimensions}.`,
      url: `https://garethpitthart.com/new-work/${work.slug}`,
      siteName: "Gareth Pitt-Hart",
      type: "website",
      images: [
        {
          url: work.image,
          width: 1200,
          height: 1200,
          alt: work.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Threshold Series`,
      description: `${work.title}, ${work.year}. ${work.medium}. ${work.dimensions}.`,
      images: [work.image],
    },
  };
}

export default async function ThresholdWorkPage({ params }) {
  const { slug } = await params;
  const work = getThresholdWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const { previous, next } = getAdjacentThresholdWorks(work.slug);

  return (
    <div className="px-6 pt-14 pb-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-800">
            Series
          </Link>
          <span className="mx-2">/</span>
          <Link href="/new-work" className="hover:text-stone-800">
            Threshold
          </Link>
          <span className="mx-2">/</span>
          <span>{work.title}</span>
        </div>

        <div className="relative aspect-square overflow-hidden bg-stone-200">
          <Image
            src={work.image}
            alt={work.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
          aria-label={`${work.title} painting details`}
        >
          {work.details.map((detail) => (
            <div
              key={detail.src}
              className="relative aspect-square overflow-hidden bg-stone-200"
            >
              <Image
                src={detail.src}
                alt={detail.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <NewWorkInquiry work={work} />

        <nav className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-600">
          <div className="flex items-center justify-between gap-6">
            <div>
              {previous ? (
                <Link
                  href={`/new-work/${previous.slug}`}
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
                  href={`/new-work/${next.slug}`}
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
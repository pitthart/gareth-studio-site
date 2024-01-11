import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Work | Gareth Pitt-Hart",
  description:
    "Selected bodies of work by Gareth Pitt-Hart, including Totem, Transmission, and related abstract paintings exploring pressure, trace, erosion, restraint, and vertical form.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Gareth Pitt-Hart",
    description:
      "Selected bodies of abstract painting by Gareth Pitt-Hart, including Totem, Transmission, and related work.",
    url: "https://garethpitthart.com/work",
    siteName: "Gareth Pitt-Hart",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work | Gareth Pitt-Hart",
    description:
      "Selected bodies of abstract painting by Gareth Pitt-Hart, including Totem, Transmission, and related work.",
  },
};

export default function SeriesPage() {
  return (
    <div className="px-6 pt-10 pb-28">
      <div className="mx-auto max-w-5xl px-0 pb-24 md:px-10">
        <header className="mb-12">
          <h1 className="mb-1 text-[26px] font-normal leading-tight text-stone-900 md:text-[30px]">
            Series
          </h1>

          <p className="max-w-2xl text-xs leading-tight text-stone-600 md:text-sm">
            Totem. Transmission.
          </p>
        </header>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-200">
              <Image
                src="/art/totem/cover.jpg"
                alt="Cover image for the Totem series by Gareth Pitt-Hart"
                fill
                sizes="52px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/totem"
                className="text-lg leading-tight text-stone-900 transition-opacity hover:opacity-70 md:text-xl"
              >
                Totem
              </Link>

              <div className="mt-[1px] text-[11px] leading-tight text-stone-500">
                Rhythm. Repetition. Stacked symbols.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-200">
              <Image
                src="/art/transmission/cover.jpg"
                alt="Cover image for the Transmission series by Gareth Pitt-Hart"
                fill
                sizes="52px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/transmission"
                className="text-lg leading-tight text-stone-900 transition-opacity hover:opacity-70 md:text-xl"
              >
                Transmission
              </Link>

              <div className="mt-[1px] text-[11px] leading-tight text-stone-500">
                Signal. Drift. Interruption.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-8">
          <Link
            href="/work/archive"
            className="text-sm text-stone-500 transition-colors hover:text-stone-800"
          >
            Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Other Work | Gareth Pitt-Hart",
  description:
    "Earlier and archived bodies of work by Gareth Pitt-Hart, including Faces and related abstract paintings on canvas and paper.",
  alternates: {
    canonical: "/work/archive",
  },
  openGraph: {
    title: "Other Work | Gareth Pitt-Hart",
    description:
      "Earlier and archived bodies of work by Gareth Pitt-Hart, including Faces and related paintings on canvas and paper.",
    url: "https://garethpitthart.com/work/archive",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/art/faces/cover.jpg",
        width: 1200,
        height: 1200,
        alt: "Faces archive work by Gareth Pitt-Hart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Work | Gareth Pitt-Hart",
    description:
      "Earlier and archived bodies of work by Gareth Pitt-Hart, including Faces and related paintings on canvas and paper.",
    images: ["/art/faces/cover.jpg"],
  },
};

export default function ArchivePage() {
  return (
    <div className="px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-0 pt-10 pb-24 md:px-10">
        <div className="mb-5 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-700">
            Series
          </Link>
          <span className="mx-2">/</span>
          <span>Other Work</span>
        </div>

        <header className="mb-8">
          <h1 className="mb-1 text-[26px] font-normal leading-tight text-stone-900 md:text-[30px]">
            Other Work
          </h1>

          <p className="max-w-2xl text-xs leading-relaxed text-stone-600 md:text-sm">
            Earlier bodies of work, archived series, and selected material from
            the studio.
          </p>
        </header>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-200">
              <Image
                src="/art/faces/cover.jpg"
                alt="Cover image for the Faces archive by Gareth Pitt-Hart"
                fill
                sizes="52px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/archive/faces"
                className="text-sm leading-tight text-stone-900 transition-opacity hover:opacity-70 md:text-base"
              >
                Faces
              </Link>

              <div className="mt-[1px] max-w-2xl text-[11px] leading-tight text-stone-500">
                Early portraits on canvas and paper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">
        {/* BREADCRUMB */}
        <div className="mb-5 text-xs text-stone-500">
          <Link href="/work" className="hover:text-stone-700">
            Work
          </Link>
          <span className="mx-2">/</span>
          <span>Archive</span>
        </div>

        <header className="mb-14">
          <h1 className="text-[26px] md:text-[30px] font-normal mb-1 leading-tight text-stone-900">
            Archive
          </h1>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl leading-tight">
            Earlier works. Record.
          </p>
        </header>

        <section className="space-y-8">
          {/* FACES */}
          <div className="flex items-center gap-4">
            <div className="relative h-[64px] w-[52px] bg-stone-200 overflow-hidden rounded-md border border-stone-200 shrink-0">
              <Image
                src="/art/faces/cover.jpg"
                alt="Faces archive"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Link
                href="/work/archive/faces"
                className="text-sm md:text-base text-stone-900 hover:opacity-70 transition-opacity leading-tight"
              >
                Faces
              </Link>
              <div className="mt-[1px] text-[11px] text-stone-500 leading-tight max-w-2xl">
                A previous body of work.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

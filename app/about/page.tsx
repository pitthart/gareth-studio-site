import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 pt-14 pb-28">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 md:px-10">

        <header className="max-w-3xl mb-8">
          <h1 className="text-[26px] md:text-[24px] font-medium mb-1 leading-tight text-stone-900">
            About
          </h1>
        </header>

        <section className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
          
          {/* Studio Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-md bg-stone-200 border border-stone-200">
            <Image
              src="/studio.jpg"
              alt="Studio of abstract painter Gareth Pitt-Hart"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-sm md:text-base text-stone-700 leading-relaxed">
            
            <p>
              Gareth Pitt-Hart is an abstract painter based in St. Louis, Missouri. 
              He works across cardboard, canvas, and paper using oil, acrylic, pastel, 
              graphite, and ink to explore trace, pressure, and erosion within the painted surface.
            </p>

            <p>
              His work develops through repetition and restraint. Vertical forms emerge 
              through accumulation rather than design, where each layer carries the record 
              of pressure—abrasion, concealment, interruption. The paintings are built slowly, 
              allowing structure and instability to exist together.
            </p>

            <p>
              Working across canvas, cardboard, and paper, Pitt-Hart develops bodies of work 
              that test structure against collapse. Surfaces buckle, stain, and shift as materials 
              react over time. The paintings hold tension between control and surrender, monument 
              and erosion.
            </p>

            <p>
              Current series include <em>Totem</em> and <em>Transmission</em>.
            </p>

            <p className="text-stone-600">
              Pitt-Hart lives and works in St. Louis, Missouri.
            </p>

            <p className="text-stone-600">
              For inquiries, please use the contact page.
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}
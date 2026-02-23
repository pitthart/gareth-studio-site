// lib/artworks.ts

export type SeriesSlug = "totem" | "transmission" | "faces" | "studies";

export type Artwork = {
  slug: string;
  title: string;
  series: SeriesSlug;

  year?: string;
  medium?: string;
  size?: string;

  // NEW: two images
  imageDetail: string; // used on series grids (closeup)
  imageFull: string;   // used on artwork page (full view)

  note?: string;

  // Curation controls
  isPublic?: boolean;   // default true
  isFeatured?: boolean; // homepage or highlighted modules
  order?: number;       // lower = earlier (manual sequencing)
};

export const seriesMeta: Record<
  SeriesSlug,
  { title: string; description: string; coverImage: string }
> = {
  totem: {
    title: "Totem",
    description:
      "Vertical structures built through rhythm, repetition, and stacked symbols.",
    coverImage: "/art/totem/cover.jpg",
  },
  transmission: {
    title: "Transmission",
    description:
      "Signal, drift, and interruption—marks relayed across seams and surfaces.",
    coverImage: "/art/transmission/cover.jpg",
  },
  faces: {
    title: "Faces",
    description:
      "Symbolic portraits and emotional masks—half diagram, half confession.",
    coverImage: "/art/faces/cover.jpg",
  },
  studies: {
    title: "Studies",
    description:
      "Small works on paper and cardboard—immediate tests of rhythm and form.",
    coverImage: "/art/studies/cover.jpg",
  },
};

export const artworks: Artwork[] = [
  // --- TOTEM ---
  {
    slug: "totem-01",
    title: "Totem I",
    series: "totem",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "30 × 12 in",
    imageDetail: "/art/totem/totem-01-detail.jpg",
    imageFull: "/art/totem/totem-01-full.jpg",
    note: "Stacked blue forms over a scored cardboard ground.",
    isPublic: true,
    order: 10,
  },
  {
    slug: "totem-02",
    title: "Totem II",
    series: "totem",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "32 × 12 in",
    imageDetail: "/art/totem/totem-02-detail.jpg",
    imageFull: "/art/totem/totem-02-full.jpg",
    note: "More open negative space with a looser vertical rhythm.",
    isPublic: true,
    order: 20,
  },
  {
    slug: "totem-03",
    title: "Totem III",
    series: "totem",
    year: "2024",
    medium: "Acrylic and pastel on cardboard",
    size: "28 × 10 in",
    imageDetail: "/art/totem/totem-03-detail.jpg",
    imageFull: "/art/totem/totem-03-full.jpg",
    note: "Rust and black motifs leaning toward architecture.",
    isPublic: true,
    order: 30,
  },
  {
    slug: "totem-04",
    title: "Totem IV",
    series: "totem",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "32 × 12 in",
    imageDetail: "/art/totem/totem-04-detail.jpg",
    imageFull: "/art/totem/totem-04-full.jpg",
    note: "More open negative space with a looser vertical rhythm.",
    isPublic: true,
    order: 40,
  },
  {
    slug: "totem-05",
    title: "Totem V",
    series: "totem",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "32 × 12 in",
    imageDetail: "/art/totem/totem-05-detail.jpg",
    imageFull: "/art/totem/totem-05-full.jpg",
    note: "More open negative space with a looser vertical rhythm.",
    isPublic: true,
    order: 50,
  },
  {
    slug: "totem-06",
    title: "Totem VI",
    series: "totem",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "32 × 12 in",
    imageDetail: "/art/totem/totem-06-detail.jpg",
    imageFull: "/art/totem/totem-06-full.jpg",
    note: "More open negative space with a looser vertical rhythm.",
    isPublic: true,
    order: 60,
  },

  // --- TRANSMISSION ---
  {
    slug: "transmission-01",
    title: "Transmission 01",
    series: "transmission",
    year: "2025",
    medium: "Mixed media on cardboard",
    size: "24 × 36 in",
    imageDetail: "/art/transmission/transmission-01-detail.jpg",
    imageFull: "/art/transmission/transmission-01-full.jpg",
    isPublic: true,
    order: 10,
  },
  {
    slug: "transmission-02",
    title: "Transmission 02",
    series: "transmission",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "72 × 28 in",
    imageDetail: "/art/transmission/transmission-02-detail.jpg",
    imageFull: "/art/transmission/transmission-02-full.jpg",
    isPublic: true,
    order: 20,
  },
  {
    slug: "transmission-03",
    title: "Transmission 03",
    series: "transmission",
    year: "2024",
    medium: "Mixed media on cardboard",
    size: "26 × 56 in",
    imageDetail: "/art/transmission/transmission-03-detail.jpg",
    imageFull: "/art/transmission/transmission-03-full.jpg",
    isPublic: true,
    order: 30,
  },
  {
    slug: "transmission-04",
    title: "Transmission 04",
    series: "transmission",
    year: "2025",
    medium: "Mixed media on cardboard",
    size: "70 × 24 in",
    imageDetail: "/art/transmission/transmission-04-detail.jpg",
    imageFull: "/art/transmission/transmission-04-full.jpg",
    isPublic: true,
    order: 40,
  },
  {
    slug: "transmission-05",
    title: "Transmission 05",
    series: "transmission",
    year: "2022",
    medium: "Mixed media on cardboard",
    size: "68 × 29 in",
    imageDetail: "/art/transmission/transmission-05-detail.jpg",
    imageFull: "/art/transmission/transmission-05-full.jpg",
    isPublic: true,
    order: 50,
  },
  {
    slug: "transmission-06",
    title: "Transmission 06",
    series: "transmission",
    year: "2025",
    medium: "Oil on Canvas",
    size: "36 × 24 in",
    imageDetail: "/art/transmission/transmission-06-detail.jpg",
    imageFull: "/art/transmission/transmission-06-full.jpg",
    isPublic: true,
    order: 60,
  },

  // --- FACES (Archive) ---
  {
    slug: "faces-01",
    title: "Face I",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-01-detail.jpg",
    imageFull: "/art/faces/faces-01-full.jpg",
    isPublic: true,
    order: 10,
  },
  {
    slug: "faces-02",
    title: "Face Study II",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-02-detail.jpg",
    imageFull: "/art/faces/faces-02-full.jpg",
    isPublic: true,
    order: 20,
  },
   {
    slug: "faces-03",
    title: "Face Study III",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-03-detail.jpg",
    imageFull: "/art/faces/faces-03-full.jpg",
    isPublic: true,
    order: 20,
  }, {
    slug: "faces-04",
    title: "Face Study IV",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-04-detail.jpg",
    imageFull: "/art/faces/faces-04-full.jpg",
    isPublic: true,
    order: 20,
  }, {
    slug: "faces-05",
    title: "Face Study V",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-05-detail.jpg",
    imageFull: "/art/faces/faces-05-full.jpg",
    isPublic: true,
    order: 20,
  }, 
  {
    slug: "faces-06",
    title: "Face Study VI",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-06-detail.jpg",
    imageFull: "/art/faces/faces-06-full.jpg",
    isPublic: true,
    order: 20,
  },
    {
    slug: "faces-07",
    title: "Face Study VII",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-07-detail.jpg",
    imageFull: "/art/faces/faces-07-full.jpg",
    isPublic: true,
    order: 20,
  },  {
    slug: "faces-08",
    title: "Face Study VIII",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-08-detail.jpg",
    imageFull: "/art/faces/faces-08-full.jpg",
    isPublic: true,
    order: 20,
  },  {
    slug: "faces-09",
    title: "Face Study IX",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-09-detail.jpg",
    imageFull: "/art/faces/faces-09-full.jpg",
    isPublic: true,
    order: 20,
  },  {
    slug: "faces-10",
    title: "Face Study X",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-10-detail.jpg",
    imageFull: "/art/faces/faces-10-full.jpg",
    isPublic: true,
    order: 20,
  },  {
    slug: "faces-11",
    title: "Face Study XI",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-11-detail.jpg",
    imageFull: "/art/faces/faces-11-full.jpg",
    isPublic: true,
    order: 20,
  },  {
    slug: "faces-12",
    title: "Face Study XII",
    series: "faces",
    year: "2025",
    medium: "Chalk pastel on paper",
    size: "9 × 12 in",
    imageDetail: "/art/faces/faces-12-detail.jpg",
    imageFull: "/art/faces/faces-12-full.jpg",
    isPublic: true,
    order: 20,
  },
  {
    slug: "faces-13",
    title: "Face Study XIII",
    series: "faces",
    year: "2025",
    medium: "Oil on Canvas",
    size: "24 x 30 in",
    imageDetail: "/art/faces/faces-13-detail.jpg",
    imageFull: "/art/faces/faces-13-full.jpg",
    isPublic: true,
    order: 20,
  },
];

// Helpers
export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getPublicArtworks(): Artwork[] {
  return artworks.filter((a) => a.isPublic !== false);
}

export function getArtworksBySeries(series: SeriesSlug): Artwork[] {
  return getPublicArtworks()
    .filter((a) => a.series === series)
    .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

export function getFeaturedArtworks(limit = 6): Artwork[] {
  return getPublicArtworks()
    .filter((a) => a.isFeatured)
    .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
    .slice(0, limit);
}

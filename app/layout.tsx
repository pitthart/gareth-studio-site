// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetlifyInquiryForm from "@/components/NetlifyInquiryForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://garethpitthart.com"),

  title: {
    default: "Gareth Pitt-Hart | Abstract Painter",
    template: "%s | Gareth Pitt-Hart",
  },

  description:
    "Gareth Pitt-Hart is an abstract painter based in St. Louis, Missouri, creating large-scale paintings and mixed media works on canvas, cardboard, and paper exploring pressure, trace, erosion, and restraint.",

  verification: {
    google: "LQWVCmek4lSLYcN5OLVj9w8OimSF6WE1LhQPry2O74k",
  },

  openGraph: {
    title: "Gareth Pitt-Hart | Abstract Painter",
    description:
      "Large-scale abstract paintings and mixed media works exploring pressure, trace, erosion, and restraint.",
    url: "https://garethpitthart.com",
    siteName: "Gareth Pitt-Hart",
    type: "website",
    images: [
      {
        url: "/studio-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Gareth Pitt-Hart abstract painter studio image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gareth Pitt-Hart | Abstract Painter",
    description:
      "Large-scale abstract paintings and mixed media works exploring pressure, trace, erosion, and restraint.",
    images: ["/studio-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const artistSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gareth Pitt-Hart",
    jobTitle: "Abstract Painter",
    url: "https://garethpitthart.com",
    image: "https://garethpitthart.com/studio-hero.jpg",
    description:
      "Gareth Pitt-Hart is an abstract painter based in St. Louis, Missouri, creating large-scale paintings and mixed media works on canvas, cardboard, and paper.",
    homeLocation: {
      "@type": "Place",
      name: "St. Louis, Missouri",
    },
    sameAs: [
      "https://www.instagram.com/gpitthart/",
      "https://www.linkedin.com/in/garethpitthart",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(artistSchema),
          }}
        />
      </head>

      <body>
        <NetlifyInquiryForm />
        <Header />
        <main className="min-h-screen bg-stone-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetlifyInquiryForm from "@/components/NetlifyInquiryForm";

export const metadata: Metadata = {
  title: "Gareth Pitt-Hart | Abstract Painter",
  description:
    "Gareth Pitt-Hart is an abstract painter based in St. Louis working with cardboard, canvas, and layered materials exploring trace, entropy, and gesture.",
  verification: {
    google: "LQWVCmek4lSLYcN5OLVj9w8OimSF6WE1LhQPry2O74k",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NetlifyInquiryForm />

        <Header />

        <main className="min-h-screen bg-stone-100">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
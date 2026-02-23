// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetlifyInquiryForm from "@/components/NetlifyInquiryForm";



export const metadata: Metadata = {
  title: "Gareth Pitt-Hart",
  description: "Painting on cardboard, paper, and found surfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen bg-stone-100">
          {children}
        </main>
        <NetlifyInquiryForm />
        <Footer />
      </body>
    </html>
  );
}

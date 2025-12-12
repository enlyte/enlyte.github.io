import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephen Moy | Technical Founder & Engineer",
  description: "Technical Founder and Full-Stack Engineer building AI tools and systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-950 font-sans text-neutral-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <Navbar />
        <main className="flex min-h-screen flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

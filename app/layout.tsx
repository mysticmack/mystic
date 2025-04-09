import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Mystic Ventures | Early-Stage Biotechnology VC Fund",
  description: "Early-stage biotechnology venture fund focused on seed and pre-seed stage companies in the psychedelic medicine and consciousness expansion spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0B0B0F]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B0B0F" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className={`${inter.className} antialiased min-h-screen bg-[#0B0B0F] text-white`}
        style={{ visibility: 'visible', backgroundColor: '#0B0B0F' }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.backgroundColor = '#0B0B0F';
              document.body.style.backgroundColor = '#0B0B0F';
              document.body.style.color = '#ffffff';
            `,
          }}
        />
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Mystic Ventures</h3>
              <p>Early-stage biotechnology venture fund</p>
              <p className="mt-4">&copy; {new Date().getFullYear()} Mystic Ventures. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

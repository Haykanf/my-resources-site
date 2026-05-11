import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resources",
  description: "A curated list of tools, articles and guides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full bg-white text-gray-900">
        <header className="border-b border-gray-100 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="font-semibold text-lg">Resources</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
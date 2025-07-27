import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkient",
  description: "A powerful Client Management Solution for Software Developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden animation-duration-[1s] fade-in animate-in`}
          >
            <Navbar />
            <main className="md:container mx-auto border-s ps-6 border-e pe-6">
              {children}
            </main>
            <Footer />
          </body>
      </html>
    </ThemeProvider>
  );
}

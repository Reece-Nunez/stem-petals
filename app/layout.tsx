import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEM & Petals | Where Science Meets Nature",
  description:
    "STEM & Petals offers hands-on STEM classes for children, blending science, technology, engineering, and math with the beauty of nature. Join our waitlist for upcoming classes.",
  keywords: [
    "STEM classes for kids",
    "children STEM education",
    "hands-on science classes",
    "STEM and nature",
    "kids engineering classes",
    "children science education",
    "STEM & Petals",
  ],
  openGraph: {
    title: "STEM & Petals | Where Science Meets Nature",
    description:
      "Hands-on STEM classes for children, blending science, technology, engineering, and math with the beauty of nature.",
    type: "website",
    locale: "en_US",
    siteName: "STEM & Petals",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEM & Petals | Where Science Meets Nature",
    description:
      "Hands-on STEM classes for children, blending science, technology, engineering, and math with the beauty of nature.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

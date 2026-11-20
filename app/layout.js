import { Young_Serif, Figtree } from "next/font/google";
import "./globals.css";
import { meta } from "@/data/content";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap"
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Growth Jar Experience",
    description: "Don’t just count your blessings. Document your becoming.",
    type: "website",
    url: meta.siteUrl,
    images: [meta.ogImage]
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🫙%3C/text%3E%3C/svg%3E"
  }
};

export const viewport = {
  themeColor: "#0F3B38",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
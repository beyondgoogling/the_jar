import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Memory from "@/components/Memory";
import Meet from "@/components/Meet";
import How from "@/components/How";
import Inside from "@/components/Inside";
import Packages from "@/components/Packages";
import Story from "@/components/Story";
import Gift from "@/components/Gift";
import Faq from "@/components/Faq";
import Final from "@/components/Final";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { packages } from "@/data/content";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Growth Jar Experience",
  description: "A 52-week guided gratitude journal with tear-out reflection slips and a jar to keep them in.",
  brand: { "@type": "Brand", name: "The Growth Jar" },
  image: "https://example.com/og-image.jpg",
  offers: {
    "@type": "Offer",
    price: "00.00",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: "https://example.com/#order",
    priceValidUntil: "2026-12-11"
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Memory />
        <Meet />
        <How />
        <Inside />
        <Packages />
        <Story />
        <Gift />
        <Faq />
        <Final />
      </main>
      <Footer />
      <StickyBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Method from "@/components/Method";
import ProductOverview from "@/components/ProductOverview";
import Differentials from "@/components/Differentials";
import Procedures from "@/components/Procedures";
import ScientificAuthority from "@/components/ScientificAuthority";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CONTACT, FAQS, PHONE_E164 } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "NutriGen Clinic",
    description:
      "Teste genético em Recife com interpretação profissional. Medicina de precisão, nutrição personalizada e longevidade na NutriGen Clinic.",
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Dom Bôsco, 961 - 3º andar",
      addressLocality: "Recife",
      addressRegion: "PE",
      postalCode: "50070-070",
      addressCountry: "BR",
    },
    areaServed: CONTACT.areaServed.split(", "),
    openingHours: CONTACT.hoursStructured,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <ProductOverview />
        <SocialProof />
        <Method />
        <Differentials />
        <About />
        <Procedures />
        <ScientificAuthority />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

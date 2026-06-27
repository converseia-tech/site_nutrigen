import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Method from "@/components/Method";
import Procedures from "@/components/Procedures";
import SocialProof from "@/components/SocialProof";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Method />
        <Procedures />
        <SocialProof />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Map from "@/app/components/Map";

export default function Home() {
  return (
    <main
      className="bg-[#0a0a0a] text-white min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <Map />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}


import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import TabsDemo from "@/components/tabs";
import WobbleCardDemo from "@/components/wobbledemo";
import GlobeDemo from "@/components/global";
import TracingBeamDemo from "@/components/tracing";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar/>
      <HeroSection />

      
      <TabsDemo/>
      <TracingBeamDemo/>

      <GlobeDemo/>
      <Instructors />
     
      <Footer />
      
      
    </main>
  );
}

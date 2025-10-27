import WaymorAdvantage from "./components/Advantage";
import Hero from "./components/Hero";
import MissionVisionSection from "./components/Mission";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services";


export default function Home() {
  return (
   <div className="bg-background text-foreground">

    <Navbar />
    <Hero />
    <MissionVisionSection />
    <ServicesSection />
    <WaymorAdvantage />
</div>

  );
}

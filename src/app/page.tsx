import WaymorAdvantage from "./components/Advantage";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MissionVisionSection from "./components/Mission";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services";
import LeadershipTeam from "./components/Team";


export default function Home() {
  return (
   <div className="bg-background text-foreground">

    <Navbar />
    <Hero />
    <MissionVisionSection />
    <ServicesSection />
    <WaymorAdvantage />
    <LeadershipTeam />
    <ContactSection />
    <Footer />
</div>

  );
}

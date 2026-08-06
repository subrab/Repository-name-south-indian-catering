import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/common/Footer";
import FounderStory from "../components/home/FounderStory";
export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Stats />
  <WhyChooseUs />
  <FounderStory />
  <Footer />
</>
  );
}
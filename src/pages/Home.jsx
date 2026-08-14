import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/common/Footer";
import FounderStory from "../components/home/FounderStory";
import Services from "../components/home/Services";
import Menu from "../components/home/Menu";
import Gallery from "../components/home/Gallery";
import Countries from "../components/home/Countries";


export default function Home() {
  return (
   <>
 <Navbar />
<Hero />
<Stats />
<WhyChooseUs />
<FounderStory />
<Services />
<Menu />
<div id="gallery">
  <Gallery />
</div>
<Countries />
<Footer />
</>
  );
}
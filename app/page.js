import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Whyus from "./components/Whyus";
import CaseStudies from "./components/CaseStudies";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Marquee from "./components/Practise";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Marquee />
      <Whyus />
      <About />
      <CaseStudies />
      <Timeline />
      <Testimonials />
      
      {/* Uncomment the line below if you want to include the Footer component */}
      {/* <Footer /> */}
      <Footer/>
      

    </div>
  );
}

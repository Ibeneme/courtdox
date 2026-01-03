import AboutUs from "../components/about-us/aboutus";
import Hero from "../components/hero/Hero";
import HowItWorks from "../components/howitworks/HowItWorks";
import Services from "../components/services/Services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Services />
      <AboutUs />
    </div>
  );
};

export default HomePage;

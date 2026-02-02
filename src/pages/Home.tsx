import Hero from "../components/landing/hero/Hero";
import Ribbon from "../components/landing/hero/Ribbon";
import Recent from "../components/landing/recents/Recent";
import Banner from "../components/landing/banner/Banner";
import Special from "../components/landing/special/Special";
import About from "../components/landing/about/About";
import NewsLetter from "../components/landing/newsletter/NewsLetter";
const Home = () => {
  return (
    <>
      <Hero />
      <Ribbon />
      <Recent />
      <Banner />
      <Special />
      <About />
      <NewsLetter />
    </>
  );
};

export default Home;

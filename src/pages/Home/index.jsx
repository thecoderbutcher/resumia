import Hero from "./components/Hero";
import Analyzer from "./components/Analyzer";
import Creator from "./components/Creator";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Analyzer />
      <Creator />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { hero } from "../../../../constants/language";
import { images } from "../../../../constants/language";
import { useLangStore } from "../../../../store/useLangStore";

const Hero = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex items-center justify-center mx-auto px-2 md:px-8 gap-20 w-full min-h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-2 w-full md:w-1/2 xl:w-2/5 text-center md:text-left">
        <div className="hidden md:flex items-center gap-2 bg-blue-500/10 px-4 py-1 rounded-2xl mx-auto ml-0">
          <div className="border border-blue-500/50 w-4 rounded-full"></div>
          <h2 className="text-sm md:text-base text-blue-500">{hero[lang].supertitle}</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold capitalize">
          {hero[lang].title}
        </h1>
        <p className="text-lg md:text-xl font-extralight py-4">{hero[lang].subtitle}</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="/analyzer"
            className=" border border-blue-500/50 hover:bg-blue-500 hover:text-black transition-all duration-200 text-white px-4 py-2 rounded"
          >
            {hero[lang].ctaAnalyzer}
          </Link>
          <Link
            to="/creator"
            className=" border border-blue-500/50 hover:bg-blue-500 hover:text-black transition-all duration-200 text-white px-4 py-2 rounded"
          >
            {hero[lang].ctaCreator}
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <img src={images.bot} alt="Resumia Bot" />
      </div>
    </div>
  );
};

export default Hero;

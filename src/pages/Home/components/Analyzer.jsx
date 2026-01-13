import { Link } from "react-router-dom";
import { analyzer } from "../../../../constants/language";
import { useLangStore } from "../../../../store/useLangStore";

const Analyzer = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex flex-col lg:flex-row justify-center px-4 py-20 md:px-8 w-full">
      <div className="relative w-full xl:w-1/3 order-2 lg:order-1">
        {analyzer.images.map((image, index) => (
          <div
            key={index}
            className={`lg:absolute shadow-xl shadow-gray-800/90 rounded-2xl ${index === 1 ? "top-0 -left-10 z-0 hidden lg:block" : "top-20 left-10 z-10"}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full xl:w-1/3 gap-4 order-1 lg:order-2">
        <div className="flex items-center gap-2">
          <div className="border border-blue-500/50 w-4 rounded-full"></div>
          <h2 className="text-lg text-blue-500">Resumia Analyzer</h2>
        </div>
        <p className="text-2xl font-bold">{analyzer[lang].title}</p>
        <p className="text-lg font-extralight">{analyzer[lang].subtitle}</p>
        <div className="flex flex-col gap-4">
          {analyzer[lang].steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-lg font-bold">{step.title}</p>
              <p className="text-base font-extralight">{step.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/analyzer"
          className="mx-auto border border-blue-500/50 hover:bg-blue-500 hover:text-black transition-all duration-200 text-white px-4 py-2 rounded"
        >
          {analyzer[lang].button}
        </Link>
      </div>
    </div>
  );
};

export default Analyzer;

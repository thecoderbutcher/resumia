import { useState } from "react";
import { Link } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import { ROUTES } from "../../constants/routes";
import { images } from "../../constants/language";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const { lang, setLang } = useLangStore();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleActive();
  };

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center justify-between py-2 md:px-10 px-4">
      {/* Logo */}
      <Link to={"/"} className="flex gap-2 items-center">
        <img src={images.logo} alt="Logo resumia" className="w-8 h-8" />
        <h2 className="text-lg hidden md:block">RESUMIA</h2>
      </Link>

      <div className="hidden md:flex h-16 md:px-6 ">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-2 md:gap-4">
            {ROUTES.map((item, index) => (
              <Link to={item.path} key={index}>
                {item.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center justify-between">
        <div className="fixed top-0 right-0 items-center justify-center z-100">
          <span
            className="cursor-pointer flex items-center justify-center"
            onClick={toggleMenu}
          >
            <MenuButton active={active} setActive={toggleActive} />
          </span>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-gray-950/70 w-full p-12 flex flex-col gap-4 text-center justify-center items-center lg:hidden">
            <ul className="flex flex-col gap-4 text-xl">
              {ROUTES.map((item, index) => (
                <li key={index} onClick={toggleMenu}>
                  <Link to={item.path}>{item.label[lang]}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex justify-center items-center gap-2">
              <li
                className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                  lang === "en" ? "grayscale" : ""
                }`}
                onClick={() => setLang("es")}
              >
                <img
                  src={images.SpanishIcon}
                  alt="spanish"
                  width={30}
                  height={30}
                />
              </li>
              <li
                className={`cursor-pointer hover:scale-125 hover:filter-none transition-all duration-200 ${
                  lang === "es" ? "grayscale" : ""
                }`}
                onClick={() => setLang("en")}
              >
                <img
                  src={images.EnglishIcon}
                  alt="english"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:flex gap-2">
        <img
          src={images.SpanishIcon}
          alt="spanish"
          className={`${lang !== "es" ? "grayscale" : ""} transition-all duration-300`}
          onClick={() => {
            setLang("es");
          }}
        />
        <img
          src={images.EnglishIcon}
          alt="english"
          className={`${lang !== "en" ? "grayscale" : ""} transition-all duration-300`}
          onClick={() => {
            setLang("en");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

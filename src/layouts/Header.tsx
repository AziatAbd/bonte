import { useState } from "react";
import { Button, Container } from "../components/styles";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header = ({ mainPage = false }: { mainPage?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`${mainPage ? "sm:absolute" : "static"} top-0 w-full sm:${
        mainPage ? "text-white" : "text-black"
      } z-50`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div
            className={`text-[55px] font-[700] ${
              mainPage ? "sm:text-white" : "text-black"
            }`}
          >
            BONTE
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className={`${mainPage ? "text-gray-300" : "text-black"} hover:${
                mainPage ? "text-white" : "text-gray-700"
              } transition-colors`}
            >
              ГЛАВНАЯ
            </a>
            <a
              href="/#about"
              className={`${mainPage ? "text-gray-300" : "text-black"} hover:${
                mainPage ? "text-white" : "text-gray-700"
              } transition-colors`}
            >
              О НАС
            </a>
            <NavLink
              to="catalog/dairy"
              className={`${mainPage ? "text-gray-300" : "text-black"} hover:${
                mainPage ? "text-white" : "text-gray-700"
              } transition-colors`}
            >
              КАТАЛОГ
            </NavLink>
            <a
              href="/#contacts"
              className={`${mainPage ? "text-gray-300" : "text-black"} hover:${
                mainPage ? "text-white" : "text-gray-700"
              } transition-colors`}
            >
              КОНТАКТЫ
            </a>
          </nav>
          <a href="https://wa.me/+996500000020" target="_blank">
            <Button variant="secondary" size="sm" className="!text-black">
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ГЛАВНАЯ
              </a>
              <a
                href="/#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                О НАС
              </a>
              <NavLink
                to="catalog"
                className="text-gray-300 hover:text-white transition-colors"
              >
                КАТАЛОГ
              </NavLink>
              <a
                href="/#contacts"
                className="text-gray-300 hover:text-white transition-colors"
              >
                КОНТАКТЫ
              </a>
              <a href="https://wa.me/+996500000020" target="_blank">
                <Button variant="secondary" size="sm" className="w-fit">
                  СВЯЗАТЬСЯ
                </Button>
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

import { useState } from "react";
import { Button, Container } from "../components/styles";
import { X, Menu } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { smoothScrollToId } from "../utils/smoothScrollToId";
import { motion, AnimatePresence } from "framer-motion";
import BlueLogo from "../assets/blue.svg";
import WhiteLogo from "../assets/logo.svg";

export const Header = ({ mainPage = false }: { mainPage?: boolean }) => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollToId(id);
    setIsMenuOpen(false);
  };

  console.log(location.pathname);

  const isMainPage = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${mainPage ? "sm:absolute" : "static"} top-0 w-full sm:${
        mainPage ? "text-white" : "text-black"
      } z-50`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Логотип */}
          <motion.div
            onClick={() => navigate("/")}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[150px]"
          >
            <img src={!isMainPage ? BlueLogo : WhiteLogo} />
          </motion.div>

          {/* Навигация — desktop */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center space-x-6"
          >
            <a
              href="/"
              className={`${
                mainPage ? "text-gray-400" : "text-black"
              } hover:text-yellow-500 transition-colors`}
            >
              ГЛАВНАЯ
            </a>
            <NavLink
              to="/"
              state={{ scrollToId: "about" }}
              className={`${
                mainPage ? "text-gray-400" : "text-black"
              } hover:text-yellow-500 transition-colors`}
            >
              О НАС
            </NavLink>
            <NavLink
              to="/catalog/dairy"
              className={`${
                mainPage ? "text-gray-400" : "text-black"
              } hover:text-yellow-500 transition-colors`}
            >
              КАТАЛОГ
            </NavLink>
            <NavLink
              to="/"
              state={{ scrollToId: "contacts" }}
              className={`${
                mainPage ? "text-gray-400" : "text-black"
              } hover:text-yellow-500 transition-colors`}
            >
              КОНТАКТЫ
            </NavLink>
          </motion.nav>

          {/* Кнопка */}
          <motion.a
            href="https://wa.me/+996999223395"
            target="_blank"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex"
          >
            <Button variant="secondary" size="sm" className="!text-black">
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </motion.a>

          {/* Кнопка меню — мобилка */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden p-4 border-t border-gray-700 absolute top-0 left-0 w-full bg-white z-50"
            >
              <button
                className="md:hidden float-right"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col space-y-3 mt-8">
                <a
                  href="/"
                  onClick={(e) => handleScroll(e, "home")}
                  className="text-black hover:text-white transition-colors"
                >
                  ГЛАВНАЯ
                </a>
                <NavLink
                  to="/"
                  state={{ scrollToId: "about" }}
                  className="text-black hover:text-white transition-colors"
                >
                  О НАС
                </NavLink>
                <NavLink
                  to="/catalog/dairy"
                  className="text-black hover:text-white transition-colors"
                >
                  КАТАЛОГ
                </NavLink>
                <NavLink
                  to="/"
                  state={{ scrollToId: "contacts" }}
                  className="text-black hover:text-white transition-colors"
                >
                  КОНТАКТЫ
                </NavLink>
                <a href="https://wa.me/+996999223395" target="_blank">
                  <Button variant="secondary" size="sm" className="w-fit">
                    СВЯЗАТЬСЯ
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

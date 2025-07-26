import { motion } from "framer-motion";
import { Button, Container } from "./styles";
import firstSlideImg from "../assets/images/hero/slide-1.png";
import secondSlideImg from "../assets/images/hero/slide-2.png";
import thirdSlideImg from "../assets/images/hero/slide-3.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.3,
    },
  },
};
export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const slides = [firstSlideImg, secondSlideImg, thirdSlideImg];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pb-10 pt-30 overflow-hidden"
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${slide})`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#FDD259] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-[86px] mb-6 uppercase font-bold font-[Bebas Neue]"
              variants={itemVariants}
            >
              ПОСТАВКА <br /> СЫРЬЯ ДЛЯ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-gray-200 sm:w-[488px]"
              variants={itemVariants}
            >
              Прямые поставки из разных стран и регионов мира позволяют нам
              обеспечить широкий ассортимент продукции.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-[42px]">
              <motion.div
                className="flex flex-col w-auto gap-8 justify-center"
                variants={containerVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button size="lg" className="text-lg w-full">
                    СДЕЛАТЬ ЗАКАЗ
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    className="text-lg w-full"
                    variant="outline"
                    onClick={() => navigate("/catalog/dairy")}
                  >
                    ПОСМОТРЕТЬ КАТАЛОГ
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="sm:flex gap-2"
                variants={containerVariants}
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-2 mb-2">
                    <motion.div
                      className="border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[258px]"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="text-5xl mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                      >
                        500+
                      </motion.div>
                      <div className="text-base">
                        Тонн сырья поставляется ежемесячно по всей стране
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[258px]"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="text-5xl mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 1.2,
                          duration: 0.5,
                          type: "spring",
                        }}
                      >
                        99%
                      </motion.div>
                      <div className="text-base">
                        заявок отгружаются точно в срок
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="mb-2 not-target:border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[100%]"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className="text-5xl mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                    >
                      1 000+ м²
                    </motion.div>
                    <div className="text-base">
                      складских помещений с контролем температуры
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[160px]"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="text-5xl mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                  >
                    600+
                  </motion.div>
                  <div className="text-base">
                    Клиентов из сферы молочной, кондитерской и HoReCa
                    промышленности
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

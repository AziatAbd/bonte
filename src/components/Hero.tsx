import { motion } from "framer-motion";
import { Button, Container } from "./styles";

export const HeroSection = () => {
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

  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center relative pb-10 pt-30"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop")',
      }}
    >
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight font-stretch-ultra-condensed tracking-tighter sm:w-[600px]"
              variants={itemVariants}
            >
              ПОСТАВКА СЫРЬЯ ДЛЯ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ
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
                      className="border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[208px]"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="text-5xl mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                      >
                        300+
                      </motion.div>
                      <div className="text-base">
                        Тонн сырья поставляется ежемесячно по всей стране
                      </div>
                    </motion.div>

                    <motion.div
                      className="border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[208px]"
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
                    className="mb-2 not-target:border border-[#FDD259] rounded-[17px] text-[#FDD259] py-[19px] px-[11px] sm:w-[424px]"
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
                    500+
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

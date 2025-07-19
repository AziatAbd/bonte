import { motion } from "framer-motion";
import { Container } from "./styles";
import firstAboutImg from "../assets/images/about/about.png";
import secondAboutImg from "../assets/images/about/about-2.png";

export const AboutSection = () => {
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateY: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            variants={titleVariants}
          >
            О НАС
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={rowVariants}
          >
            <motion.div variants={imageVariants}>
              <motion.img
                src={firstAboutImg}
                alt="О компании"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
            <motion.div variants={textVariants}>
              <motion.p
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Наша компания занимается поставками сырья и ингредиентов для
                предприятий пищевой промышленности. Мы обеспечиваем
                бесперебойные поставки качественной продукции для хлебопекарной,
                кондитерской и молочной отраслей. Прямые поставки из России,
                Турции и других стран мира позволяют нам формировать широкий
                ассортимент,
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={textVariants}>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Опыт работы и глубокое понимание потребностей отрасли позволяют
                нам обеспечивать эффективные решения для производителей любого
                масштаба. Мы строим долгосрочные партнёрские отношения,
                основанные на прозрачности, ответственности и профессиональном
                подходе к каждому этапу сотрудничества.
              </motion.p>
            </motion.div>
            <motion.div variants={imageVariants}>
              <motion.img
                src={secondAboutImg}
                alt="О компании"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  rotateY: -5,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

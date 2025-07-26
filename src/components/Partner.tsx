import { motion } from "framer-motion";
import { Container } from "./styles";
import belayaReka from "../assets/images/partners/belaya-reka.png";
import organic from "../assets/images/partners/Organic_logo.png";
import besh from "../assets/images/partners/besh.png";
import umai from "../assets/images/partners/umai.png";
import salih from "../assets/images/partners/salih.png";
import riha from "../assets/images/partners/riha.png";
import milk from "../assets/images/partners/milk.jpeg";
import jetiBaatyr from "../assets/images/partners/jeti-baatyr.png";
import shinLine from "../assets/images/partners/shin-line.jpeg";
import iceCream from "../assets/images/partners/ice-queen.jpeg";

export const PartnersSection = () => {
  const partners = [
    belayaReka,
    organic,
    besh,
    umai,
    salih,
    riha,
    milk,
    jetiBaatyr,
    shinLine,
    iceCream,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
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
        duration: 0.8,
      },
    },
  };

  const partnerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const partnersGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-center text-gray-600 mb-8 text-2xl uppercase sm:w-[700px] mx-auto"
            variants={titleVariants}
          >
            ПОставляем сырье для компаний ,Которым Не все равно на качество
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-8"
            variants={partnersGridVariants}
          >
            {partners.map((partner, index) => (
              <motion.img
                key={index}
                className="border-gray-300 text-gray-700 text-lg px-6 py-2 max-w-44"
                src={partner}
                alt={`Partner ${index + 1}`}
                variants={partnerVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                style={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease",
                }}
                whileInView={{
                  filter: "grayscale(0%)",
                  transition: { delay: index * 0.1 + 0.5, duration: 0.5 },
                }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

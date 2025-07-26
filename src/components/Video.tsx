import { motion } from "framer-motion";
import { Container } from "./styles";

export const VideoSection = () => {
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

  const leftSideVariants = {
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

  const rightSideVariants = {
    hidden: {
      opacity: 0,
      x: 50,
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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 text-black">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#FFF09F] px-[64px] py-[50px] rounded-lg w-full h-full flex items-center"
            variants={leftSideVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <motion.h2
              className="text-4xl font-bold mb-8"
              variants={titleVariants}
            >
              Познакомьтесь с нами поближе посмотрев видеоролик{" "}
              <motion.span
                className="text-[#eea12f]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                о компании
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div className="relative" variants={rightSideVariants}>
            <motion.div
              className="h-[408px] bg-cover bg-center rounded-lg relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/racb1jJxigo?si=uHndxIGQl4WekEjj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

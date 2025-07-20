import { motion } from "framer-motion";
import { Container } from "./styles";

const contactInfo = [
  {
    title: "Адрес",
    value: "Кыргызская Республика г.Бишкек Лермонтова 1Б/4.",
  },
  {
    title: "Почта",
    value: "bonte.m.a8.@gmail.com",
  },
];

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
    y: 30,
    scale: 0.9,
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

const leftSideVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const contactItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    x: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const contactListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const mapVariants = {
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

export const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 text-black">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={titleVariants}
          >
            КОНТАКТЫ
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div className="space-y-8 w-64" variants={leftSideVariants}>
              <motion.div variants={contactListVariants}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 mb-4">
                    <div>
                      <h3 className="uppercase text-[20px]/[20px] font-semibold mb-1 text-[#0C1D3499]">
                        {info.title}
                      </h3>
                      <p className="text-[#0C1D3499] font-[Helvetica] ">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
                <motion.div
                  variants={contactItemVariants}
                  className="flex items-center space-x-4"
                >
                  <div>
                    <h3 className="uppercase text-[20px]/[20px] font-semibold mb-1 text-[#0C1D3499]">
                      Телефон
                    </h3>
                    <p className="text-[#0C1D3499] font-[Helvetica]">
                      Отдел закупа: +996 999 22 33 36
                    </p>
                    <p className="text-[#0C1D3499] font-[Helvetica]">
                      Отдел продаж: +996 999 22 33 95
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={mapVariants}
              className="h-80 bg-gray-600 rounded-lg flex items-center justify-center"
            >
              <iframe
                src="http://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.89281877649548%2C%22lon%22%3A74.65345144271852%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001100683477%22%7D"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

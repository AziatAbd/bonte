import { motion } from "framer-motion";
import { Container } from "./styles";
import firstAboutImg from "../assets/images/about/about.jpg";
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
    <>
      <section id="about" className="py-20 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-gray-900 uppercase"
              variants={titleVariants}
            >
              О нас
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
                  Мы объединяем многолетний опыт работы с глобальными
                  поставщиками и глубокое понимание потребностей пищевой
                  отрасли, чтобы быть надёжным партнёром для производителей
                  хлебобулочной, кондитерской и молочной продукции. Благодаря
                  прямым поставкам сырья и ингредиентов из России, Турции и
                  других стран мира, мы формируем устойчивую цепочку поставок и
                  широкий ассортимент. Вместе с нашими клиентами мы создаём
                  условия для стабильного роста, развития и устойчивого будущего
                  пищевой промышленности.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-10 sm:p-20 bg-[#0C1D34]">
        <motion.div
          className="mt-16 text-white p-4"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col lg:flex-row gap-8 items-start mb-12"
            variants={rowVariants}
          >
            <motion.div variants={imageVariants} className="lg:w-1/2">
              <motion.img
                src={secondAboutImg}
                alt="Генеральный директор"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
            <motion.div variants={textVariants} className="lg:w-1/2 lg:pl-8">
              <motion.p
                className="text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                "Основой успешной работы являются дисциплина, компетентность и
                ответственность. В нашей команде нет случайных людей — каждый
                специалист проходит тщательный отбор и разделяет высокие
                стандарты компании"
              </motion.p>
              <motion.h3
                className="text-xl font-semibold text-blue-400 mb-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Бакирдинова Назгуль Женишбековна
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Генеральный директор
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={rowVariants}
          >
            {[
              {
                name: "Муратбеков Аскар Билялыевич",
                position: "Заместитель генерального директора",
              },
              { name: "Сапарова Айда Тилековна", position: "Старший юрист" },
              {
                name: "Жыргалбаева Айжаркын Асылбековна",
                position: "Юрист по корпоративному праву",
              },
              { name: "Эрдарова Элина Эрдаровна", position: "Юрист" },
              { name: "Урганиева Айдай Кубанычбековна", position: "" },
              { name: "Нусупова Сабина Амановна", position: "Юрист" },
              { name: "Отунбаева Айдай Жолболотовна", position: "" },
              { name: "Таджибаев Шерболот Расулович", position: "" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-4 text-center"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={secondAboutImg}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <motion.h4
                  className="text-blue-400 font-medium text-sm mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {member.name}
                </motion.h4>
                <motion.p
                  className="text-gray-400 text-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {member.position}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

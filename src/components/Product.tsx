import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { Container } from "./styles";
import milk from "../assets/images/products/milk.png";
import burger from "../assets/images/products/burger.jpg";
import cakes from "../assets/images/products/cakes.jpg";
import spec from "../assets/images/products/karaginan.jpg";
import bread from "../assets/images/products/bread.png";
import dye from "../assets/images/products/ZMG_Wikipedia.png";

const products = [
  {
    title: "Молочная продукция",
    image: milk,
    description:
      "Стабилизаторы, закваски, ароматизаторы и другие ингредиенты для молочной продукции.",
    href: "/catalog/dairy",
  },
  {
    title: "Horeca",
    image: burger,
    description:
      "Ингредиенты для ресторанов, кафе и отелей: качественное сырьё для стабильных блюд.",
    href: "/catalog/horeca",
  },
  {
    title: "Кондитерские изделия",
    image: cakes,
    description:
      "Какао-продукты, наполнители, стабилизаторы и другое сырьё для кондитерского производства.",
    href: "/catalog/confectionery",
  },
  {
    title: "Пищевая химия",
    image: spec,
    description:
      "Сорбат калия, фосфомикс и другие добавки для безопасности и стабильности продукции.",
    href: "/catalog/food-chemistry",
  },
  {
    title: "Хлебобулочные продукты",
    image: bread,
    description:
      "Улучшители, закваски, ферментные комплексы и добавки для хлебопекарной продукции.",
    href: "/catalog/bakery",
  },
  {
    title: "Специализированные жиры",
    image: dye,
    description:
      "Кондитерские, хлебопекарные и фритюрные жиры с отличными технологическими свойствами.",
    href: "/catalog/specialized-fats",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const ProductsSection = () => {
  return (
    <section id="products" className="py-10 sm:py-20 bg-[#0C1D34]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white uppercase"
            variants={titleVariants}
          >
            Что мы Вам предлагаем?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            variants={gridVariants}
          >
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

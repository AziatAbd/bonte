import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { Container } from "./styles";
import milk from "../assets/images/products/milk.png";
import burger from "../assets/images/products/burger.jpg";
import cakes from "../assets/images/products/cakes.jpg";
import spec from "../assets/images/products/spec.jpg";
import bread from "../assets/images/products/bread.png";
import dye from "../assets/images/products/dye.jpg";

const products = [
  {
    title: "Молочная продукция",
    image: milk,
    description:
      "Поставляем ингредиенты для производства молочных продуктов: стабилизаторы, закваски, ароматизаторы и другие компоненты, обеспечивающие качество и безопасность конечной продукции.",
    href: "/catalog/dairy",
  },
  {
    title: "Horeca",
    image: burger,
    description:
      "Предлагаем широкий ассортимент ингредиентов для сегмента HoReCa: качественное сырьё для ресторанов, кафе и отелей, способствующее созданию вкусных и стабильных по качеству блюд.",
    href: "/catalog/horeca",
  },
  {
    title: "Кондитерские изделия",
    image: cakes,
    description:
      "Комплексные поставки ингредиентов для кондитерского производства: какао-продукты, наполнители, стабилизаторы, ароматизаторы и другое сырьё для создания современной кондитерской продукции.",
    href: "/catalog/confectionery",
  },
  {
    title: "Специи",
    image: spec,
    description:
      "Прямые поставки натуральных специй и пряностей от ведущих производителей. Широкий выбор вкусовых и ароматических решений для различных направлений пищевой отрасли.",
    href: "/catalog/spices",
  },
  {
    title: "Хлебобулочные продукты",
    image: bread,
    description:
      "Поставляем сырьё для хлебопекарной промышленности: улучшители, ферментные комплексы, закваски, добавки для продления свежести и улучшения качества готовой продукции.",
    href: "/catalog/bakery",
  },
  {
    title: "Красители",
    image: dye,
    description:
      "Широкий выбор пищевых красителей для придания продукции привлекательного внешнего вида. Натуральные и синтетические решения, соответствующие требованиям безопасности и качества.",
    href: "/catalog/colors",
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

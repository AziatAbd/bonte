import { motion } from "framer-motion";
import { Card } from "./styles";

type Product = {
  image: string;
  title: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
  index?: number;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0.8,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card hover={true}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[2]" />

        <motion.img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-fill absolute z-[1]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          className="text-white p-6 z-[3] relative flex flex-col items-center justify-end h-full"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl font-semibold mb-2 border-b w-[80%] text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {product.title}
          </motion.h3>
          <motion.p
            className=""
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {product.description}
          </motion.p>
        </motion.div>
      </Card>
    </motion.div>
  );
};

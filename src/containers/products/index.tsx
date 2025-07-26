import zacvaski from "../../assets/images/products/zacvaski.jpg";
import zacvaska2 from "../../assets/images/products/zacvaska2.jpeg";
import zacvaska3 from "../../assets/images/products/zacvaska3.jpg";
import bread from "../../assets/images/products/bread.png";
import dye from "../../assets/images/products/dye.jpg";
import dye2 from "../../assets/images/products/dye2.jpeg";
import napolnitel from "../../assets/images/products/napolnitel.jpeg";
import napolnitelKivi from "../../assets/images/products/napolnitel-kivi.jpeg";
import burger from "../../assets/images/products/burger.jpg";
import burger2 from "../../assets/images/products/burger2.jpg";
import burger3 from "../../assets/images/products/burger3.jpg";
import spec from "../../assets/images/products/spec.jpg";
import spec2 from "../../assets/images/products/spec2.webp";
import milk from "../../assets/images/products/milk.png";
import milk2 from "../../assets/images/products/milk2.jpg";
import { useNavigate } from "react-router-dom";

// Молочная продукция
const dairyProducts = [
  {
    id: 1,
    title: "Сухое обезжиренное молоко",
    img: milk,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Сывороточные белковые концентраты",
    img: milk2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Казеинаты и казеины",
    img: milk,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Молочные жиры и сливки",
    img: milk2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Лактоза и молочные сахара",
    img: milk,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Функциональные молочные добавки",
    img: milk2,
    inStock: false,
    onOrder: true,
  },
  { id: 7, title: "Молочный белок", img: milk, inStock: true, onOrder: false },
  {
    id: 8,
    title: "Сухая молочная сыворотка",
    img: milk2,
    inStock: false,
    onOrder: true,
  },
];

// Заквасочные культуры
const starterProducts = [
  {
    id: 1,
    title: "Заквасочные культуры для йогурта",
    img: zacvaska2,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Заквасочные культуры для кефира",
    img: zacvaski,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Заквасочные культуры для сметаны",
    img: zacvaska3,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Заквасочные культуры для ряженки",
    img: zacvaski,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Заквасочные культуры для творога",
    img: zacvaska2,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Заквасочные культуры для биокефира",
    img: zacvaska3,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Заквасочные культуры для айрана",
    img: zacvaski,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Пробиотические культуры",
    img: zacvaska2,
    inStock: false,
    onOrder: true,
  },
];

// Хлебобулочные изделия
const bakeryProducts = [
  {
    id: 1,
    title: "Хлебопекарные улучшители",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Эмульгаторы (лецитин, DATEM, SSL)",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Ферменты для теста",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Разрыхлители и дрожжи",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Глютен пшеничный",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Функциональные смеси",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Улучшители для выпечки",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Смеси для хлеба",
    img: bread,
    inStock: false,
    onOrder: true,
  },
];

// Сырные изделия
const cheeseProducts = [
  {
    id: 1,
    title: "Сычужные ферменты",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Соли-плавители (цитраты, фосфаты)",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Хлорид кальция для сыроделия",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Защитные культуры",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Красители для сырных корок",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Антимикробные покрытия",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Ферменты для созревания",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Добавки для плавленых сыров",
    img: bread,
    inStock: false,
    onOrder: true,
  },
];

// Пищевые красители
const colorProducts = [
  {
    id: 1,
    title: "Пищевые красители для напитков",
    img: dye,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Пищевые красители для выпечки",
    img: dye2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Красители для молочных продуктов",
    img: dye,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Красители для кондитерских изделий",
    img: dye2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Натуральные пищевые красители",
    img: dye,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Синтетические красители",
    img: dye2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Концентраты красителей",
    img: dye,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Порошковые красители",
    img: dye2,
    inStock: false,
    onOrder: true,
  },
];

// Наполнители
const fillerProducts = [
  {
    id: 1,
    title: "Фруктовые наполнители",
    img: napolnitel,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Ягодные наполнители",
    img: napolnitelKivi,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Шоколадно-ореховые наполнители",
    img: napolnitel,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Карамельные наполнители",
    img: napolnitelKivi,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Термостабильные наполнители",
    img: napolnitel,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Жировые наполнители",
    img: napolnitelKivi,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Гомогенные наполнители",
    img: napolnitel,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Наполнители с кусочками",
    img: napolnitelKivi,
    inStock: false,
    onOrder: true,
  },
];

// HoReCa
const horecaProducts = [
  {
    id: 1,
    title: "Смеси специй для бургеров",
    img: burger,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Панировочные смеси и кляры",
    img: burger2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Соусы быстрого приготовления",
    img: burger3,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Усилители вкуса и аромата",
    img: burger,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Добавки для фритюра",
    img: burger2,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Смеси для выпечки булочек",
    img: burger3,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Маринады быстрого приготовления",
    img: burger,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Функциональные добавки",
    img: burger2,
    inStock: false,
    onOrder: true,
  },
];

// Консерванты
const preservativeProducts = [
  {
    id: 1,
    title: "Низин - натуральный консервант",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  { id: 2, title: "Сорбат калия", img: bread, inStock: false, onOrder: true },
  { id: 3, title: "Бензоат натрия", img: bread, inStock: true, onOrder: false },
  {
    id: 4,
    title: "Натамицин для сыров",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Комплексные консервирующие смеси",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  { id: 6, title: "Антиоксиданты", img: bread, inStock: false, onOrder: true },
  {
    id: 7,
    title: "Натуральные консерванты",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Консервирующие системы",
    img: bread,
    inStock: false,
    onOrder: true,
  },
];

// Специи
const spiceProducts = [
  {
    id: 1,
    title: "Ванильные экстракты и стручки",
    img: spec,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Корица и кассия",
    img: spec2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Мускатный орех и кардамон",
    img: spec,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Имбирь и куркума",
    img: spec2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Смеси для выпечки",
    img: spec,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Ароматические травы и листья",
    img: spec2,
    inStock: false,
    onOrder: true,
  },
  { id: 7, title: "Цельные специи", img: spec, inStock: true, onOrder: false },
  { id: 8, title: "Молотые специи", img: spec2, inStock: false, onOrder: true },
];

// Стабилизаторы
const stabilizerProducts = [
  {
    id: 1,
    title: "Каррагинаны для молочных продуктов",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Ксантановая камедь",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Гуаровая камедь",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Пектины различной этерификации",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Желатины пищевые",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Стабилизаторы для йогуртов",
    img: bread,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Стабилизаторы для десертов",
    img: bread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Комплексные стабилизаторы",
    img: bread,
    inStock: false,
    onOrder: true,
  },
];

const productCategories = {
  dairy: { title: "Молочная продукция", products: dairyProducts },
  starter: { title: "Заквасочные культуры", products: starterProducts },
  bakery: {
    title: "Ингредиенты для хлебобулочных изделий",
    products: bakeryProducts,
  },
  cheese: {
    title: "Ингредиенты для сырных изделий",
    products: cheeseProducts,
  },
  colors: { title: "Пищевые красители", products: colorProducts },
  filler: { title: "Наполнители", products: fillerProducts },
  horeca: { title: "HoReCa", products: horecaProducts },
  preservatives: {
    title: "Консерванты",
    products: preservativeProducts,
  },
  spices: { title: "Специи", products: spiceProducts },
  stabilizers: { title: "Стабилизаторы", products: stabilizerProducts },
};

type ProductCategoryKey = keyof typeof productCategories;

interface ProductGridProps {
  category: ProductCategoryKey;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const navigate = useNavigate();

  const categoryData = productCategories[category];

  if (!categoryData) return null;

  const handleProductClick = (
    product: (typeof categoryData.products)[number]
  ) => {
    navigate(`/catalog/${category}/${product.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-8">{categoryData.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {product.title}
              </h3>

              <div className="flex gap-2 text-sm">
                <span
                  className={`px-2 py-1 rounded ${
                    product.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {product.inStock ? "В наличии" : "В наличии"}
                </span>

                <span
                  className={`px-2 py-1 rounded ${
                    product.onOrder
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  На заказ
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Высококачественные ингредиенты для производства пищевой продукции с
          отличными функциональными характеристиками и стабильным качеством.
        </p>
        <a
          href="https://wa.me/+996999223395"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Заказать по WhatsApp
        </a>
      </div>
    </div>
  );
};

// Компоненты для каждой категории
export const Dairy = () => <ProductGrid category="dairy" />;
export const Starter = () => <ProductGrid category="starter" />;
export const Bakery = () => <ProductGrid category="bakery" />;
export const Cheese = () => <ProductGrid category="cheese" />;
export const Colors = () => <ProductGrid category="colors" />;
export const Filler = () => <ProductGrid category="filler" />;
export const Horeca = () => <ProductGrid category="horeca" />;
export const Preservatives = () => <ProductGrid category="preservatives" />;
export const Spices = () => <ProductGrid category="spices" />;
export const Stabilizers = () => <ProductGrid category="stabilizers" />;

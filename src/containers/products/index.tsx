import zacvaska2 from "../../assets/images/products/ZMG_Wikipedia.png";
import sorbat from "../../assets/images/products/sorbat.jpg";
import milk from "../../assets/images/products/milk.png";
import milk2 from "../../assets/images/products/milk2.jpg";
import nachinki from "../../assets/images/products/nachinki.jpg";
import glazur from "../../assets/images/products/glazur.jpg";
import { useNavigate } from "react-router-dom";
import fosfor from "../../assets/images/himia/fosfor-v2.png";
import askorbinka from "../../assets/images/himia/askorbinka.png";
import benzot from "../../assets/images/himia/benzot.png";
import emulgator from "../../assets/images/himia/emulgator.png";
import karaginan from "../../assets/images/himia/karaginan-v2.png";
import aromat from "../../assets/images/milk/aromat.png";
import conser from "../../assets/images/milk/conser.png";
import ferment from "../../assets/images/milk/ferment.png";
import stabil from "../../assets/images/milk/stabil.png";
import stabils from "../../assets/images/milk/stabils.png";
import zmh from "../../assets/images/milk/zmh.png";
import fat from "../../assets/images/heroca/fat.png";
import ice from "../../assets/images/heroca/ice.png";
import nuggets from "../../assets/images/heroca/nuggets.png";
import oil from "../../assets/images/heroca/oil.png";
import potate from "../../assets/images/heroca/potate.png";
import drozh from "../../assets/images/bread/drozh.png";
import oreh from "../../assets/images/bread/oreh.png";
import vkus from "../../assets/images/bread/vkus.png";
import rasryh from "../../assets/images/bread/0287a6d8-5b3e-462e-8e71-ec5165f317a0.png";
import updatingBread from "../../assets/images/bread/updating-breadjpg.jpg";
import margarine from "../../assets/images/bread/margarine.jpg";
import smes from "../../assets/images/bread/smes.jpg";
import conditer from "../../assets/images/conditer/conditer.jpg";
import nachinki2 from "../../assets/images/conditer/nachinka.jpg";
import aromat2 from "../../assets/images/products/himia-v2.png";

// Молочная продукция
const dairyProducts = [
  {
    id: 1,
    title: "Заквасочные культуры",
    img: milk,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Стабилизаторы",
    img: stabils,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Ароматизаторы",
    img: aromat,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Консерванты",
    img: conser,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Ферменты",
    img: ferment,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Заменитель молочного жира",
    img: zmh,
    inStock: false,
    onOrder: true,
  },
  { id: 7, title: "СОМ", img: stabil, inStock: true, onOrder: false },
  {
    id: 8,
    title: "Сыворотка",
    img: milk2,
    inStock: false,
    onOrder: true,
  },
];

// Заквасочные культуры
const specializedFatsProducts = [
  {
    id: 1,
    title: "Заменитель молочного жира",
    img: zacvaska2,
    inStock: true,
    onOrder: false,
  },
];

// Хлебобулочные изделия
const bakeryProducts = [
  {
    id: 1,
    title: "Дрожжи",
    img: drozh,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Улучшители",
    img: vkus,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Маргарины",
    img: margarine,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Посыпки , семена , орехи",
    img: oreh,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Разрыхлители",
    img: rasryh,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Сухие смеси",
    img: conditer,
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Улучшители для выпечки",
    img: updatingBread,
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Смеси для хлеба",
    img: smes,
    inStock: false,
    onOrder: true,
  },
];

const сonfectioneryProducts = [
  {
    id: 1,
    title: "Сухие смеси",
    img: nachinki,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Начинки",
    img: nachinki2,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Ароматика",
    img: aromat2,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Глазури",
    img: glazur,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Сливки",
    img: milk,
    inStock: true,
    onOrder: false,
  },
];

// HoReCa
const horecaProducts = [
  {
    id: 1,
    title: "Профессиональные фритюрные масла",
    img: oil,
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Жиры",
    img: fat,
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Наггетсы",
    img: nuggets,
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Картофельные дольки, фри, cтейки",
    img: potate,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Замороженные ягоды",
    img: ice,
    inStock: true,
    onOrder: false,
  },
];

// Консерванты
const foodChemistryProducts = [
  {
    id: 1,
    title: "Сорбат",
    img: sorbat,
    inStock: true,
    onOrder: false,
  },
  { id: 2, title: "Фосфомикс", img: fosfor, inStock: false, onOrder: true },
  { id: 3, title: "Карагинан", img: karaginan, inStock: true, onOrder: false },
  {
    id: 4,
    title: "Аскорбиновая кислота",
    img: askorbinka,
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Эмульгаторы",
    img: emulgator,
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Бензоат натрия",
    img: benzot,
    inStock: false,
    onOrder: true,
  },
];

// Специи
// const spiceProducts = [
//   {
//     id: 1,
//     title: "Ванильные экстракты и стручки",
//     img: spec,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 2,
//     title: "Корица и кассия",
//     img: spec2,
//     inStock: false,
//     onOrder: true,
//   },
//   {
//     id: 3,
//     title: "Мускатный орех и кардамон",
//     img: spec,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 4,
//     title: "Имбирь и куркума",
//     img: spec2,
//     inStock: false,
//     onOrder: true,
//   },
//   {
//     id: 5,
//     title: "Смеси для выпечки",
//     img: spec,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 6,
//     title: "Ароматические травы и листья",
//     img: spec2,
//     inStock: false,
//     onOrder: true,
//   },
//   { id: 7, title: "Цельные специи", img: spec, inStock: true, onOrder: false },
//   { id: 8, title: "Молотые специи", img: spec2, inStock: false, onOrder: true },
// ];

// // Стабилизаторы
// const stabilizerProducts = [
//   {
//     id: 1,
//     title: "Каррагинаны для молочных продуктов",
//     img: bread,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 2,
//     title: "Ксантановая камедь",
//     img: bread,
//     inStock: false,
//     onOrder: true,
//   },
//   {
//     id: 3,
//     title: "Гуаровая камедь",
//     img: bread,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 4,
//     title: "Пектины различной этерификации",
//     img: bread,
//     inStock: false,
//     onOrder: true,
//   },
//   {
//     id: 5,
//     title: "Желатины пищевые",
//     img: bread,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 6,
//     title: "Стабилизаторы для йогуртов",
//     img: bread,
//     inStock: false,
//     onOrder: true,
//   },
//   {
//     id: 7,
//     title: "Стабилизаторы для десертов",
//     img: bread,
//     inStock: true,
//     onOrder: false,
//   },
//   {
//     id: 8,
//     title: "Комплексные стабилизаторы",
//     img: bread,
//     inStock: false,
//     onOrder: true,
//   },
// ];

const productCategories = {
  dairy: { title: "Молочное направление", products: dairyProducts },
  "specialized-fats": {
    title: "Специализированные жиры",
    products: specializedFatsProducts,
  },
  bakery: {
    title: "Хлебобулочные направления",
    products: bakeryProducts,
  },
  confectionery: {
    title: "Кондитерские направление",
    products: сonfectioneryProducts,
  },
  horeca: { title: "HoReCa", products: horecaProducts },
  "food-chemistry": {
    title: "Пищевая химия",
    products: foodChemistryProducts,
  },

  // colors: { title: "Пищевые красители", products: colorProducts },
  // filler: { title: "Наполнители", products: fillerProducts },
  // spices: { title: "Специи", products: spiceProducts },
  // stabilizers: { title: "Стабилизаторы", products: stabilizerProducts },
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
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer w-[270px]"
            onClick={() => handleProductClick(product)}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-contain"
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
export const Starter = () => <ProductGrid category="specialized-fats" />;
export const Bakery = () => <ProductGrid category="bakery" />;
export const Confectionery = () => <ProductGrid category="confectionery" />;
export const Horeca = () => <ProductGrid category="horeca" />;
export const FoodChemistry = () => <ProductGrid category="food-chemistry" />;
// export const Colors = () => <ProductGrid category="colors" />;
// export const Filler = () => <ProductGrid category="filler" />;
// export const Spices = () => <ProductGrid category="spices" />;
// export const Stabilizers = () => <ProductGrid category="stabilizers" />;

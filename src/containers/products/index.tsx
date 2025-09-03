import zacvaska2 from "../../assets/images/products/ZMG_Wikipedia.png";
import sorbat from "../../assets/images/products/sorbat.jpg";
import milk from "../../assets/images/products/milk.png";
import milk2 from "../../assets/images/products/milk2.jpg";
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
import stabils from "../../assets/images/milk/stabils.png";
import ice from "../../assets/images/heroca/ice.png";
import nuggets from "../../assets/images/heroca/nuggets.jpg";
import oil from "../../assets/images/heroca/oil.png";
import potate from "../../assets/images/heroca/potate.png";
import drozh from "../../assets/images/bread/drozh.png";
import oreh from "../../assets/images/bread/oreh.png";
import vkus from "../../assets/images/bread/vkus.png";
import updatingBread from "../../assets/images/bread/updating-breadjpg.jpg";
import margarine from "../../assets/images/bread/margarine.jpg";
import smes from "../../assets/images/bread/smes.jpg";
import conditer from "../../assets/images/conditer/conditer.jpg";
import nachinki2 from "../../assets/images/conditer/nachinka.jpg";
import aromat2 from "../../assets/images/products/himia-v2.png";
import suhieSmesi from "../../assets/images/conditer/suhie-smesi.jpg";
import slivki from "../../assets/images/conditer/slivki.jpg";
import zamMoloko from "../../assets/images/milk/zam-moloko.jpg";
import rasryh from "../../assets/images/milk/razryh.jpg";
import COM from "../../assets/images/conditer/COM.jpg";
import glazuri from "../../assets/images/fats/glazur-spec-fat.jpg";
import nachinkaChocolate from "../../assets/images/fats/nachinki-dlya-chocolate.jpg";
import nachinkaTesta from "../../assets/images/fats/nachinki-dlya-testa.jpg";
import sugar from "../../assets/images/fats/sugar.jpg";
import testo from "../../assets/images/fats/testo.jpg";

const dairyProducts = [
  {
    id: 1,
    title: "Заквасочные культуры",
    img: milk,
    url: "starterCultures",
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
    url: "enzymes",
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Заменитель молочного жира",
    img: zamMoloko,
    url: "/catalog/specialized-fats/milkFatReplacer",
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "СОМ",
    img: COM,
    url: "skimMilkPowder",
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Сыворотка",
    img: milk2,
    url: "whey",
    inStock: false,
    onOrder: true,
  },
];

const specializedFatsProducts = [
  {
    id: 1,
    title: "Заменитель молочного жира",
    img: zacvaska2,
    url: "milkFatReplacer",
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Жир для теста",
    img: testo,
    url: "doughFat",
    inStock: true,
    onOrder: false,
  },
  {
    id: 3,
    title: "Жир для мучных кондитерских изделий",
    img: nachinkaTesta,
    url: "flourConfectioneryFat",
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Жир для шоколадных кондитерских изделий",
    img: nachinkaChocolate,
    url: "chocolateConfectioneryFat",
    inStock: true,
    onOrder: false,
  },
  {
    id: 5,
    title: "Жир для глазури",
    img: glazuri,
    url: "coatingFat",
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Жир сахаристых изделий",
    img: sugar,
    url: "sugarConfectioneryFat",
    inStock: true,
    onOrder: false,
  },
];

const bakeryProducts = [
  {
    id: 1,
    title: "Дрожжи",
    img: drozh,
    url: "yeast",
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Улучшители",
    img: vkus,
    url: "improvers",
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Маргарины",
    img: margarine,
    url: "margarines",
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Посыпки , семена , орехи",
    img: oreh,
    url: "toppingsSeedsNuts",
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Разрыхлители",
    img: rasryh,
    url: "leavenIngAgents",
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Сухие смеси",
    img: suhieSmesi,
    url: "dryMixes",
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Улучшители для выпечки",
    img: updatingBread,
    url: "bakingImprovers",
    inStock: true,
    onOrder: false,
  },
  {
    id: 8,
    title: "Смеси для хлеба",
    img: smes,
    url: "breadMixes",
    inStock: false,
    onOrder: true,
  },
];

const сonfectioneryProducts = [
  {
    id: 1,
    title: "Сухие смеси",
    img: conditer,
    url: "dryMixesConfectionery",
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Начинки",
    img: nachinki2,
    url: "fillings",
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Ароматика",
    img: aromat2,
    url: "aromatics",
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Глазури",
    img: glazur,
    url: "glazes",
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Крем - сливки",
    img: slivki,
    url: "cream",
    inStock: true,
    onOrder: false,
  },
];

const horecaProducts = [
  {
    id: 1,
    title: "Профессиональные фритюрные масла",
    img: oil,
    url: "professionalFryingOils",
    inStock: true,
    onOrder: false,
  },
  // {
  //   id: 2,
  //   title: "Жиры",
  //   img: fat,
  //   url: "fats",
  //   inStock: false,
  //   onOrder: true,
  // },
  {
    id: 3,
    title: "Наггетсы",
    img: nuggets,
    // url: "nuggets",
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Картофельные дольки, фри, cтейки",
    img: potate,
    // url: "potatoWedgesFriesSteaks",
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Замороженные ягоды",
    img: ice,
    // url: "frozenBerries",
    inStock: true,
    onOrder: false,
  },
];

const foodChemistryProducts = [
  {
    id: 1,
    title: "Сорбат",
    img: sorbat,
    url: "sorbate",
    inStock: true,
    onOrder: false,
  },
  {
    id: 2,
    title: "Фосфомикс",
    img: fosfor,
    url: "phosphomix",
    inStock: false,
    onOrder: true,
  },
  {
    id: 3,
    title: "Карагинан",
    img: karaginan,
    url: "carrageenan",
    inStock: true,
    onOrder: false,
  },
  {
    id: 4,
    title: "Аскорбиновая кислота",
    img: askorbinka,
    url: "ascorbicAcid",
    inStock: false,
    onOrder: true,
  },
  {
    id: 5,
    title: "Эмульгаторы",
    img: emulgator,
    url: "emulsifiers",
    inStock: true,
    onOrder: false,
  },
  {
    id: 6,
    title: "Бензоат натрия",
    img: benzot,
    url: "sodiumBenzoate",
    inStock: false,
    onOrder: true,
  },
  {
    id: 7,
    title: "Гуаровая камедь,Е412 (загуститель), Китай",
    img: "https://images.satu.kz/224491578_w250_h250_guarovaya-kamede412-zagustitel.jpg",
    inStock: false,
    onOrder: true,
  },
  {
    id: 8,
    title: "Ксантановая камедь,Е415 (загуститель), Китай",
    img: "https://images.satu.kz/224489433_w250_h250_ksantanovaya-kamede415-zagustitel.jpg",
    inStock: false,
    onOrder: true,
  },
  {
    id: 9,
    title: "Гуммиарабик, Е414 (Gum Arabic), Китай",
    img: "https://images.satu.kz/224483681_w250_h250_gummiarabik-e414-gum.jpg",
    inStock: false,
    onOrder: true,
  },
  {
    id: 10,
    title: "Конжаковая камедь Е425 (пищевой загуститель)",
    img: "https://images.satu.kz/224473241_w250_h250_konzhakovaya-kamed-e425.jpg",
    inStock: false,
    onOrder: true,
  },
  {
    id: 11,
    title: "Карбоксиметилцеллюлоза Е 466 (кмц)",
    img: "https://images.satu.kz/188784961_w250_h250_karboksimetiltsellyuloza-e-466.jpg",
    inStock: false,
    onOrder: true,
  },
  {
    id: 12,
    title: "Альгинат натрия Е401 (вытяжка из водорослей)",
    img: "https://images.satu.kz/139348041_w250_h250_alginat-natriya-e401.jpg",
    inStock: false,
    onOrder: true,
  },
];

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
    if (product.url) {
      navigate(`${product.url}`);
    }
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
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4 ">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 text-nowrap text-ellipsis overflow-hidden">
                {product.title}
              </h3>

              <div className="flex gap-2 text-sm h-full items-end">
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

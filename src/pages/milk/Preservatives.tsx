import milk from "../../assets/images/products/milk.png";
import milk2 from "../../assets/images/products/milk2.jpg";
import { useState } from "react";

const sections = [
  { title: "Сухое обезжиренное молоко", img: milk },
  { title: "Сывороточные белковые концентраты", img: milk2 },
  { title: "Казеинаты и казеины" },
  { title: "Молочные жиры и сливки" },
  { title: "Лактоза и молочные сахара" },
  { title: "Функциональные молочные добавки" },
];

const Preservatives = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Молочная продукция</h1>
      <p>
        Комплексные решения для производства высококачественной молочной
        продукции, включая функциональные ингредиенты, добавки и технологические
        решения.
      </p>
      <p>
        Мы предлагаем полный спектр ингредиентов для различных видов молочной
        продукции.
      </p>

      {sections.map((sec, i) => (
        <div
          key={sec.title}
          className={`flex flex-col ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          } gap-8 items-start`}
        >
          {sec.img && (
            <img
              src={sec.img}
              alt={sec.title}
              className="rounded shadow-md w-[300px] md:w-[350px] object-cover"
            />
          )}

          <div>
            <div
              className={`${
                expandedSection === i ? "" : "max-h-[150px] overflow-hidden"
              } transition-all duration-500 mb-4`}
            >
              <h2 className="text-2xl font-semibold">{sec.title}</h2>
              <p className="mb-3">
                Наши ингредиенты позволяют производителям разрабатывать
                инновационные молочные продукты с улучшенными функциональными
                характеристиками, текстурой и вкусом.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Улучшение питательной ценности и сроков хранения</li>
                <li>Оптимизация консистенции и структуры</li>
                <li>Снижение себестоимости без потери качества</li>
              </ul>
              <p className="mb-4">
                Все компоненты соответствуют международным стандартам качества,
                имеют сертификаты халяль и кошер, и могут использоваться в любом
                технологическом процессе.
              </p>
              <a
                href="https://wa.me/+996999223395"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
              >
                Заказать по WhatsApp
              </a>
            </div>
            <button
              className="text-blue-500 underline cursor-pointer"
              onClick={() => toggleSection(i)}
            >
              {expandedSection === i ? "Скрыть" : "Подробнее"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preservatives;

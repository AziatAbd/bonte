import dye from "../../assets/images/products/dye.jpg";
import dye2 from "../../assets/images/products/dye2.jpeg";
import { useState } from "react";

const sections = [
  { title: "Пищевые красители для напитков", img: dye },
  { title: "Пищевые красители для выпечки", img: dye2 },
  { title: "Красители для молочных продуктов" },
  { title: "Красители для кондитерских изделий" },
  { title: "Натуральные пищевые красители" },
  { title: "Синтетические красители (по запросу)" },
];

const Colors = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Пищевые красители</h1>
      <p>
        Красители широко применяются в различных отраслях пищевой промышленности
        для придания продукции привлекательного внешнего вида.
      </p>
      <p>
        Пищевые красители используются для окрашивания напитков, выпечки,
        кремов, теста, кондитерских украшений, конфет и других продуктов.
      </p>
      <p>
        У нас представлен широкий ассортимент красителей, включая натуральные и
        синтетические варианты. Также возможно индивидуальное изготовление под
        ваш запрос.
      </p>

      {sections.map((sec, i) => (
        <div
          key={sec.title}
          className={`flex ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
                В зависимости от задач вы можете выбрать натуральные или
                синтетические красители, каждый из которых обладает своей
                устойчивостью к температуре, свету и pH.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Широкая палитра цветов</li>
                <li>Подходит для всех видов пищевых продуктов</li>
                <li>Доступны концентраты и порошковые формы</li>
              </ul>
              <p className="mb-4">
                Все продукты соответствуют стандартам безопасности пищевых
                добавок и прошли сертификацию.
              </p>
              <a
                href="https://wa.me/+996500000020"
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

export default Colors;

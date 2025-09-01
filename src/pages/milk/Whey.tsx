import whey from "../../assets/images/products/milk2.jpg";
import { useState } from "react";

const sections = [{ title: "Сывороточные белковые концентраты", img: whey }];

const Whey = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Сывороточные продукты</h1>
      <p>
        Комплексные решения для производства высококачественных молочных
        продуктов на основе сыворотки, включая белковые концентраты и
        функциональные ингредиенты.
      </p>
      <p>
        Сывороточные продукты обеспечивают высокую питательную ценность,
        улучшенную текстуру и стабильность готовой продукции.
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
                Наши сывороточные продукты помогают производителям:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Повышать содержание белка и питательную ценность</li>
                <li>Оптимизировать текстуру, консистенцию и растворимость</li>
                <li>Обеспечивать стабильность и длительный срок хранения</li>
              </ul>
              <p className="mb-4">
                Все компоненты соответствуют международным стандартам качества,
                имеют сертификаты халяль и кошер и подходят для промышленного
                производства.
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

export default Whey;

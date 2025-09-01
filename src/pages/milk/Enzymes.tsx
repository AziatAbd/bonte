import enzymeImg from "../../assets/images/milk/ferment.png";
import { useState } from "react";

const sections = [
  { title: "Ферменты для молочной промышленности", img: enzymeImg },
];

const Enzymes = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Ферменты для молочной продукции</h1>

      <p>
        Комплексные решения для производства высококачественной молочной
        продукции с использованием ферментов, обеспечивающих оптимальную
        текстуру, вкус и функциональные свойства.
      </p>
      <p>
        Наши ферменты подходят для различных технологий переработки молока,
        йогуртов, сыров и других продуктов.
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
                Наши ферменты позволяют улучшить процессы створаживания,
                повышения консистенции и вкусовых характеристик молочной
                продукции.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Оптимизация текстуры йогуртов и сыров</li>
                <li>Повышение стабильности и сроков хранения</li>
                <li>Улучшение органолептических свойств продуктов</li>
              </ul>
              <p className="mb-4">
                Все ферменты соответствуют международным стандартам качества,
                имеют сертификаты халяль и кошер, и полностью совместимы с
                промышленными технологическими процессами.
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

export default Enzymes;

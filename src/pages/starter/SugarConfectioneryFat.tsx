import sugarFat from "../../assets/images/fats/sugar.jpg";
import { useState } from "react";

const sections = [
  { title: "Жир для сахаристых кондитерских изделий", img: sugarFat },
];

const SugarConfectioneryFat = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Жир для сахаристых кондитерских изделий
      </h1>
      <p>
        Наш жир для сахаристых изделий — это высококачественный растительный
        продукт, специально разработанный для кондитерской промышленности.
      </p>
      <p>
        Он обеспечивает стабильность при кондитерской обработке, улучшает
        текстуру и блеск глазури, карамели и других сладких изделий.
      </p>
      <p>Применение:</p>
      <ul className="list-disc list-inside">
        <li>Шоколадные конфеты и плитки;</li>
        <li>Карамель и ирис;</li>
        <li>Глазури и помадки;</li>
        <li>Сахаристые начинки;</li>
        <li>Декоративные покрытия и фигурки.</li>
      </ul>
      <p>
        Жир для сахаристых изделий обладает нейтральным вкусом, равномерно
        распределяется в массе и поддерживает привлекательный внешний вид и
        текстуру готовой продукции.
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
              <p>
                Жир представляет собой тщательно сбалансированную смесь
                растительных жиров и масел премиум-класса, обеспечивающую
                однородность сладких масс и улучшенные органолептические
                свойства изделий.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Стабильность при термообработке и хранении;</li>
                <li>Блеск и однородная текстура глазурей;</li>
                <li>Отсутствие посторонних запахов и привкусов;</li>
                <li>Повышение срока годности продукции;</li>
                <li>Совместимость с сахаристыми компонентами.</li>
              </ul>
              <p>
                Идеален для всех видов сахаристых кондитерских изделий,
                обеспечивая им привлекательный внешний вид, приятную текстуру и
                стабильные качества при хранении.
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

export default SugarConfectioneryFat;

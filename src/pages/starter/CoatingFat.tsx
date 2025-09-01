import glazeFat from "../../assets/images/fats/glazur-spec-fat.jpg";
import { useState } from "react";

const sections = [
  { title: "Жир для глазури и кондитерских покрытий", img: glazeFat },
];

const CoatingFat = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Жир для глазури и кондитерских покрытий
      </h1>
      <p>
        Наш жир для глазури и кондитерских покрытий — это высококачественный
        растительный продукт, специально разработанный для производства
        глазурей, шоколадных и кондитерских изделий.
      </p>
      <p>
        Он обеспечивает оптимальную пластичность, стабильность при температурных
        колебаниях и улучшенные органолептические характеристики готовой
        продукции.
      </p>
      <p>Основные области применения:</p>
      <ul className="list-disc list-inside">
        <li>Шоколадные и глазурные покрытия;</li>
        <li>Кремовые и кондитерские начинки;</li>
        <li>Выпечка и десерты;</li>
        <li>Молочные и шоколадные смеси;</li>
        <li>Специализированные кондитерские продукты.</li>
      </ul>
      <p>
        Продукт соответствует международным стандартам качества, имеет
        сертификаты безопасности и пищевой пригодности, обеспечивая стабильность
        вкуса и текстуры изделий.
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
                Жир для глазури представляет собой тщательно сбалансированную
                смесь растительных жиров и масел, обеспечивающую стабильность,
                пластичность и нейтральный вкус.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Стабильность при термической обработке;</li>
                <li>Оптимальная консистенция и текстура;</li>
                <li>Улучшение вкусовых и органолептических характеристик;</li>
                <li>Совместимость с другими ингредиентами;</li>
                <li>Отсутствие холестерина и вредных примесей.</li>
              </ul>
              <p>
                Идеально подходит для производства глазурей, шоколадных покрытий
                и кондитерских изделий, обеспечивая им превосходный вкус,
                внешний вид и текстуру.
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

export default CoatingFat;

import flourFat from "../../assets/images/fats/nachinki-dlya-testa.jpg";
import { useState } from "react";

const sections = [
  { title: "Жир для мучных кондитерских изделий", img: flourFat },
];

const FlourConfectioneryFat = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Жир для мучных кондитерских изделий
      </h1>
      <p>
        Наш жир для мучных кондитерских изделий — это высококачественный
        растительный продукт, специально разработанный для кондитерской
        промышленности.
      </p>
      <p>
        Он обеспечивает оптимальную пластичность теста, равномерное
        распределение жиров и стабильность структуры при выпечке.
      </p>
      <p>Применение:</p>
      <ul className="list-disc list-inside">
        <li>Печенье, кексы и пирожные;</li>
        <li>Слойки, круассаны и сдобное тесто;</li>
        <li>Кондитерские начинки;</li>
        <li>Продукция с длительным сроком хранения;</li>
        <li>Специализированные мучные изделия.</li>
      </ul>
      <p>
        Жир для мучных изделий соответствует международным стандартам качества,
        обладает стабильной структурой и нейтральным вкусом, что позволяет
        сохранять привлекательный внешний вид и текстуру готовой продукции.
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
                однородность теста и улучшенные органолептические свойства
                изделий.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Оптимальная пластичность теста;</li>
                <li>Стабильность при выпечке;</li>
                <li>Увеличение срока годности продукции;</li>
                <li>Совместимость с различными ингредиентами;</li>
                <li>Отсутствие холестерина и вредных примесей.</li>
              </ul>
              <p>
                Подходит для всех видов мучных изделий, обеспечивая равномерную
                текстуру, стабильность и привлекательный внешний вид.
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

export default FlourConfectioneryFat;

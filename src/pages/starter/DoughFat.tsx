import doughFat from "../../assets/images/fats/testo.jpg";
import { useState } from "react";

const sections = [{ title: "Жир для теста и выпечки", img: doughFat }];

const DoughFat = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Жир для теста и выпечки</h1>
      <p>
        Наш жир для теста — это высококачественный растительный продукт,
        специально разработанный для хлебопекарной и кондитерской
        промышленности.
      </p>
      <p>
        Он улучшает пластичность теста, обеспечивает равномерное распределение
        жиров и стабильность структуры при термообработке.
      </p>
      <p>Основные области применения:</p>
      <ul className="list-disc list-inside">
        <li>Сдобное и дрожжевое тесто;</li>
        <li>Печенье, пирожные и кексы;</li>
        <li>Слойки и круассаны;</li>
        <li>Кондитерские начинки и кремы;</li>
        <li>Специализированные выпечки с повышенной сроком хранения.</li>
      </ul>
      <p>
        Продукт соответствует международным стандартам качества, имеет
        сертификаты безопасности и пищевой пригодности, обеспечивая стабильность
        текстуры, вкуса и внешнего вида изделий.
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
                Жир для теста представляет собой тщательно сбалансированную
                смесь растительных жиров и масел, обеспечивающую однородную
                структуру теста и улучшенные органолептические свойства.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Оптимальная пластичность и структура теста;</li>
                <li>Стабильность при термообработке;</li>
                <li>Увеличение срока годности готовой продукции;</li>
                <li>Совместимость с различными ингредиентами;</li>
                <li>Отсутствие холестерина и вредных примесей.</li>
              </ul>
              <p>
                Идеально подходит для хлебобулочных изделий, печенья, пирогов и
                других кондитерских изделий, обеспечивая равномерную текстуру и
                привлекательный внешний вид.
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

export default DoughFat;

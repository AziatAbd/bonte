import chocoFat from "../../assets/images/fats/nachinki-dlya-chocolate.jpg";
import { useState } from "react";

const sections = [
  { title: "Жир для шоколадных и кондитерских изделий", img: chocoFat },
];

const ChocolateConfectioneryFat = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">
        Жир для шоколадных и кондитерских изделий
      </h1>
      <p>
        Наш жир для шоколадной и кондитерской промышленности — это
        высококачественный растительный продукт, обеспечивающий отличные
        технологические свойства и стабильность готовой продукции.
      </p>
      <p>
        Продукт позволяет создавать шоколадные конфеты, кондитерские кремы,
        начинки и глазури с улучшенной пластичностью, оптимальной температурой
        плавления и длительным сроком хранения.
      </p>
      <p>Основные области применения жира:</p>
      <ul className="list-disc list-inside">
        <li>Шоколадные и глазурные покрытия;</li>
        <li>Кремовые начинки и кондитерские наполнители;</li>
        <li>Выпечка и десерты;</li>
        <li>Молочные и шоколадные смеси;</li>
        <li>Специализированные кондитерские продукты.</li>
      </ul>
      <p>
        Жир полностью соответствует международным стандартам качества, имеет
        сертификаты безопасности и пищевой пригодности, а также обеспечивает
        стабильность органолептических характеристик изделий.
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
                Жир для шоколадных и кондитерских изделий представляет собой
                высококачественную растительную смесь, идеально подходящую для
                профессионального производства сладких изделий.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Стабильность при термообработке и хранении;</li>
                <li>Оптимальная консистенция и текстура;</li>
                <li>Улучшение вкусовых и органолептических свойств;</li>
                <li>Совместимость с другими жирами и ингредиентами;</li>
                <li>Отсутствие холестерина и вредных примесей.</li>
              </ul>
              <p>
                Продукт полностью сертифицирован и рекомендован для
                использования в производстве шоколада и кондитерских изделий.
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

export default ChocolateConfectioneryFat;

import nuggets from "../../assets/images/heroca/nuggets.jpg";
import burger2 from "../../assets/images/heroca/ice.png";
import burger3 from "../../assets/images/heroca/potate.png";
import { useState } from "react";

const sections = [
  { title: "Смеси специй для бургеров и мясных блюд", img: nuggets },
  { title: "Панировочные смеси и кляры", img: burger2 },
  { title: "Соусы и маринады быстрого приготовления", img: burger3 },
  { title: "Усилители вкуса и аромата" },
  { title: "Функциональные добавки для фритюра" },
  { title: "Готовые смеси для выпечки булочек и хлеба" },
];

const ProfessionalFryingOils = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">HoReCa (Hotel, Restaurant, Cafe)</h1>
      <p>
        Специализированные ингредиенты и решения для сферы общественного
        питания, включая рестораны, кафе, фаст-фуд и кейтеринг.
      </p>
      <p>
        Мы предлагаем широкий ассортимент продуктов, которые позволяют готовить
        блюда быстро, стабильно и с отличными вкусовыми качествами.
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
                Ингредиенты подобраны с учётом высокой проходимости и
                необходимости быстрого обслуживания без потери качества.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Оптимизация вкуса и текстуры готовых блюд</li>
                <li>Снижение времени приготовления</li>
                <li>Устойчивость к заморозке и нагреванию</li>
              </ul>
              <p className="mb-4">
                Все продукты соответствуют требованиям пищевой безопасности и
                подходят для использования в любых форматах заведений
                общественного питания.
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

export default ProfessionalFryingOils;

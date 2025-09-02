import nuggets from "../../assets/images/heroca/oil.png";
import { useState } from "react";

const sections = [
  {
    title: "Профессиональные фритюрные масла",
    img: nuggets,
    infoList: [
      {
        label: "высокое качество",
      },
      {
        label: "стабильность функциональных свойств каждой партии",
      },
      {
        label:
          "cмесь растительных масел лучше раскрывает вкус, аромат готового продукта и придает привычный внешний вид обжаренного продукта",
      },
    ],
  },
  {
    title: "Фритюрная смесь ПРОФИЛЮКС",
    img: "https://www.cargill.ru/image/1432164979023/horeca-inpage1.jpg?v=1591385191000",
    infoList: [
      {
        label: "Обеспечивает высокую стойкость к окислению",
      },
      {
        label:
          "Работает в 3 раза дольше во фритюре по сравнению с фритюрным подсолнечным маслом",
      },
      {
        label:
          "Продукты равномерно прожариваются, сохраняя свой традиционный вкус, привлекательный внешний вид и хрустящую корочку",
      },
      {
        label:
          "Высокое содержание физиологически ценной олеиновой кислоты С18:1",
      },
    ],
  },
  {
    title: "Фритюрная смесь ВЕГАФРАЙ 05",
    img: "https://www.cargill.ru/image/1432164979309/horeca-inpage2.jpg?v=1591385354000",
    infoList: [
      {
        label:
          "Работает в 2 раза дольше во фритюре по сравнению с фритюрным подсолнечным маслом",
      },
      {
        label:
          "Смесь идеальна для обжарки различных продуктов во фритюре (куриных и мясных полуфабрикатов, картофеля-фри, пончиков)",
      },
      {
        label:
          "Экономное расходование фритюрной смеси за счет меньшей впитываемости",
      },
      {
        label:
          "Продукты равномерно прожариваются, сохраняя свой традиционный вкус, привлекательный внешний вид и хрустящую корочку",
      },
    ],
  },
  {
    title: "Фритюрное масло SUNNY GOLD",
    img: "https://www.cargill.ru/image/1432164979726/horeca-inpage3.jpg?v=1591385560000",
    infoList: [
      {
        label:
          "Позволяет увеличить количество приготовленных порций по сравнению с традиционными  растительными маслами",
      },
      {
        label: "Минимизирует пенообразование",
      },
      {
        label:
          "Содержит комплекс антиоксидантов, улучшающих качество конечного продукта и продлевающих жизнь масла во фритюрнице",
      },
    ],
  },
  {
    title: "Фритюрное масло iFry",
    img: "https://www.cargill.ru/image/1432164980017/horeca-inpage4.jpg?v=1591385724000",
    infoList: [
      {
        label:
          "Масло фритюрное iFry имеет улучшенные по сравнению с подсолнечным маслом обжарочные характеристики",
      },
      {
        label: "Минимизирует пенообразование",
      },
    ],
  },
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
        Наши фритюрные масла имеют свой уникальный жирно-кислотный состав.
        Именно многообразие используемого сырья позволяет нам предлагать
        продукты, удовлетворяющие широким требованиям наших клиентов при
        значительной экономии затрат.
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
              <ul className="list-disc list-inside mb-3 space-y-1">
                {sec.infoList.map((item) => (
                  <li>{item.label}</li>
                ))}
              </ul>
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

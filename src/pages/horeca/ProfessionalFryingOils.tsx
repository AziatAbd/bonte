import nuggets from "../../assets/images/heroca/oil.png";
import { useState } from "react";

const sections = [{ title: "Профессиональные фритюрные масла", img: nuggets }];

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
              <p className="mb-3">
                Преимущества наших фритюрных масел и смесей:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>высокое качество</li>
                <li>стабильность функциональных свойств каждой партии</li>
                <li>
                  cмесь растительных масел лучше раскрывает вкус, аромат
                  готового продукта и придает привычный внешний вид обжаренного
                  продукта
                </li>
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

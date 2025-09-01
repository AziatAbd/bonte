import { useState } from "react";

const sections = [
  {
    title: "Заменители молочного жира",
    description:
      "Заменители молочного жира Вегастар® придают спредам требуемую пластичность и термоустойчивость, обладают нейтральным вкусом, что позволяет создать желаемый вкусовой профиль готовому изделию.",
    img: "https://www.cargill.ru/image/1432165106327/diary-inpage1.jpg?v=1591624467000",
  },
  {
    title: "Сывороточные белковые концентраты",
    description:
      "идеально подходят для производства продуктов, произведенных по технологии творога: от рассыпчатых с зернистой текстурой, до мягких, пастообразных.",
    img: "https://www.cargill.ru/image/1432165106593/diary-inpage2.jpg?v=1591625627000",
  },
  {
    title: "Казеинаты и казеины",
    description:
      "Заменители молочного жира Вегастар® сохраняют необходимую консистенцию и характерные кисломолочный вкус и запах продуктов, произведенных по технологии сметаны.",
    img: "https://www.cargill.ru/image/1432165107111/diary-inpage3.jpg?v=1591625928000",
  },
  {
    title: "Молочные жиры и сливки",
    description:
      "Вегастар® гарантируют получение продукции с наилучшим выходом вкуса, высокой взбиваемостью и мягкой сливочной текстурой, характерной для мороженого и замороженных десертов.",
    img: "https://www.cargill.ru/image/1432165107449/diary-inpage4.jpg?v=1591626097000",
  },
  {
    title: "Лактоза и молочные сахара",
    description:
      "Заменители молочного жира Вегастар® используются в качестве жировой составляющей и обеспечивают характерный для сгущенной продукции профиль вкуса и аромат.",
    img: "https://www.cargill.ru/image/1432165108450/diary-inpage5.jpg?v=1591626849000",
  },
  {
    title: "Функциональные молочные добавки",
    description:
      "Заменители молочного жира Вегастар®  обеспечивают данным продуктам получение типичного сырного вкуса и требуемой консистенции, сохраняя их в течение всего срока годности.",
    img: "https://www.cargill.ru/image/1432165109097/diary-inpage6.jpg?v=1591627109000",
  },
];

const MilkFatReplacer = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Молочная продукция</h1>
      <p>
        Комплексные решения для производства высококачественной молочной
        продукции, включая функциональные ингредиенты, добавки и технологические
        решения.
      </p>
      <p>
        Мы предлагаем полный спектр ингредиентов для различных видов молочной
        продукции.
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
            <div className={`transition-all duration-500 mb-4`}>
              <h2 className="text-2xl font-semibold">{sec.title}</h2>
              <p className="mb-3">{sec.description}</p>

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

export default MilkFatReplacer;

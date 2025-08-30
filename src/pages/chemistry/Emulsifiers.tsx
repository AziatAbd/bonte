import fosfor from "../../assets/images/himia/fosfor-v2.png";
import askorbinka from "../../assets/images/himia/askorbinka.png";
import benzot from "../../assets/images/himia/benzot.png";
import emulgator from "../../assets/images/himia/emulgator.png";
import karaginan from "../../assets/images/himia/karaginan-v2.png";

const images = [fosfor, askorbinka, benzot, emulgator, karaginan];

const sections = [
  {
    title: "Пищевая химия",
    description: (
      <>
        <p>
          Высококачественные химические добавки для пищевой промышленности,
          включая консерванты, стабилизаторы и функциональные ингредиенты для
          улучшения качества и безопасности пищевых продуктов.
        </p>
        <p>
          В ассортименте представлены проверенные временем решения для различных
          отраслей пищевого производства:
        </p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>сорбат калия для консервирования продуктов;</li>
          <li>фосфомикс для улучшения текстуры и стабилизации;</li>
          <li>комплексные функциональные смеси для специфических задач.</li>
        </ul>
        <p>
          Наши ингредиенты соответствуют международным стандартам качества и
          обеспечивают стабильные технологические результаты в промышленном
          производстве.
        </p>
      </>
    ),
  },
  {
    title: "Основные продукты",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Сорбат калия (E202) - универсальный консервант</li>
        <li>Фосфомикс - стабилизирующая смесь фосфатов</li>
        <li>Бензоат натрия (E211)</li>
        <li>Цитрат натрия (E331)</li>
        <li>Полифосфаты для мясной промышленности</li>
        <li>Антиоксидантные системы</li>
      </ul>
    ),
  },
];

const Emulsifiers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">
        Пищевая химия: Сорбат, Фосфомикс
      </h1>

      {sections.map((section, i) => (
        <div
          key={section.title}
          className={`flex gap-8 items-start ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {images[i] && (
            <img
              src={images[i]}
              alt={section.title}
              className="rounded shadow-md w-[300px] md:w-[350px] object-cover"
            />
          )}

          <div className="flex-1">
            <div
              className={`transition-[max-height] duration-500 ease-in-out mb-4`}
            >
              <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              <div>{section.description}</div>
            </div>

            <a
              href="https://wa.me/+996999223395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
            >
              Заказать по WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Emulsifiers;

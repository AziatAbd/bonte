import fosfor from "../../assets/images/himia/fosfor-v2.png";

const sections = [
  {
    title: "Пищевая химия",
    image: fosfor,
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
];

const Phosphomix = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">
        Пищевая химия: Сорбат, Фосфомикс
      </h1>

      {sections.map((section, i) => (
        <div
          key={section.title}
          className={`flex flex-col md:flex-row gap-8 items-start ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              className="rounded shadow-md w-full md:w-[350px] object-cover"
            />
          )}

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <div className="mb-4">{section.description}</div>

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

export default Phosphomix;

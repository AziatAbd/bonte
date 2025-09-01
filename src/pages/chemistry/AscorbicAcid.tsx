import askorbinka from "../../assets/images/himia/askorbinka.png";

const images = [askorbinka];

const sections = [
  {
    title: "Основные продукты",
    description: (
      <p>
        В качестве активатора выработки рН аскорбиновую кислоту можно найти в
        списке ингредиентов многих продуктов в вашей кухонной кладовой, включая
        консервы, конфеты и хрустящие закуски. Она также известна как "кислая
        соль" из-за своего вкуса и схожего с солью внешнего вида и текстуры.
      </p>
    ),
  },
];

const AscorbicAcid = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">
        Пищевая химия: Аскорбиновая кислота
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

export default AscorbicAcid;

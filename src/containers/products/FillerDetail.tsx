import napolnitel from "../../assets/images/products/napolnitel.jpeg";
import napolnitelKivi from "../../assets/images/products/napolnitel-kivi.jpeg";

const sections = [
  {
    title: "Гомогенные и с кусочками",
    img: napolnitel,
    description: (
      <>
        <p>
          Превосходное решение для придания незабываемого вкуса и аромата
          молочным продуктам, в том числе десертам, йогуртам и мороженому.
        </p>
        <p>
          Мы предлагаем разнообразные наполнители, начинки и поливки для
          производства йогуртов, творожков, мороженого.
        </p>
      </>
    ),
  },
  {
    title: "Термостабильные и жировые",
    img: napolnitelKivi,
    description: (
      <>
        <p>
          Фруктовые и овощные, шоколадно-ореховые и карамельные, пикантные и
          гастрономические – невероятное количество вкусов и форм.
        </p>
        <p>
          Наши наполнители для молочной промышленности могут использоваться в
          разнообразных продуктах различными способами.
        </p>
      </>
    ),
  },
  {
    title: "Категории молочных продуктов",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Густые йогурты</li>
        <li>Питьевые йогурты</li>
        <li>Творожки и молочные десерты</li>
        <li>Молочные коктейли и смузи</li>
        <li>Сывороточные напитки</li>
        <li>Простокваши, ряженки, кефиры и другие кисломолочные продукты</li>
      </ul>
    ),
  },
];

const FillerDetail = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">Наполнители</h1>

      {sections.map((sec, i) => (
        <div
          key={sec.title}
          className={`flex gap-8 items-start ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {sec.img && (
            <img
              src={sec.img}
              alt={sec.title}
              className="rounded shadow-md w-[300px] md:w-[350px] object-cover"
            />
          )}

          <div className="flex-1">
            <div
              className={`transition-[max-height] duration-500 ease-in-out mb-4`}
            >
              <h2 className="text-2xl font-semibold mb-3">{sec.title}</h2>
              <div>{sec.description}</div>
            </div>

            <a
              href="https://wa.me/+996500000020"
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

export default FillerDetail;

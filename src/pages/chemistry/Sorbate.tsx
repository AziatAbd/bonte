import sorbat from "../../assets/images/products/sorbat.jpg";

const images = [sorbat];

const sections = [
  {
    title: "Сорбат",
    description: (
      <>
        <p>
          Сорбат калия Е202 (калиевая соль сорбиновой кислоты) – искусственная
          пищевая добавка, используемая в пищевой промышленности в качестве
          консерванта.
        </p>
        <p>Сорбат калия применяется в производстве:</p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li> майонеза,</li>
          <li>алкогольных и безалкогольных напитков,</li>
          <li>молочных продуктов,</li>
          <li>маргарина,</li>
          <li>сыров,</li>
          <li>колбасных изделий,</li>
          <li>консервированных фруктов,</li>
          <li>сухофруктов,</li>
          <li>рыбных консервов,</li>
          <li>кондитерских изделий,</li>
          <li>для обработки поверхности хлебобулочных изделий,</li>
          <li>для изготовления упаковочных материалов.</li>
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

const Sorbate = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">Пищевая химия: Сорбат</h1>

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

export default Sorbate;

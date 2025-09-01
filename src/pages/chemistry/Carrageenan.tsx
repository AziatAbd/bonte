import carrageenanImg from "../../assets/images/himia/karaginan-v2.png";

const images = [carrageenanImg];

const sections = [
  {
    title: "Карагинан – натуральный загуститель и стабилизатор",
    description: (
      <>
        <p>
          Карагинан – это пищевая добавка, получаемая из красных морских
          водорослей. Используется для улучшения текстуры, стабилизации и
          увеличения вязкости различных пищевых продуктов, включая молочные и
          кондитерские изделия.
        </p>
        <p>
          Благодаря своим свойствам, карагинан помогает создавать продукты с
          однородной консистенцией, продлевает срок хранения и улучшает
          органолептические характеристики.
        </p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>стабилизация и загущение молочных и растительных продуктов;</li>
          <li>улучшение текстуры кремов, йогуртов и соусов;</li>
          <li>поддержание однородности и предотвращение расслаивания;</li>
          <li>продление свежести готовых продуктов.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Применение и виды карагинана",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Джеллановые и кристаллические формы для разных текстур</li>
        <li>
          Использование в молочной продукции (йогурты, десерты, мороженое)
        </li>
        <li>Применение в соусах и напитках для стабилизации</li>
        <li>Комбинированные смеси для кондитерских изделий и мороженого</li>
      </ul>
    ),
  },
];

const Carrageenan = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">
        Карагинан – натуральный загуститель и стабилизатор
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
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <div>{section.description}</div>

            <a
              href="https://wa.me/+996999223395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 mt-4"
            >
              Заказать по WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrageenan;

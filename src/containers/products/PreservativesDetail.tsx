const images = [
  "https://ingredients.kg/uploads/catalog/3985395fa3ff3716393a5e4deedf7958.jpeg",
  "https://ingredients.kg/uploads/catalog/11d57783500c194adad117ed01544aa3.jpg",
];

const sections = [
  {
    title: "Консерванты",
    description: (
      <>
        <p>
          Эффективные консерванты для продления срока годности молочных
          продуктов и обеспечения их микробиологической безопасности.
        </p>
        <p>
          В ассортименте представлены различные типы консервантов для широкого
          спектра применения:
        </p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>натуральные консерванты (низин, натамицин);</li>
          <li>традиционные консерванты (сорбаты, бензоаты);</li>
          <li>комплексные консервирующие системы для конкретных продуктов.</li>
        </ul>
        <p>
          Наши консерванты помогают производителям обеспечить безопасность
          продукции и увеличить срок ее хранения без ущерба для вкуса и
          качества.
        </p>
      </>
    ),
  },
  {
    title: "Типы консервантов",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Низин - натуральный консервант</li>
        <li>Сорбат калия</li>
        <li>Бензоат натрия</li>
        <li>Натамицин для сыров</li>
        <li>Комплексные консервирующие смеси</li>
        <li>Антиоксиданты</li>
      </ul>
    ),
  },
];

const PreservativesDetail = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">Консерванты</h1>

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

export default PreservativesDetail;

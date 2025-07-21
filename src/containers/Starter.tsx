import zacvaski from "../assets/images/products/zacvaski.jpg";

const Starter = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Закваски</h1>
      <p className="mb-2">
        Высококачественные закваски для производства кисломолочных продуктов,
        обеспечивающие стабильное качество и превосходный вкус готовой
        продукции.
      </p>
      <p className="mb-4">
        Мы предлагаем широкий ассортимент заквасок для различных видов молочных
        продуктов:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>прямого внесения (DVS) и традиционные материнские закваски;</li>
        <li>термофильные и мезофильные культуры;</li>
        <li>
          специализированные закваски для йогуртов, кефиров, творога и сыров.
        </li>
      </ul>
      <p className="mb-4">
        Наши закваски гарантируют стабильную ферментацию, оптимальную
        кислотность и формирование характерной текстуры продукта.
      </p>

      <h2 className="text-lg font-semibold mb-2">Виды заквасок:</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Закваски для йогуртов и питьевых йогуртов</li>
        <li>Кефирные закваски</li>
        <li>Закваски для творога и творожных продуктов</li>
        <li>Сырные закваски</li>
        <li>Пробиотические культуры</li>
        <li>Закваски для сметаны и ряженки</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={zacvaski}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Starter;

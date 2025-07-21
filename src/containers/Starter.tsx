import zacvaski from "../assets/images/products/zacvaski.jpg";
import zacvaska2 from "../assets/images/products/zacvaska2.jpg";
import zacvaska3 from "../assets/images/products/zacvaska3.jpeg";

const Starter = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10 font-[Helvetica]">
      <div className="flex flex-col gap-4">
        <img
          src={zacvaski}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={zacvaska2}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={zacvaska3}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Закваски</h1>
        <p className="mb-3">
          Высококачественные закваски для производства кисломолочных продуктов,
          обеспечивающие стабильное качество и превосходный вкус готовой
          продукции.
        </p>
        <p className="mb-3">
          Мы предлагаем широкий ассортимент заквасок для различных видов
          молочных продуктов:
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
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Закваски для йогуртов и питьевых йогуртов</li>
          <li>Кефирные закваски</li>
          <li>Закваски для творога и творожных продуктов</li>
          <li>Сырные закваски</li>
          <li>Пробиотические культуры</li>
          <li>Закваски для сметаны и ряженки</li>
        </ul>

        <a
          href="https://wa.me/+996500000020"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
        >
          ЗАКАЗАТЬ ПО WHATSAPP
        </a>
      </div>
    </main>
  );
};

export default Starter;

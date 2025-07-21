import napolnitel from "../../assets/images/products/napolnitel.jpeg";
import napolnitelKivi from "../../assets/images/products/napolnitel-kivi.jpeg";

const Filler = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10">
      <div className="flex flex-col gap-4">
        <img
          src={napolnitel}
          alt="Наполнители"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={napolnitelKivi}
          alt="Наполнители"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Наполнители</h1>
        <p className="mb-3">
          Превосходное решение для придания незабываемого вкуса и аромата
          молочным продуктам, в том числе десертам, йогуртам и мороженому.
        </p>
        <p className="mb-3">
          Мы предлагаем разнообразные наполнители, начинки и поливки для
          производства йогуртов, творожков, мороженого:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>гомогенные и с кусочками;</li>
          <li>термостабильные и жировые;</li>
          <li>
            фруктовые и овощные, шоколадно-ореховые и карамельные, пикантные и
            гастрономические – невероятное количество вкусов и форм.
          </li>
        </ul>
        <p className="mb-4">
          Наши наполнители для молочной промышленности могут использоваться в
          разнообразных продуктах различными способами.
        </p>

        <h2 className="text-lg font-semibold mb-2">
          Категории молочных продуктов:
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Густые йогурты</li>
          <li>Питьевые йогурты</li>
          <li>Творожки и молочные десерты</li>
          <li>Молочные коктейли и смузи</li>
          <li>Сывороточные напитки</li>
          <li>Простокваши, ряженки, кефиры и другие кисломолочные продукты</li>
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

export default Filler;

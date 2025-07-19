import milk from "../assets/images/products/milk.png";
import bread from "../assets/images/products/bread.png";

const Bakery = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Наполнители</h1>
      <p className="mb-2">
        Превосходное решение для придания незабываемого вкуса и аромата молочным
        продуктам, в том числе молочным десертам, йогуртам и мороженому.
      </p>
      <p className="mb-4">
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
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Густые йогурты</li>
        <li>Питьевые йогурты</li>
        <li>Творожки и молочные десерты</li>
        <li>Молочные коктейли и смузи</li>
        <li>Сывороточные напитки</li>
        <li>Простокваши, ряженки, кефиры и другие кисломолочные продукты.</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={milk}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
        <img
          src={bread}
          alt="Йогурт с фруктами и гранолой"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Bakery;

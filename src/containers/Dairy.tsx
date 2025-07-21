import milk from "../assets/images/products/milk.png";
import milk2 from "../assets/images/products/milk2.jpg";

const Dairy = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10 font-[Helvetica]">
      <div className="flex flex-col gap-4">
        <img
          src={milk}
          alt="Молочная продукция"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={milk2}
          alt="Молочная продукция"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Молочная продукция</h1>
        <p className="mb-3">
          Комплексные решения для производства высококачественной молочной
          продукции, включая функциональные ингредиенты, добавки и
          технологические решения.
        </p>
        <p className="mb-3">
          Мы предлагаем полный спектр ингредиентов для различных видов молочной
          продукции:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>молочные белки и сывороточные протеины;</li>
          <li>функциональные молочные компоненты;</li>
          <li>ингредиенты для улучшения текстуры, вкуса и пищевой ценности.</li>
        </ul>
        <p className="mb-4">
          Наши решения позволяют производителям создавать инновационную молочную
          продукцию с улучшенными функциональными свойствами и увеличенным
          сроком хранения.
        </p>

        <h2 className="text-lg font-semibold mb-2">
          Категории молочных ингредиентов:
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Сухое обезжиренное молоко</li>
          <li>Сывороточные белковые концентраты</li>
          <li>Казеинаты и казеины</li>
          <li>Молочные жиры и сливки</li>
          <li>Лактоза и молочные сахара</li>
          <li>Функциональные молочные добавки</li>
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

export default Dairy;

import milk from "../assets/images/products/milk.png";

const Dairy = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Молочная продукция</h1>
      <p className="mb-2">
        Комплексные решения для производства высококачественной молочной
        продукции, включая функциональные ингредиенты, добавки и технологические
        решения.
      </p>
      <p className="mb-4">
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
        продукцию с улучшенными функциональными свойствами и увеличенным сроком
        хранения.
      </p>

      <h2 className="text-lg font-semibold mb-2">
        Категории молочных ингредиентов:
      </h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Сухое обезжиренное молоко</li>
        <li>Сывороточные белковые концентраты</li>
        <li>Казеинаты и казеины</li>
        <li>Молочные жиры и сливки</li>
        <li>Лактоза и молочные сахара</li>
        <li>Функциональные молочные добавки</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={milk}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Dairy;

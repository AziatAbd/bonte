import dye from "../assets/images/products/dye.jpg";

const Colors = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Краски пищевые</h1>
      <p className="mb-2">
        Безопасные пищевые красители для создания ярких и привлекательных
        молочных продуктов, кондитерских изделий и напитков.
      </p>
      <p className="mb-4">
        Предлагаем полный спектр пищевых красителей для различных
        технологических процессов:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>натуральные и синтетические красители;</li>
        <li>водо- и жирорастворимые формы;</li>
        <li>термостабильные красители для термообработанных продуктов.</li>
      </ul>
      <p className="mb-4">
        Все красители сертифицированы и разрешены к применению в пищевой
        промышленности, обеспечивают стабильный цвет готовой продукции.
      </p>

      <h2 className="text-lg font-semibold mb-2">Виды красителей:</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Красные красители (кармин, свекольный красный)</li>
        <li>Желтые красители (куркумин, тартразин)</li>
        <li>Синие и зеленые красители</li>
        <li>Антоцианы (фиолетовые и красные натуральные)</li>
        <li>Каротиноиды (оранжевые и желтые)</li>
        <li>Комплексные цветовые решения</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={dye}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Colors;

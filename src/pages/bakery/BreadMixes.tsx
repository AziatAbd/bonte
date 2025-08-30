import bread from "../../assets/images/products/bread.png";

const BreadMixes = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">
        Ингредиенты для хлебобулочных изделий
      </h1>
      <p className="mb-2">
        Специализированные ингредиенты и улучшители для производства
        высококачественных хлебобулочных и кондитерских изделий.
      </p>
      <p className="mb-4">
        Наш ассортимент включает полный комплекс решений для хлебопекарной
        промышленности:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>улучшители теста и хлебопекарные смеси;</li>
        <li>эмульгаторы и разрыхлители;</li>
        <li>
          ферменты и функциональные добавки для улучшения качества выпечки.
        </li>
      </ul>
      <p className="mb-4">
        Все ингредиенты способствуют улучшению объема, структуры мякиша,
        продлению свежести и повышению потребительских качеств изделий.
      </p>

      <h2 className="text-lg font-semibold mb-2">Категории ингредиентов:</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Хлебопекарные улучшители</li>
        <li>Эмульгаторы (лецитин, DATEM, SSL)</li>
        <li>Ферменты для теста</li>
        <li>Разрыхлители и дрожжи</li>
        <li>Глютен пшеничный</li>
        <li>Функциональные смеси для различных видов выпечки</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={bread}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default BreadMixes;

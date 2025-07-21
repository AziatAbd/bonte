import burger from "../assets/images/products/burger.jpg";

const Horeca = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">
        HoReCa (Hotel, Restaurant, Café)
      </h1>
      <p className="mb-2">
        Специализированные ингредиенты и решения для сферы общественного
        питания, включая рестораны, кафе, фаст-фуд и кейтеринговые компании.
      </p>
      <p className="mb-4">
        Предлагаем широкий ассортимент продукции для HoReCa сектора:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>готовые смеси для бургеров и сэндвичей;</li>
        <li>маринады, соусы и заправки;</li>
        <li>
          функциональные добавки для улучшения вкуса и текстуры готовых блюд.
        </li>
      </ul>
      <p className="mb-4">
        Наши ингредиенты помогают заведениям общественного питания создавать
        вкусные и качественные блюда с стабильными характеристиками.
      </p>

      <h2 className="text-lg font-semibold mb-2">Категории для HoReCa:</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Смеси специй для бургеров и мясных блюд</li>
        <li>Панировочные смеси и кляры</li>
        <li>Соусы и маринады быстрого приготовления</li>
        <li>Усилители вкуса и аромата</li>
        <li>Функциональные добавки для фритюра</li>
        <li>Готовые смеси для выпечки булочек и хлеба</li>
      </ul>
      <div className="flex flex-wrap gap-12">
        <img
          src={burger}
          alt="Йогурт с фруктами и гранолой"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Horeca;

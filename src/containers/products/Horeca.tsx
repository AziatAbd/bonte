import burger from "../../assets/images/products/burger.jpg";
import burger2 from "../../assets/images/products/burger2.jpg";
import burger3 from "../../assets/images/products/burger3.jpg";

const Horeca = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10">
      <div className="flex flex-col gap-4">
        <img
          src={burger}
          alt="HoReCa – Бургеры и блюда"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={burger2}
          alt="HoReCa – Бургеры и блюда"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={burger3}
          alt="HoReCa – Бургеры и блюда"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          HoReCa (Hotel, Restaurant, Cafe)
        </h1>
        <p className="mb-3">
          Специализированные ингредиенты и решения для сферы общественного
          питания, включая рестораны, кафе, фаст-фуд и кейтеринговые компании.
        </p>
        <p className="mb-3">
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
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Смеси специй для бургеров и мясных блюд</li>
          <li>Панировочные смеси и кляры</li>
          <li>Соусы и маринады быстрого приготовления</li>
          <li>Усилители вкуса и аромата</li>
          <li>Функциональные добавки для фритюра</li>
          <li>Готовые смеси для выпечки булочек и хлеба</li>
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

export default Horeca;

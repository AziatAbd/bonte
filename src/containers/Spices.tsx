import spec from "../assets/images/products/spec.jpg";
import spec2 from "../assets/images/products/spec2.webp";

const Spices = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10">
      <div className="flex flex-col gap-4">
        <img
          src={spec}
          alt="Специи"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={spec2}
          alt="Специи"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Специи</h1>
        <p className="mb-3">
          Натуральные специи и пряности высшего качества для придания
          уникального вкуса и аромата молочным и кондитерским изделиям.
        </p>
        <p className="mb-3">
          В нашем ассортименте представлены специи для различных применений в
          пищевой промышленности:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>цельные, молотые и экстракты специй;</li>
          <li>органические и традиционные специи;</li>
          <li>смеси специй и готовые композиции для конкретных продуктов.</li>
        </ul>
        <p className="mb-4">
          Все специи проходят строгий контроль качества и соответствуют
          международным стандартам безопасности пищевых продуктов.
        </p>

        <h2 className="text-lg font-semibold mb-2">Категории специй:</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Ванильные экстракты и стручки</li>
          <li>Корица и кассия</li>
          <li>Мускатный орех и кардамон</li>
          <li>Имбирь и куркума</li>
          <li>Смеси для выпечки</li>
          <li>Ароматические травы и листья</li>
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

export default Spices;

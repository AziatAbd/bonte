import spec from "../assets/images/products/spec.jpg";

const Spices = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Специи</h1>
      <p className="mb-2">
        Натуральные специи и пряности высшего качества для придания уникального
        вкуса и аромата молочным и кондитерским изделиям.
      </p>
      <p className="mb-4">
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
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Ванильные экстракты и стручки</li>
        <li>Корица и кассия</li>
        <li>Мускатный орех и кардамон</li>
        <li>Имбирь и куркума</li>
        <li>Смеси для выпечки</li>
        <li>Ароматические травы и листья</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={spec}
          alt="Ананасовый наполнитель"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default Spices;

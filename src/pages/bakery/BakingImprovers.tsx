import bread from "../../assets/images/products/bread.png";

const BakingImprovers = () => {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-xl font-medium mb-4">Улучшители для выпечки</h1>
      <p className="mb-2">
        Современные хлебопекарные улучшители помогают добиться стабильного
        качества продукции, повысить объем и улучшить структуру теста.
      </p>
      <p className="mb-4">
        Использование улучшителей обеспечивает надежный результат на всех
        стадиях производства и позволяет выпускать изделия высокого качества.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>улучшение объема и формы хлеба;</li>
        <li>сохранение свежести и мягкости мякиша дольше;</li>
        <li>стабильность процесса при разных условиях выпечки;</li>
        <li>повышение эластичности и пластичности теста.</li>
      </ul>

      <p className="mb-4">
        Улучшители помогают пекарям создавать продукцию с привлекательным видом,
        приятным вкусом и высоким уровнем потребительских качеств.
      </p>

      <h2 className="text-lg font-semibold mb-2">Основные виды улучшителей:</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        <li>Комплексные хлебопекарные улучшители</li>
        <li>Ферментные композиции</li>
        <li>Эмульгаторы (DATEM, SSL, лецитин)</li>
        <li>Функциональные смеси для различных видов выпечки</li>
      </ul>

      <div className="flex flex-wrap gap-12">
        <img
          src={bread}
          alt="Улучшители для выпечки"
          className="rounded shadow-md w-[400px]"
        />
      </div>
    </main>
  );
};

export default BakingImprovers;

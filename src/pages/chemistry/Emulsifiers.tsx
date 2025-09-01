import emulsifierImg from "../../assets/images/himia/emulgator.png";

const images = [emulsifierImg];

const sections = [
  {
    title: "Эмульгаторы для хлебопекарной и кондитерской промышленности",
    description: (
      <>
        <p>
          Эмульгаторы играют ключевую роль в производстве хлеба, булочных и
          кондитерских изделий. Они способствуют улучшению структуры теста,
          увеличению объема готовых изделий и продлению их свежести.
        </p>
        <p>
          Благодаря использованию современных эмульгаторов можно добиться
          стабильного качества продукции даже при изменении условий
          производства.
        </p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li>улучшение структуры мякиша и эластичности теста;</li>
          <li>увеличение объема и равномерности пористости;</li>
          <li>замедление черствения изделий;</li>
          <li>повышение технологичности и стабильности производства.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Основные продукты",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Лецитин (E322) – натуральный эмульгатор</li>
        <li>DATEM (E472e) – для улучшения структуры хлеба</li>
        <li>SSL (E481) – натриевая соль стеароиллактилата</li>
        <li>Моно- и диглицериды жирных кислот (E471)</li>
        <li>Комбинированные функциональные смеси для хлебопечения</li>
      </ul>
    ),
  },
];

const Emulsifiers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold mb-6">
        Эмульгаторы для хлебопекарной промышленности
      </h1>

      {sections.map((section, i) => (
        <div
          key={section.title}
          className={`flex gap-8 items-start ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {images[i] && (
            <img
              src={images[i]}
              alt={section.title}
              className="rounded shadow-md w-[300px] md:w-[350px] object-cover"
            />
          )}

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <div>{section.description}</div>

            <a
              href="https://wa.me/+996999223395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 mt-4"
            >
              Заказать по WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Emulsifiers;

import milk from "../../assets/images/products/milk.png";

const sections = [
  { title: "Заквасочные культуры", img: milk },
  {
    title: "Провола и Проволоне",
    img: "https://alce.eu/public/applicazione/images/mini113g.jpg",
  },
  {
    title: "Горгонзола",
    img: "https://alce.eu/public/applicazione/images/mini146g.jpg",
  },
  {
    title: "Качокавалло",
    img: "https://alce.eu/public/applicazione/images/mini81g.jpg",
  },
  {
    title: "Фонталь",
    img: "https://alce.eu/public/applicazione/images/mini152g.jpg",
  },
  {
    title: "Примосале",
    img: "https://alce.eu/public/applicazione/images/mini112g.jpg",
  },
  {
    title: "Сыры типа Чеддер",
    img: "https://alce.eu/public/applicazione/images/mini160g.jpg",
  },
  {
    title: "Домашний сыр",
    img: "https://alce.eu/public/applicazione/images/mini114g.jpg",
  },
  {
    title: "Твёрдые сыры",
    img: "https://alce.eu/public/applicazione/images/mini110g.jpg",
  },
  {
    title: "Жидкие кисломолочные продукты",
    img: "https://alce.eu/public/applicazione/images/mini148g.jpg",
  },
  {
    title: "Йогурт",
    img: "https://alce.eu/public/applicazione/images/mini147g.jpg",
  },
  {
    title: "Мягкие сыры",
    img: "https://alce.eu/public/applicazione/images/mini7g.jpg",
  },
  {
    title: "Азиаго Прессато",
    img: "https://alce.eu/public/applicazione/images/mini145g.jpg",
  },
  {
    title: "Выдержанные твёрдые сыры",
    img: "https://alce.eu/public/applicazione/images/mini155g.jpg",
  },
  {
    title: "Белые рассольные сыры",
    img: "https://alce.eu/public/applicazione/images/mini116g.jpg",
  },
  {
    title: "Сыры проволонового типа",
    img: "https://alce.eu/public/applicazione/images/mini115g.jpg",
  },
  {
    title: "Континентальные сыры",
    img: "https://alce.eu/public/applicazione/images/mini161g.jpg",
  },
  {
    title: "Вытяжные сыры",
    img: "https://alce.eu/public/applicazione/images/mini164g.jpg",
  },
  {
    title: "Тома",
    img: "https://alce.eu/public/applicazione/images/mini108g.jpg",
  },
  {
    title: "Роббиола",
    img: "https://alce.eu/public/applicazione/images/mini28g.jpg",
  },
  {
    title: "Моцарелла",
    img: "https://alce.eu/public/applicazione/images/mini84g.jpg",
  },
  {
    title: "Латтерия Италико",
    img: "https://alce.eu/public/applicazione/images/mini154g.jpg",
  },
  {
    title: "Каприно",
    img: "https://alce.eu/public/applicazione/images/mini151g.jpg",
  },
  {
    title: "Качотта",
    img: "https://alce.eu/public/applicazione/images/mini150g.jpg",
  },
  {
    title: "Крешенца",
    img: "https://alce.eu/public/applicazione/images/mini109g.jpg",
  },
];

const StarterCulture = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Заквасочные культуры</h1>
      <p>
        Селекционированные лиофилизированные культуры прямого внесения (DVS)
      </p>
      <p>
        Селекционированные лиофилизированные культуры представляют собой форму
        кисломолочных заквасок, наиболее распространенную в мире.
      </p>

      <p>
        Процесс лиофилизации, несомненно, один из наименее стрессовых способов
        устранения воды, позволяющий продлить срок хранения культуры: обычно он
        составляет два года для хранения в морозильной камере при температуре
        -18 ° C и один год для хранения в холодильнике при температуре + 4°C +/-
        2°C.
      </p>

      <p>
        Селекционированные лиофилизированные культуры DVS (Direct Vat System)
        могут быть добавлены непосредственно в перерабатываемое молоко.
      </p>

      <p>
        Для селекционированных лиофилизированных культур прямого внесения DVS
        при повышенном риске атаки бактериофагами Alce предлагает лизотипическую
        ротацию, то есть культуры, состоящие из штаммов, чувствительных или
        устойчивых к различным бактериофагам. Постоянная ротация этих культур в
        сочетании с регулярными санитарно-гигиеническими процедурами позволяет
        избежать задержки или остановки сквашивания.
      </p>

      {sections.map((sec, i) => (
        <div
          key={sec.title}
          className={`flex flex-col ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          } gap-8 items-start`}
        >
          {sec.img && (
            <img
              src={sec.img}
              alt={sec.title}
              className="rounded shadow-md w-[300px] md:w-[350px] object-cover"
            />
          )}

          <div>
            <div
              className={`${"overflow-hidden"} transition-all duration-500 mb-4`}
            >
              <h2 className="text-2xl font-semibold">{sec.title}</h2>
              <p className="mb-3">
                {sec.title === "Заквасочные культуры"
                  ? "Закваска этого типа - LYOBAC®️ - простая в использовании и управлении, может использоваться для производства различных итальянских и международных сыров."
                  : `Высококачественные культуры для производства ${sec.title.toLowerCase()}. Обеспечивают превосходный вкус, текстуру и длительный срок хранения готового продукта.`}
              </p>
              <a
                href="https://wa.me/+996999223395"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
              >
                Заказать по WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarterCulture;

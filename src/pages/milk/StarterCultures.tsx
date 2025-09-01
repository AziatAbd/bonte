import milk from "../../assets/images/products/milk.png";

const sections = [
  { title: "Заквасочные культуры", img: milk },
  // { title: "Сывороточные белковые концентраты", img: milk2 },
  // { title: "Казеинаты и казеины" },
  // { title: "Молочные жиры и сливки" },
  // { title: "Лактоза и молочные сахара" },
  // { title: "Функциональные молочные добавки" },
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
                Закваска этого типа - LYOBAC®️ - простая в использовании и
                управлении, может использоваться для производства различных
                итальянских и международных сыров.
              </p>
              {/* <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Улучшение питательной ценности и сроков хранения</li>
                <li>Оптимизация консистенции и структуры</li>
                <li>Снижение себестоимости без потери качества</li>
              </ul>
              <p className="mb-4">
                Все компоненты соответствуют международным стандартам качества,
                имеют сертификаты халяль и кошер, и могут использоваться в любом
                технологическом процессе.
              </p> */}
              <a
                href="https://wa.me/+996999223395"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
              >
                Заказать по WhatsApp
              </a>
            </div>
            {/* <button
              className="text-blue-500 underline cursor-pointer"
              onClick={() => toggleSection(i)}
            >
              {expandedSection === i ? "Скрыть" : "Подробнее"}
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarterCulture;

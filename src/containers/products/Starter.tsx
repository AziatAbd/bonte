import zacvaski from "../../assets/images/products/zacvaski.jpg";
import zacvaska2 from "../../assets/images/products/zacvaska2.jpeg";
import zacvaska3 from "../../assets/images/products/zacvaska3.jpg";

const Starter = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10 font-[Helvetica]">
      <div className="flex flex-col gap-4">
        <img
          src={zacvaski}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={zacvaska2}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={zacvaska3}
          alt="Закваски"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Заквасочные культуры</h1>
        <p className="mb-3">
          Предлагаемые нами заквасочные культуры доступны в форме DVS (сухие
          закваски предназначены для применения без предварительной
          активизации).
        </p>
        <p className="mb-3">
          Закваски прямого внесения (DVS) – это концентрированные,
          стандартизированные и специально отобранные молочнокислые бактерии.
        </p>

        <p className="mb-4">
          Наши закваски гарантируют стабильную ферментацию, оптимальную
          кислотность и формирование характерной текстуры продукта.
        </p>

        <h2 className="text-lg font-semibold mb-2">
          Для производства кисломолочных продуктов мы предлагаем заквасочные
          культуры:
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>мезофильные гомоферментативные</li>
          <li>мезофильные гетероферментативные</li>
          <li>мезофильно-термофильные гомоферментативные</li>
          <li>мезофильно-термофильные гетероферментативные</li>
          <li>термофильные</li>
          <li>добавочные (дополнительные)</li>
          <li>пробиотические и защитные культуры</li>
        </ul>

        <p className="mb-4">
          Большой ассортимент и наличие фагоальтернативных вариантов позволяет
          выпускать большой ассортимент кисломолочных продуктов (кефир, йогурт,
          сметана, творог и т.д.) с заданными свойствами, желаемым временем
          ферментации, вкусовыми характеристиками, структурой, сроками годности,
          используя разные способы производства и любое технологическое
          оборудование.
        </p>
        <p className="mb-4">
          Все виды заквасок являются многоштаммовыми, имеют халяльный и кошерный
          сертификаты, содержат чистые культуры молочнокислых бактерий и
          соответствуют требованиям международных стандартов.
        </p>

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

export default Starter;

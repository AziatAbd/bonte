import dye from "../../assets/images/products/dye.jpg";
import dye2 from "../../assets/images/products/dye2.jpeg";

const Colors = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 p-10 font-[Helvetica]">
      <div className="flex flex-col gap-4">
        <img
          src={dye}
          alt="Пищевые красители"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
        <img
          src={dye2}
          alt="Пищевые красители"
          className="rounded shadow-md w-[300px] md:w-[350px]"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Пищевые красители</h1>
        <p className="mb-3">
          На сегодняшний день, в различных отраслях промышленности широко
          распространены красители.
        </p>
        <p className="mb-3">
          Пищевые красители – это особые вещества, применяемые для окрашивания
          любых продуктов питания – напитков, готовых блюд, кремов, теста,
          декора для кондитерских изделий, конфет и так далее.
        </p>
        <p className="mb-4">
          В нашем ассортименте вы найдёте широкий выбор красителей. Также Вы
          можете получить другие виды красителей по дополнительному запросу.
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

export default Colors;

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
          Пищевые красители для всех отраслей пищевой промышленности.
        </p>
        <p className="mb-3">
          Натуральный запах и цвет продуктов питания достигается грамотным
          использованием ароматических добавок и красящих пигментов.
        </p>
        <p className="mb-4">
          Всю гамму красителей от классики до модерна... как натуральные, так и
          идентичные натуральным, сухие красители и концентрированные вязкие
          жидкости можем предоставить Вам!
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

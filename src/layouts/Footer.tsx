import { Container } from "../components/styles";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:rounded-2xl sm:mx-[80px] sm:mb-[60px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl mb-4 text-[#FFD35B]">BONTE</h3>
            <p className="text-[#FFD35B] mb-8">
              ПОСТАВКА ПИЩЕВОГО СЫРЬЯ ДЛЯ ПРОИЗВОДИТЕЛЕЙ
            </p>
            <p className="border border-[#FFD35B] p-2">
              АДРЕС:{" "}
              <span className="text-gray-400">Г.Бишкек Лермонтова 1Б/4.</span>
            </p>
          </div>
          <div>
            <div className="space-y-2 text-gray-400">
              <div className="font-[Helvetica]">Главная</div>
              <div className="font-[Helvetica]">О нас</div>
              <div className="font-[Helvetica]">Каталог</div>
              <div className="font-[Helvetica]">Контакты</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">СВЯЗАТЬСЯ С НАМИ:</h3>
            <div className="space-y-2 text-gray-400 font-[Helvetica]">
              <div>+996 500 00 00 20</div>
              <div>info@basis-food.ru</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">РЕЖИМ РАБОТЫ:</h3>
            <div className="space-y-2 text-gray-400 font-[Helvetica]">
              <div>C 9:00 ДО 18:00</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

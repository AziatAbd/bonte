import { Container } from "../components/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { smoothScrollToId } from "../utils/smoothScrollToId";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (targetId: string) => {
    if (location.pathname !== "/") {
      // если мы не на главной — перейти с передачей состояния
      navigate("/", { state: { scrollToId: targetId } });
    } else {
      // если уже на главной — просто скролл
      smoothScrollToId(targetId);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 sm:rounded-2xl sm:mx-[80px] sm:mb-[60px] font-[Helvetica]">
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
            <div className="space-y-2 text-gray-400 cursor-pointer">
              <div
                onClick={() => handleNav("home")}
                className=" hover:text-yellow-500"
              >
                Главная
              </div>
              <div
                onClick={() => handleNav("about")}
                className=" hover:text-yellow-500"
              >
                О нас
              </div>
              <div
                onClick={() => navigate("/catalog/dairy")}
                className=" hover:text-yellow-500"
              >
                Каталог
              </div>
              <div
                onClick={() => handleNav("contacts")}
                className=" hover:text-yellow-500"
              >
                Контакты
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">СВЯЗАТЬСЯ С НАМИ:</h3>
            <div className="space-y-2 text-gray-400 ">
              <div>
                <p className="font-[Helvetica]">
                  Отдел закупа: +996 999 22 33 95
                </p>
                <p className="font-[Helvetica]">
                  Отдел продаж: +996 999 22 33 95
                </p>
                <p className="font-[Helvetica]">
                  Бухгалтерия: +996 555 966 034
                </p>
              </div>
              <div>Почта: bonte.m.a8.@gmail.com</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">РЕЖИМ РАБОТЫ:</h3>
            <div className="space-y-2 text-gray-400 ">
              <div>C 9:00 ДО 18:00</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

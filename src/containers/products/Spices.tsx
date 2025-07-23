import spec from "../../assets/images/products/spec.jpg";
import spec2 from "../../assets/images/products/spec2.webp";
import { useState } from "react";

const sections = [
  { title: "Ванильные экстракты и стручки", img: spec },
  { title: "Корица и кассия", img: spec2 },
  { title: "Мускатный орех и кардамон" },
  { title: "Имбирь и куркума" },
  { title: "Смеси для выпечки" },
  { title: "Ароматические травы и листья" },
];

const Spices = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-[Helvetica]">
      <h1 className="text-3xl font-bold">Специи</h1>
      <p>
        Натуральные специи и пряности высшего качества для придания уникального
        вкуса и аромата молочным и кондитерским изделиям.
      </p>
      <p>
        В нашем ассортименте представлены специи для различных применений в
        пищевой промышленности.
      </p>

      {sections.map((sec, i) => (
        <div
          key={sec.title}
          className={`flex ${
            i % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
              className={`${
                expandedSection === i ? "" : "max-h-[150px] overflow-hidden"
              } transition-all duration-500 mb-4`}
            >
              <h2 className="text-2xl font-semibold">{sec.title}</h2>
              <p className="mb-3">
                Наши специи подбираются с особым вниманием к качеству и
                происхождению, чтобы обеспечить исключительный аромат и вкус.
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Цельные, молотые и экстракты специй</li>
                <li>Органические и традиционные варианты</li>
                <li>Готовые смеси для разных рецептур</li>
              </ul>
              <p className="mb-4">
                Каждая партия проходит контроль качества и соответствует
                международным стандартам безопасности пищевой продукции.
              </p>
              <a
                href="https://wa.me/+996500000020"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
              >
                Заказать по WhatsApp
              </a>
            </div>
            <button
              className="text-blue-500 underline cursor-pointer"
              onClick={() => toggleSection(i)}
            >
              {expandedSection === i ? "Скрыть" : "Подробнее"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spices;


import { Button } from "@/components/ui/button";

interface BusinessPlanCallToActionProps {
  onContactRequest: () => void;
}

export const BusinessPlanCallToAction = ({ onContactRequest }: BusinessPlanCallToActionProps) => {
  return (
    <div className="mt-8 rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-lg animate-fade-in">
      <h3 className="mb-4 text-2xl font-semibold text-cyan-800">
        Хотите не просто демо бизнес-идеи, а детальный финансовый сценарий с прогнозом ROI?
      </h3>
      <p className="mb-6 text-gray-600">Наши бизнес-планы включают:</p>
      <ul className="mb-6 list-inside space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">✓</span>
          <span>Финансовую модель с NPV, IRR и сроком окупаемости</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">✓</span>
          <span>Анализ рынка: объем TAM/SAM, динамика спроса, позиционирование</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">✓</span>
          <span>План поставок: подбор поставщиков, логистика, альтернативы</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">✓</span>
          <span>Операционные расходы с учетом инфляции и валютных рисков</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">✓</span>
          <span>Маркетинговую стратегию — от CAC до LTV</span>
        </li>
      </ul>
      <p className="mb-6 font-semibold text-cyan-800 bg-cyan-100 inline-block px-4 py-2 rounded-lg">
        📌 Результат: документ, который пройдет проверку инвесторов и банков.
      </p>
      <Button 
        className="w-full py-6 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md"
        onClick={() => window.open("https://forms.gle/4gLvkK979hPjNeCEA", "_blank")}
      >
        👉 Заказать расчет под ключ
      </Button>
    </div>
  );
};

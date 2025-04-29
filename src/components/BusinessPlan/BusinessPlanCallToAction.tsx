
import { Button } from "@/components/ui/button";

interface BusinessPlanCallToActionProps {
  onContactRequest: () => void;
}

export const BusinessPlanCallToAction = ({ onContactRequest }: BusinessPlanCallToActionProps) => {
  return (
    <div className="mt-8 rounded-lg border bg-cyan-50 p-6">
      <h3 className="mb-4 text-xl font-semibold text-cyan-800">
        Хотите не просто демо бизнес-идеи, а детальный финансовый сценарий с прогнозом ROI, анализом рисков и обоснованием каждого показателя?
      </h3>
      <p className="mb-4">Наши бизнес-планы включают:</p>
      <ul className="mb-6 list-inside list-disc space-y-2">
        <li>Финансовую модель с NPV, IRR и сроком окупаемости</li>
        <li>Анализ рынка: объем TAM/SAM, динамика спроса, позиционирование</li>
        <li>План поставок: подбор поставщиков, логистика, альтернативы</li>
        <li>Операционные расходы с учетом инфляции и валютных рисков</li>
        <li>Маркетинговую стратегию — от CAC до LTV</li>
      </ul>
      <p className="mb-4 font-semibold">
        📌 Результат: документ, который пройдет проверку инвесторов и банков.
      </p>
      <Button 
        className="w-full bg-cyan-500 hover:bg-cyan-600"
        onClick={onContactRequest}
      >
        👉 Заказать расчет под ключ
      </Button>
    </div>
  );
};

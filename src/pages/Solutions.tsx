import Header from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { Shield, Database, Bot, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold text-center mb-12">Наши технологии для вашего бизнеса</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="AI Боты для автоматизации"
            description="Чат-боты, голосовые ассистенты, обработка заявок с сокращением нагрузки на поддержку до 70%."
            icon={Bot}
            link="/solutions/ai-bots"
          />
          
          <ServiceCard 
            title="Анализ данных"
            description="Поиск тендеров, анализ конкурентов, прогнозирование трендов для принятия решений."
            icon={Database}
            link="/solutions/data-analysis"
          />
          
          <ServiceCard 
            title="Защита от AI атак"
            description="Предотвращение LLM-инъекций, защита данных и комплексная безопасность AI."
            icon={Shield}
            link="/solutions/ai-protection"
          />
          
          <ServiceCard 
            title="Финансовый AI анализ"
            description="Проверка отчетности, выявление аномалий, прогнозирование рисков для финансовой стабильности."
            icon={TrendingUp}
            link="/solutions/financial-analysis"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;


import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ContactFormModal } from "@/components/ContactFormModal";
import { BusinessPlanResponse } from "@/types/businessPlan";
import { BusinessPlanForm } from "@/components/BusinessPlan/BusinessPlanForm";
import { BusinessPlanMetrics } from "@/components/BusinessPlan/BusinessPlanMetrics";
import { BusinessPlanDetails } from "@/components/BusinessPlan/BusinessPlanDetails";
import { BusinessPlanCallToAction } from "@/components/BusinessPlan/BusinessPlanCallToAction";
import { fetchBusinessPlan, getDefaultBusinessPlan } from "@/services/businessPlanService";

interface BusinessPlanGeneratorProps {
  webhookUrl?: string;
}

export const BusinessPlanGenerator = ({ 
  webhookUrl = "https://testforspaw.app.n8n.cloud/webhook/get_plan" 
}: BusinessPlanGeneratorProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BusinessPlanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  const handleSubmit = async (idea: string, location: string) => {
    if (!idea.trim() || !location.trim()) {
      toast.error("Пожалуйста, заполните оба поля");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null); // Clear previous results immediately when starting a new calculation
    
    try {
      const data = await fetchBusinessPlan(idea, location, webhookUrl);
      setResult(data);
      toast.success("Бизнес-план успешно сгенерирован!");
    } catch (error) {
      console.error("Error:", error);
      setError("Сервис временно недоступен. Мы работаем над решением проблемы.");
      // Use fallback data instead of just showing an error
      setResult(getDefaultBusinessPlan());
      toast.error("Не удалось сгенерировать бизнес-план. Мы показываем демо-версию.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-cyan-200 rounded-2xl p-8 shadow-lg bg-white">
      {error && (
        <Alert variant="destructive" className="mb-6 border border-red-200 bg-red-50">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <BusinessPlanForm onSubmit={handleSubmit} isLoading={isLoading} />

      {result && (
        <div ref={resultRef} className="space-y-8">
          <h2 className="text-2xl font-bold text-cyan-800 text-center mb-6">Результаты анализа</h2>
          <BusinessPlanMetrics data={result} />
          <BusinessPlanDetails data={result} />
          <BusinessPlanCallToAction onContactRequest={() => setShowContactForm(true)} />
        </div>
      )}
      
      <ContactFormModal 
        open={showContactForm} 
        onOpenChange={setShowContactForm}
        title="Заказать расчет бизнес-плана под ключ"
        description="Оставьте свои контактные данные, и наш специалист свяжется с вами для обсуждения деталей"
      />
    </div>
  );
};

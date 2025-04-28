
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BusinessPlanResponse {
  payback_period_months: number;
  monthly_revenue_estimate: number;
  startup_investment: number;
  business_plan: string;
  marketing_plan: string;
  market_analysis: string;
}

// Sample fallback data for when API is unavailable
const fallbackData: BusinessPlanResponse = {
  payback_period_months: 18,
  monthly_revenue_estimate: 5000,
  startup_investment: 25000,
  business_plan: "Это демонстрационный бизнес-план. Настоящие расчёты будут доступны после подключения к серверу. Пожалуйста, попробуйте позже или свяжитесь с нами для получения детальной консультации.",
  marketing_plan: "Демонстрационный план маркетинга. Для получения актуального плана, пожалуйста, попробуйте позже.",
  market_analysis: "Демонстрационный анализ рынка. Для получения актуального анализа, пожалуйста, попробуйте позже."
};

interface BusinessPlanGeneratorProps {
  webhookUrl?: string;
}

export const BusinessPlanGenerator = ({ webhookUrl = "https://testforspaw.app.n8n.cloud/webhook/get_plan" }: BusinessPlanGeneratorProps) => {
  const [idea, setIdea] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BusinessPlanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || !location.trim()) {
      toast.error("Пожалуйста, заполните оба поля");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea, location }),
        signal: controller.signal
      }).catch(err => {
        throw new Error("Не удалось подключиться к серверу.");
      });

      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Сервис временно недоступен. Мы работаем над решением проблемы.");
      // Use fallback data instead of just showing an error
      setResult(fallbackData);
      toast.error("Не удалось сгенерировать бизнес-план. Мы показываем демо-версию.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-4 border-cyan-500 rounded-lg p-6">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <Input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Введите вашу бизнес-идею"
            className="mb-4"
          />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Введите страну или город"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !idea.trim() || !location.trim()} 
          className="w-full bg-cyan-500 hover:bg-cyan-600"
        >
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Обработка...
            </>
          ) : (
            "Рассчитать"
          )}
        </Button>
      </form>

      {result && (
        <div ref={resultRef} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Ежемесячная прибыль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-cyan-700">${result.monthly_revenue_estimate}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Срок окупаемости</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-cyan-700">{result.payback_period_months} месяцев</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Инвестиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-cyan-700">${result.startup_investment}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Бизнес-план</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{result.business_plan}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>План маркетинга</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{result.marketing_plan}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Анализ рынка</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{result.market_analysis}</p>
            </CardContent>
          </Card>

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
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
              👉 Заказать расчет под ключ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

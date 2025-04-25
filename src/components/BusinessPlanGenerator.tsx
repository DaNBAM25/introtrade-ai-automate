
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface BusinessPlanResponse {
  payback_period_months: number;
  monthly_revenue_estimate: number;
  startup_investment: number;
  business_plan: string;
  marketing_plan: string;
  market_analysis: string;
}

export const BusinessPlanGenerator = () => {
  const [idea, setIdea] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BusinessPlanResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || !location.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://bazar11.app.n8n.cloud/webhook-test/222222", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea, location }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate business plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">AI анализ бизнес-идеи</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Проанализируйте идею, получите бизнес-план, расчет инвестиций и потенциального дохода от бизнеса в любой точке мира.
        </p>

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
              placeholder="Введите местоположение"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Анализируем..." : "Рассчитать"}
          </Button>
        </form>

        {result && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Ежемесячный доход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${result.monthly_revenue_estimate}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Срок окупаемости</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{result.payback_period_months} месяцев</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Инвестиции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${result.startup_investment}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Бизнес-идея</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.business_plan}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Маркетинговый план</CardTitle>
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

            <div className="mt-8 rounded-lg border bg-muted p-6">
              <h3 className="mb-4 text-xl font-semibold">
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
              <Button className="w-full">👉 Заказать расчет под ключ</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

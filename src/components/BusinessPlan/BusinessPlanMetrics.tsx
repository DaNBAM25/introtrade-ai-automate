
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessPlanResponse } from "@/types/businessPlan";

interface BusinessPlanMetricsProps {
  data: BusinessPlanResponse;
}

export const BusinessPlanMetrics = ({ data }: BusinessPlanMetricsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Ежемесячная прибыль</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-cyan-700">${data.monthly_revenue_estimate}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Срок окупаемости</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-cyan-700">{data.payback_period_months} месяцев</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Инвестиции</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-cyan-700">${data.startup_investment}</p>
        </CardContent>
      </Card>
    </div>
  );
};

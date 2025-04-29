
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessPlanResponse } from "@/types/businessPlan";
import { Coins, Clock, LineChart } from "lucide-react";

interface BusinessPlanMetricsProps {
  data: BusinessPlanResponse;
}

export const BusinessPlanMetrics = ({ data }: BusinessPlanMetricsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3 animate-fade-in">
      <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-cyan-50">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pb-2">
          <CardTitle className="flex items-center text-cyan-800">
            <Coins className="mr-2 h-5 w-5 text-cyan-600" />
            Ежемесячная прибыль
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-3xl font-bold text-cyan-700">${data.monthly_revenue_estimate}</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-cyan-50">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pb-2">
          <CardTitle className="flex items-center text-cyan-800">
            <Clock className="mr-2 h-5 w-5 text-cyan-600" />
            Срок окупаемости
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-3xl font-bold text-cyan-700">{data.payback_period_months} месяцев</p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-cyan-50">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pb-2">
          <CardTitle className="flex items-center text-cyan-800">
            <LineChart className="mr-2 h-5 w-5 text-cyan-600" />
            Инвестиции
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-3xl font-bold text-cyan-700">${data.startup_investment}</p>
        </CardContent>
      </Card>
    </div>
  );
};

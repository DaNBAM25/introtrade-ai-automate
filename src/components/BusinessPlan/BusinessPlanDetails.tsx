
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessPlanResponse } from "@/types/businessPlan";
import { FileText, BarChart, PieChart } from "lucide-react";

interface BusinessPlanDetailsProps {
  data: BusinessPlanResponse;
}

export const BusinessPlanDetails = ({ data }: BusinessPlanDetailsProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <CardTitle className="flex items-center text-cyan-800">
            <FileText className="mr-2 h-5 w-5 text-cyan-600" />
            Бизнес-план
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.business_plan}</p>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <CardTitle className="flex items-center text-cyan-800">
            <BarChart className="mr-2 h-5 w-5 text-cyan-600" />
            План маркетинга
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.marketing_plan}</p>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <CardTitle className="flex items-center text-cyan-800">
            <PieChart className="mr-2 h-5 w-5 text-cyan-600" />
            Анализ рынка
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.market_analysis}</p>
        </CardContent>
      </Card>
    </div>
  );
};

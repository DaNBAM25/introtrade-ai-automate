
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessPlanResponse } from "@/types/businessPlan";

interface BusinessPlanDetailsProps {
  data: BusinessPlanResponse;
}

export const BusinessPlanDetails = ({ data }: BusinessPlanDetailsProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Бизнес-план</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.business_plan}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>План маркетинга</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.marketing_plan}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Анализ рынка</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.market_analysis}</p>
        </CardContent>
      </Card>
    </>
  );
};


import { ServicePage } from "@/components/ServicePage";
import { TrendingUp } from "lucide-react";

const FinancialAnalysis = () => {
  return (
    <ServicePage
      title="Financial AI Analysis"
      description="Leverage the power of AI to transform your financial operations with intelligent report verification, anomaly detection, and predictive risk forecasting."
      icon={TrendingUp}
      iconColor="text-amber-600"
      backgroundColor="bg-amber-50"
      features={[
        "Automated financial report verification and validation",
        "Anomaly and fraud detection in transaction patterns",
        "Risk forecasting and scenario planning",
        "Custom financial KPI tracking and monitoring",
        "Integration with existing accounting and ERP systems",
        "Compliance checking against financial regulations"
      ]}
      benefits={[
        "Identify financial discrepancies before they become problems",
        "Detect fraudulent activities with advanced pattern recognition",
        "Make informed decisions with AI-powered risk assessments",
        "Optimize cash flow with predictive financial modeling",
        "Reduce costs associated with financial mismanagement",
        "Streamline financial operations with intelligent automation"
      ]}
    />
  );
};

export default FinancialAnalysis;

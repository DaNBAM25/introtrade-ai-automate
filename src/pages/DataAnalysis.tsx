
import { ServicePage } from "@/components/ServicePage";
import { Database } from "lucide-react";

const DataAnalysis = () => {
  return (
    <ServicePage
      title="Data Analysis and Parsing"
      description="Transform raw data into actionable insights with our advanced data analysis and parsing solutions tailored for modern businesses."
      icon={Database}
      iconColor="text-indigo-600"
      backgroundColor="bg-indigo-50"
      features={[
        "Automated tender and procurement opportunity searches",
        "Competitor intelligence gathering and analysis",
        "Market trend forecasting using predictive analytics",
        "Custom data extraction from websites and documents",
        "Structured data processing and transformation",
        "Interactive dashboards for real-time decision making"
      ]}
      benefits={[
        "Identify lucrative business opportunities before competitors",
        "Make data-driven decisions based on accurate market intelligence",
        "Save hundreds of manual research hours with automated parsing",
        "Optimize pricing strategies based on competitor analysis",
        "Anticipate market changes with AI-powered trend forecasting",
        "Transform unstructured data into valuable business assets"
      ]}
    />
  );
};

export default DataAnalysis;

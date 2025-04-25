
import Header from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { Shield, Database, Bot, TrendingUp } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Our technologies for your business</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="AI Bots for Automation"
            description="Chatbots, voice assistants, application processing with up to 70% reduction in support load."
            icon={Bot}
            link="/solutions/ai-bots"
          />
          
          <ServiceCard 
            title="Data Analysis and Parsing"
            description="Search for tenders, competitor analysis, trend forecasting to make data-driven decisions."
            icon={Database}
            link="/solutions/data-analysis"
          />
          
          <ServiceCard 
            title="Protection against AI Attacks"
            description="LLM injection prevention, data leak protection, and comprehensive AI security."
            icon={Shield}
            link="/solutions/ai-protection"
          />
          
          <ServiceCard 
            title="Financial AI Analysis"
            description="Verification of reports, identification of anomalies, risk forecasting for financial stability."
            icon={TrendingUp}
            link="/solutions/financial-analysis"
          />
        </div>
      </main>
    </div>
  );
};

export default Solutions;

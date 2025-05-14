
import { BusinessPlanGenerator } from "@/components/BusinessPlanGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
            AI анализ бизнес-идеи
          </h1>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Проанализируйте идею, получите бизнес-план, расчет инвестиций и потенциального дохода от бизнеса в любой точке мира.
          </p>
          
          <div className="mb-8">
            <BusinessPlanGenerator webhookUrl="https://testforspaw.app.n8n.cloud/webhook/get_plan" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPlan;

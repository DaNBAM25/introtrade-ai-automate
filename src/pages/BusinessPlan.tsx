
import { BusinessPlanGenerator } from "@/components/BusinessPlanGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-cyan-800">AI анализ бизнес-идеи</h1>
          <p className="mb-8 text-lg text-gray-600">
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

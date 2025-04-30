
import { ChatInterface } from "@/components/ChatInterface";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AiConsultant = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-cyan-800">AI Юридический консультант</h1>
          <p className="mb-8 text-lg text-gray-600">
            Получите профессиональную юридическую консультацию от нашего AI бота. 
            Мгновенные ответы на ваши правовые вопросы, анализ документов и практические рекомендации 
            по широкому спектру юридических тем.
          </p>
          
          <div className="mb-8">
            <div className="p-4">
              <ChatInterface className="h-[400px]" webhookUrl="https://testforspaw.app.n8n.cloud/webhook/consult" />
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600"
            onClick={() => window.open("https://forms.gle/4gLvkK979hPjNeCEA", "_blank")}
          >
            👉 Записаться на консультацию
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiConsultant;

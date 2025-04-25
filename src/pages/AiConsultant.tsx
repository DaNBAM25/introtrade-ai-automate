
import { ChatInterface } from "@/components/ChatInterface";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AiConsultant = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="mb-4 text-3xl font-bold">AI Юридический консультант</h1>
        <p className="mb-8 text-lg text-gray-600 max-w-3xl">
          Получите профессиональную юридическую консультацию от нашего AI бота. 
          Мгновенные ответы на ваши правовые вопросы, анализ документов и практические рекомендации 
          по широкому спектру юридических тем.
        </p>
        <div className="flex justify-center">
          <ChatInterface />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiConsultant;

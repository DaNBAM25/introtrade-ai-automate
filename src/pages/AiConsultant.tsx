
import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactFormModal } from "@/components/ContactFormModal";

const AiConsultant = () => {
  const [showContactForm, setShowContactForm] = useState(false);

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
              <ChatInterface className="h-[400px]" webhookUrl="https://testforspaw.app.n8n.cloud/webhook/718269e9-8025-44cd-bc22-a8995828d49d" />
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600"
            onClick={() => setShowContactForm(true)}
          >
            👉 Записаться на консультацию
          </Button>
        </div>
      </main>
      <Footer />

      <ContactFormModal 
        open={showContactForm} 
        onOpenChange={setShowContactForm}
        title="Записаться на консультацию"
        description="Оставьте свои контактные данные для записи на консультацию"
      />
    </div>
  );
};

export default AiConsultant;


import { ChatInterface } from "@/components/ChatInterface";
import Header from "@/components/Header";

const AiConsultant = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">AI Legal Consultant</h1>
        <div className="flex justify-center">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default AiConsultant;

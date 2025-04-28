
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Message {
  content: string;
  isUser: boolean;
}

interface ChatInterfaceProps {
  className?: string;
  webhookUrl?: string;
}

export const ChatInterface = ({ 
  className,
  webhookUrl = "https://testforspaw.app.n8n.cloud/webhook/718269e9-8025-44cd-bc22-a8995828d49d"
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { content: userMessage, isUser: true }]);
    setIsLoading(true);
    setError(null);

    // Add a fallback response if the API call fails
    const fallbackResponses = [
      "Извините, я временно не могу обработать ваш запрос. Пожалуйста, попробуйте позже.",
      "В данный момент сервис недоступен. Попробуйте обновить страницу или связаться с нами по телефону.",
      "Технические работы на сервере. Пожалуйста, повторите запрос через несколько минут."
    ];

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
        signal: controller.signal
      }).catch(err => {
        throw new Error("Не удалось подключиться к серверу.");
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { content: data.response || data.message || "No response received", isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      // Use a fallback response instead of just showing an error toast
      const fallbackMessage = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      setMessages(prev => [...prev, { content: fallbackMessage, isUser: false }]);
      setError("Сервис временно недоступен. Мы вернемся в ближайшее время.");
      toast.error("Не удалось получить ответ. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex h-[250px] w-full max-w-2xl flex-col rounded-lg bg-white p-4 shadow-lg", className)}>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="mb-4 flex-1 space-y-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isUser
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2">
              Думаю...
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите ваш вопрос..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-600">
          <Send className="h-4 w-4" />
        </Button>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        Это демо версия. Полная консультация включает подробный анализ.
      </p>
    </div>
  );
};

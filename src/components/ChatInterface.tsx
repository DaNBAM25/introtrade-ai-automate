
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
  webhookUrl = "https://testforspaw.app.n8n.cloud/webhook/consult"
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
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout for better reliability
      
      console.log("Sending request to webhook:", webhookUrl);
      console.log("Request payload:", { query: userMessage });

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
        signal: controller.signal
      }).catch(err => {
        console.error("Fetch error:", err);
        throw new Error("Не удалось подключиться к серверу.");
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error("Server error status:", response.status);
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received response data:", data);
      
      // Improved response extraction logic to handle various formats
      let responseText = "";
      
      // Handle array format with output property
      if (Array.isArray(data) && data.length > 0) {
        console.log("Response is an array with length:", data.length);
        if (data[0] && typeof data[0].output === 'string') {
          responseText = data[0].output;
          console.log("Extracted output from array:", responseText);
        }
      } 
      // Handle object with output property
      else if (data && typeof data.output === 'string') {
        responseText = data.output;
        console.log("Extracted output from object:", responseText);
      } 
      // Handle object with response property
      else if (data && typeof data.response === 'string') {
        responseText = data.response;
        console.log("Using fallback response property:", responseText);
      } 
      // Handle object with message property
      else if (data && typeof data.message === 'string') {
        responseText = data.message;
        console.log("Using fallback message property:", responseText);
      } 
      // Direct string response
      else if (typeof data === 'string') {
        responseText = data;
        console.log("Response is a direct string");
      }
      // If all else fails
      else {
        console.error("Unexpected response format:", data);
        responseText = "Не удалось получить ответ от сервера";
      }
      
      setMessages(prev => [...prev, { content: responseText.trim(), isUser: false }]);
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

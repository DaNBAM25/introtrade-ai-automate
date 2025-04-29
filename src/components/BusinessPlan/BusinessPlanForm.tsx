
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Sparkles } from "lucide-react";

interface BusinessPlanFormProps {
  onSubmit: (idea: string, location: string) => void;
  isLoading: boolean;
}

export const BusinessPlanForm = ({ onSubmit, isLoading }: BusinessPlanFormProps) => {
  const [idea, setIdea] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(idea, location);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Введите вашу бизнес-идею"
            className="pl-4 py-6 text-lg rounded-xl shadow-sm border-cyan-100 focus-visible:ring-cyan-400"
          />
        </div>
        <div className="relative">
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Введите страну или город"
            className="pl-4 py-6 text-lg rounded-xl shadow-sm border-cyan-100 focus-visible:ring-cyan-400"
          />
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={isLoading || !idea.trim() || !location.trim()} 
        className="w-full py-6 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Обработка...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Рассчитать
          </>
        )}
      </Button>
    </form>
  );
};


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div>
        <Input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Введите вашу бизнес-идею"
          className="mb-4"
        />
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Введите страну или город"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading || !idea.trim() || !location.trim()} 
        className="w-full bg-cyan-500 hover:bg-cyan-600"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Обработка...
          </>
        ) : (
          "Рассчитать"
        )}
      </Button>
    </form>
  );
};

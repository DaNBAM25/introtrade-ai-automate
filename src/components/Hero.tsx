
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-cyan-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      
      <div className="container relative mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Автоматизация бизнеса с помощью искусственного интеллекта
          </h1>
          
          <p className="mb-8 text-lg text-cyan-100 md:text-xl">
            Внедряем AI ботов, анализируем данные, защищаем от кибератак и оптимизируем бизнес-процессы под ключ.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600" 
              onClick={() => navigate("/business-plan")}
            >
              Попробовать демо
            </Button>
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600"
              onClick={() => window.open("https://forms.gle/4gLvkK979hPjNeCEA", "_blank")}
            >
              Заказать внедрение
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

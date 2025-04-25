
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      <div className="container relative mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Automate your business with AI – save up to 40% of time and resources
          </h1>
          
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            We implement AI bots, analyze data, protect against cyber attacks, and optimize turnkey processes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#demo">Try the demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Order implementation</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

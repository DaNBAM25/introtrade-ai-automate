
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8">О Компании</h1>
        <div className="prose max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            ICG AI - ведущая компания в области внедрения искусственного интеллекта для бизнеса. Мы специализируемся на разработке и интеграции AI-решений, которые помогают компаниям автоматизировать процессы и повышать эффективность работы.
          </p>
          <p className="text-lg mb-6">
            Основанная группой экспертов в области машинного обучения и бизнес-процессов, наша компания уже более 5 лет помогает предприятиям разного масштаба внедрять инновационные технологии искусственного интеллекта.
          </p>
          <p className="text-lg">
            Наша миссия - сделать технологии AI доступными и эффективными для бизнеса любого масштаба, помогая компаниям становиться более конкурентоспособными в цифровую эпоху.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

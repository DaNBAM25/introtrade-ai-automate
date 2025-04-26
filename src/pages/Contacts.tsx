
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold text-center mb-12">Контакты</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-cyan-600" />
            <a href="mailto:info@introbiz.ru" className="text-lg hover:text-cyan-600 transition-colors">
              info@introbiz.ru
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MessageCircle className="h-6 w-6 text-cyan-600" />
            <a href="https://t.me/+79375953627" className="text-lg hover:text-cyan-600 transition-colors">
              Telegram
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-cyan-600" />
            <a href="https://wa.me/+79375953627" className="text-lg hover:text-cyan-600 transition-colors">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-cyan-600" />
            <span className="text-lg">Москва, Санкт-Петербург, Уфа, Сингапур, ОАЭ</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;

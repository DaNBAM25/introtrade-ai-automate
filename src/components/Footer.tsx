
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-cyan-300">О нас</Link></li>
              <li><Link to="/documents" className="hover:text-cyan-300">Документы</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Решения</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/ai-bots" className="hover:text-cyan-300">AI Боты</Link></li>
              <li><Link to="/solutions/data-analysis" className="hover:text-cyan-300">Анализ данных</Link></li>
              <li><Link to="/solutions/ai-protection" className="hover:text-cyan-300">Защита от AI атак</Link></li>
              <li><Link to="/solutions/financial-analysis" className="hover:text-cyan-300">Финансовый AI анализ</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@icg.ai" className="hover:text-cyan-300">info@icg.ai</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://t.me/icgai" className="hover:text-cyan-300">Telegram</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/+79123456789" className="hover:text-cyan-300">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Москва, ул. Тверская, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-4 text-center text-sm">
          © {currentYear} ICG AI. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

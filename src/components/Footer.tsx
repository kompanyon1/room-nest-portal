import { Link } from "react-router-dom";
import {
  Send,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useContent } from "@/hooks/useContent";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { get } = useContent();

  return (
    <footer className="bg-hotel-beige border-t border-hotel-taupe/20 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">
                {get('footer_title', '236 метров')}
              </h3>
              <p className="text-muted-foreground mt-4 mb-6">
                {get('footer_description', 'Гостиница, где каждая деталь создана для незабываемого отдыха и комфорта наших гостей.')}
              </p>
              <div className="flex space-x-4">
               
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5" />
                </a>
               
               
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">{get('footer_contacts_title', 'Контакты')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-hotel-brown mt-0.5" />
                  <span className="text-muted-foreground">{get('footer_address', 'п. Ильинка')}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-hotel-brown" />
                  <a
                    href={`tel:${get('footer_phone', '+74951234567').replace(/[^0-9+]/g, '')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {get('footer_phone', '+7 (495) 123-45-67')}
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-hotel-brown" />
                  <a
                    href={`mailto:${get('footer_email', 'info@236meters.ru')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {get('footer_email', 'info@236meters.ru')}
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">
                {get('footer_links_title', 'Быстрые ссылки')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/rooms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Номера
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    О гостинице
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Условия бронирования
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          
        </div>

        <div className="mt-16 pt-8 border-t border-hotel-taupe/20 text-center text-muted-foreground">
          <p>&copy; {currentYear} {get('footer_copyright', 'Отель 236 метров. Все права защищены.')}</p>
        </div>
      </div>
    </footer>
  );
}

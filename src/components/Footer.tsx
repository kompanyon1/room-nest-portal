
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hotel-beige border-t border-hotel-taupe/20 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Элегант</h3>
              <p className="text-muted-foreground mt-4 mb-6">
                Роскошный отель, где каждая деталь создана для незабываемого отдыха и комфорта наших гостей.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
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
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-hotel-brown mt-0.5" />
                  <span className="text-muted-foreground">
                    ул. Пушкина 10, Москва, Россия, 123456
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-hotel-brown" />
                  <a
                    href="tel:+74951234567"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-hotel-brown" />
                  <a
                    href="mailto:info@elegant.ru"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@elegant.ru
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/rooms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Номера и сьюты
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

          <FadeIn delay={0.4}>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Новости</h4>
              <p className="text-muted-foreground mb-4">
                Подпишитесь на нашу рассылку, чтобы получать эксклюзивные предложения и новости.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 rounded-l-md border-r-0 bg-background focus:ring-0 focus:border-hotel-brown text-sm py-2 px-3"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-r-md bg-hotel-brown text-hotel-cream px-4 text-sm hover:bg-hotel-charcoal transition-colors"
                  >
                    Подписаться
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 pt-8 border-t border-hotel-taupe/20 text-center text-muted-foreground">
          <p>&copy; {currentYear} Отель Элегант. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

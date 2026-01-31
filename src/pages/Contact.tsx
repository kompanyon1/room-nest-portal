import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useContent } from "@/hooks/useContent";

const Contact = () => {
  const { get, loading } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title={get('contact_hero_title', 'Свяжитесь с нами')}
        subtitle={get('contact_hero_subtitle', 'Мы всегда рады ответить на ваши вопросы и помочь с бронированием. Используйте любой удобный для вас способ связи.')}
        imageSrc={get('contact_hero_image', '/street.jpg')}
        minHeight="min-h-[60vh]"
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                {get('contact_info_badge', 'Наши контакты')}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
                {get('contact_info_title', 'Как с нами связаться')}
              </h2>

              <div className="space-y-8">
                <ContactItem
                  icon={<MapPin className="h-6 w-6" />}
                  title="Адрес"
                  details={[
                    get('contact_info_address_1', 'ул. Пушкина 10, Москва'), 
                    get('contact_info_address_2', 'Россия, 123456'),
                    <a
                      key="2gis"
                      href="https://2gis.ru/ulanude/geo/70000001109680850/107.238348,52.126693"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hotel-brown hover:text-hotel-brown/80 transition-colors font-medium"
                    >
                      Наш 2GIS
                    </a>
                  ]}
                />

                <ContactItem
                  icon={<Phone className="h-6 w-6" />}
                  title="Телефон"
                  details={[
                    <a
                      key="phone"
                      href={`tel:${get('contact_info_phone', '+74951234567').replace(/[^0-9+]/g, '')}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {get('contact_info_phone', '+7 (495) 123-45-67')}
                    </a>,
                  ]}
                />

                <ContactItem
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  details={[
                    <a
                      key="email"
                      href={`mailto:${get('contact_info_email_1', 'info@elegant.ru')}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {get('contact_info_email_1', 'info@elegant.ru')}
                    </a>,
                    <a
                      key="booking"
                      href={`mailto:${get('contact_info_email_2', 'booking@elegant.ru')}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {get('contact_info_email_2', 'booking@elegant.ru')}
                    </a>,
                  ]}
                />

                <ContactItem
                  icon={<Clock className="h-6 w-6" />}
                  title="Часы работы"
                  details={[
                    get('contact_info_hours_1', 'Регистрация: 24/7'),
                    get('contact_info_hours_2', 'Ресторан: 6:30 - 23:00'),
                    get('contact_info_hours_3', 'Спа-центр: 9:00 - 21:00'),
                  ]}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-hotel-beige">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                {get('contact_map_title', 'Как нас найти')}
              </h2>
              <p className="text-muted-foreground">
                {get('contact_map_description', 'Мы расположены в центре города, в нескольких минутах ходьбы от основных достопримечательностей и транспортных узлов')}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
              <YMaps query={{ apikey: "e355402b-a492-4cb2-a801-e58aa05b62a9" }}>
                <Map
                  className="w-full h-full"
                  defaultState={{
                    center: [52.127714, 107.238834],
                    zoom: 16,
                    controls: [],
                  }}
                  width="100%"
                  height="100%"
                >
                  <Placemark geometry={[52.127714, 107.238834]} />
                  <ZoomControl options={{ position: { right: 10, top: 10 } }} />
                </Map>
              </YMaps>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.6}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">
                  {get('contact_map_card_1_title', 'Прибытие на автомобиле')}
                </h4>
                <p className="text-muted-foreground">
                  {get('contact_map_card_1_description', 'Доступна частная парковка на территории отеля. Предварительное бронирование рекомендуется.')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">
                  {get('contact_map_card_2_title', 'Общественный транспорт')}
                </h4>
                <p className="text-muted-foreground">
                  {get('contact_map_card_2_description', 'Метро "Центральная" в 5 минутах ходьбы. Автобусы №10, 25, 38 останавливаются рядом с отелем.')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">
                  {get('contact_map_card_3_title', 'Из аэропорта')}
                </h4>
                <p className="text-muted-foreground">
                  {get('contact_map_card_3_description', 'Такси до центрального вокзала, затем маршрутка. Доступна услуга трансфера по запросу.')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function ContactItem({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: React.ReactNode[];
}) {
  return (
    <div className="flex">
      <div className="mr-4 mt-1 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-hotel-beige text-hotel-brown">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <div key={index} className="text-muted-foreground">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;

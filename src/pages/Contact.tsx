import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection 
        title="Свяжитесь с нами"
        subtitle="Мы всегда рады ответить на ваши вопросы и помочь с бронированием. Используйте любой удобный для вас способ связи."
        imageSrc="/contact-hero.jpg"
        minHeight="min-h-[60vh]"
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                  Наши контакты
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
                  Как с нами связаться
                </h2>
                
                <div className="space-y-8">
                  <ContactItem 
                    icon={<MapPin className="h-6 w-6" />}
                    title="Адрес"
                    details={[
                      "ул. Пушкина 10, Москва",
                      "Россия, 123456"
                    ]}
                  />
                  
                  <ContactItem 
                    icon={<Phone className="h-6 w-6" />}
                    title="Телефон"
                    details={[
                      <a 
                        key="phone" 
                        href="tel:+74951234567" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +7 (495) 123-45-67
                      </a>
                    ]}
                  />
                  
                  <ContactItem 
                    icon={<Mail className="h-6 w-6" />}
                    title="Email"
                    details={[
                      <a 
                        key="email" 
                        href="mailto:info@elegant.ru" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@elegant.ru
                      </a>,
                      <a 
                        key="booking" 
                        href="mailto:booking@elegant.ru" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        booking@elegant.ru
                      </a>
                    ]}
                  />
                  
                  <ContactItem 
                    icon={<Clock className="h-6 w-6" />}
                    title="Часы работы"
                    details={[
                      "Регистрация: 24/7",
                      "Ресторан: 6:30 - 23:00",
                      "Спа-центр: 9:00 - 21:00"
                    ]}
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-hotel-beige p-8 rounded-xl">
                <h3 className="font-serif text-2xl font-semibold mb-6">Отправить сообщение</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border-hotel-taupe bg-background/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hotel-brown"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border-hotel-taupe bg-background/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hotel-brown"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Тема
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border-hotel-taupe bg-background/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hotel-brown"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border-hotel-taupe bg-background/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hotel-brown"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-hotel-beige">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Как нас найти
              </h2>
              <p className="text-muted-foreground">
                Мы расположены в центре города, в нескольких минутах ходьбы от основных достопримечательностей и транспортных узлов
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
            <YMaps>

<Map className='map' defaultState={{ center: [52.127714, 107.238834], zoom: 16}} >
<Placemark geometry={[52.127714, 107.238834]}/>
<ZoomControl options={{}}/>
</Map>

</YMaps>
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
 
              </div>
            </div>
          </FadeIn>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.6}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">Прибытие на автомобиле</h4>
                <p className="text-muted-foreground">Доступна частная парковка на территории отеля. Предварительное бронирование рекомендуется.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">Общественный транспорт</h4>
                <p className="text-muted-foreground">Метро "Центральная" в 5 минутах ходьбы. Автобусы №10, 25, 38 останавливаются рядом с отелем.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={1}>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h4 className="font-serif text-lg font-medium mb-3">Из аэропорта</h4>
                <p className="text-muted-foreground">Такси до центрального вокзала, затем маршрутка. Доступна услуга трансфера по запросу.</p>
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
  details 
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

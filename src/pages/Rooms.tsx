import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RoomCard } from "@/components/RoomCard";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Bed, Users, Square, Wifi, Coffee, Tv } from "lucide-react";
import { rooms } from "@/lib/rooms";

const Rooms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Наши номера"
        subtitle="Откройте для себя идеальное размещение для вашего пребывания.У нас есть все для вашего комфорта."
        imageSrc="/kaka.jpg"
        minHeight="min-h-[60vh]"
      />

      {/* Rooms Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <FadeIn key={room.id} delay={0.05 * (index + 1)}>
                <RoomCard room={room} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-hotel-beige">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы о наших номерах и процессе
                бронирования
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <FaqItem
                  question="Какое время заезда и выезда?"
                  answer="Стандартное время заезда - 14:00, время выезда - 12:00. Если вам нужен ранний заезд или поздний выезд, пожалуйста, свяжитесь с нами заранее, и мы постараемся учесть ваши пожелания при наличии такой возможности."
                />
                <FaqItem
                  question="Включен ли завтрак в стоимость номера?"
                  answer="Да, во все наши тарифы включен завтрак-буфет, который сервируется в ресторане отеля с 7:00 до 10:30."
                />
                <FaqItem
                  question="Могу ли я отменить или изменить бронирование?"
                  answer="Политика отмены зависит от выбранного тарифа. Гибкий тариф позволяет бесплатную отмену за 24 часа до заезда. Невозвратный тариф не подлежит изменению или отмене. Для получения подробной информации, пожалуйста, проверьте условия при бронировании."
                />
                <FaqItem
                  question="Есть ли в отеле парковка?"
                  answer="Да, у нас есть подземная парковка для гостей отеля. Услуга платная, стоимость - 2000 рублей в сутки. Рекомендуем забронировать место заранее, так как количество мест ограничено."
                />
                <FaqItem
                  question="Можно ли разместиться с домашними животными?"
                  answer="Мы разрешаем проживание с маленькими домашними животными весом до 5 кг в определенных номерах, за дополнительную плату. Пожалуйста, сообщите нам заранее, если планируете приехать с питомцем."
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="pb-6 border-b border-hotel-taupe/20">
      <h3 className="font-serif text-xl font-medium mb-3">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}

export default Rooms;

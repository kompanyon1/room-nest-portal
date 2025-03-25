import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RoomCard } from "@/components/RoomCard";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { getFeaturedRooms } from "@/lib/rooms";

const Index = () => {
  const featuredRooms = getFeaturedRooms();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Добро пожаловать в отель 236 метров"
        subtitle="Изысканное воплощение комфорта и роскоши. Откройте для себя новый уровень гостеприимства."
        buttonText="Забронировать номер"
        buttonLink="/rooms"
        imageSrc="/kaka.jpg"
        showStats={true}
      />

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="kaka.jpg"
                    alt="Hotel 236 meters Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-hotel-brown rounded-br-xl -z-10"></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                  О нашем отеле
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Роскошь в каждой детали
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Отель 236 метров — это не просто место для ночлега, а
                  настоящий оазис комфорта и изысканности. Каждый номер
                  тщательно продуман до мельчайших деталей, чтобы обеспечить
                  незабываемый опыт пребывания для наших гостей.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Наш отель сочетает в себе классическую элегантность и
                  современные удобства, создавая идеальную атмосферу как для
                  деловых путешественников, так и для туристов, ищущих роскошный
                  отдых.
                </p>
                <Button className="rounded-full px-8" asChild>
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gradient-to-b from-background to-hotel-beige">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                Наши номера
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Выберите идеальный номер для вашего пребывания
              </h2>
              <p className="text-muted-foreground">
                От стандартных номеров до роскошных люксов — мы предлагаем
                размещение, которое удовлетворит все ваши потребности.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <FadeIn key={room.id} delay={0.1 * (index + 1)}>
                <RoomCard room={room} featured />
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8" asChild>
              <Link to="/rooms">Посмотреть все номера</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-hotel-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-background text-hotel-brown text-sm mb-4">
                Отзывы
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Что говорят наши гости
              </h2>
              <p className="text-muted-foreground">
                Мы гордимся впечатлениями, которые оставляют наши гости
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Прекрасный отель с безупречным сервисом. Номера оформлены со вкусом, а персонал всегда готов помочь. Обязательно вернусь снова!"
              author="Анна К."
              role="Бизнес-путешественник"
            />
            <TestimonialCard
              quote="Останавливались с семьей на выходные. Дети были в восторге от просторного номера, а мы оценили внимание к деталям и прекрасное расположение."
              author="Сергей и Мария В."
              role="Семейный отдых"
            />
            <TestimonialCard
              quote="Идеальное место для романтического уикенда. Тихие и уютные номера, изысканная кухня и атмосфера настоящей роскоши."
              author="Ольга Д."
              role="Праздничный отдых"
            />
          </FadeInStagger>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-hotel-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInStagger>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Готовы забронировать идеальный отдых?
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                Свяжитесь с нами сегодня и позвольте нам помочь спланировать
                ваше идеальное пребывание в отеле 236 метров.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white text-hotel-charcoal hover:bg-hotel-beige"
                  asChild
                >
                  <Link to="/rooms">Забронировать номер</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-white/90 border border-border rounded-xl p-8 h-full flex flex-col shadow-sm">
      <div className="text-4xl text-hotel-brown mb-4">"</div>
      <p className="text-muted-foreground mb-6 flex-grow italic">{quote}</p>
      <div className="border-t pt-4 mt-auto">
        <div className="font-medium">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}

export default Index;

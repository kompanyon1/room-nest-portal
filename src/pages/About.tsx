
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="О нашем отеле"
        subtitle="Откройте для себя историю и философию отеля Элегант — места, где роскошь встречается с исключительным сервисом."
        imageSrc="corp2.jpg"
        minHeight="min-h-[60vh]"
      />

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/corp2.jpg"
                    alt="Hotel History"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-1/3 aspect-square bg-hotel-brown rounded-bl-xl -z-10"></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                  Наша история
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Наследие элегантности
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Отель Элегант начал свою историю в 1998 году, когда
                    историческое здание начала 20 века было реставрировано с
                    тщательным вниманием к оригинальным архитектурным деталям и
                    в то же время оборудовано всеми современными удобствами.
                  </p>
                  <p>
                    На протяжении более двух десятилетий мы совершенствовали
                    искусство гостеприимства, создавая атмосферу, где каждый
                    гость чувствует себя как дома, но в окружении исключительной
                    красоты и комфорта.
                  </p>
                  <p>
                    Сегодня отель Элегант остается символом утонченного
                    гостеприимства, где традиции встречаются с инновациями,
                    создавая незабываемые впечатления для каждого гостя.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-hotel-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-background text-hotel-brown text-sm mb-4">
                Наши ценности
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Принципы, которые нас определяют
              </h2>
              <p className="text-foreground">
                Наши ценности лежат в основе всего, что мы делаем, обеспечивая
                исключительный опыт для каждого гостя
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-10">
            <FadeInStagger>
              <ValueCard
                title="Внимание к деталям"
                description="Мы верим, что именно детали создают незабываемые впечатления. От качества постельного белья до температуры вашего утреннего кофе — мы обращаем внимание на каждую мелочь."
              />
              <ValueCard
                title="Персонализированный сервис"
                description="Мы стремимся предвосхищать потребности наших гостей, предлагая индивидуальный подход и персонализированный сервис, который превосходит ожидания."
              />
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-hotel-beige text-hotel-brown text-sm mb-4">
                Наша команда
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Знакомьтесь с нашими экспертами
              </h2>
              <p className="text-muted-foreground">
                За каждым великолепным опытом стоит команда профессионалов,
                стремящихся сделать ваше пребывание исключительным
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInStagger>
              <TeamMember
                name="Александр Петров"
                position="Генеральный директор"
                image="/team-1.jpg"
              />
              <TeamMember
                name="Екатерина Иванова"
                position="Директор по гостеприимству"
                image="/team-2.jpg"
              />
              <TeamMember
                name="Михаил Соколов"
                position="Шеф-повар"
                image="/team-3.jpg"
              />
              <TeamMember
                name="Анна Кузнецова"
                position="Менеджер по обслуживанию гостей"
                image="/team-4.jpg"
              />
            </FadeInStagger>
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="py-20 bg-hotel-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                Наши достижения
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Признанное качество
              </h2>
              <p className="text-white/80">
                Мы гордимся наградами и признанием, которые подтверждают наше
                стремление к совершенству
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeInStagger>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                  <img src="/award-1.svg" alt="Award" className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-medium mb-2">
                  Лучший бутик-отель
                </h4>
                <p className="text-sm text-white/60">2023</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                  <img src="/award-2.svg" alt="Award" className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-medium mb-2">
                  Выбор путешественников
                </h4>
                <p className="text-sm text-white/60">2022, 2023</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                  <img src="/award-3.svg" alt="Award" className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-medium mb-2">
                  Премия за дизайн
                </h4>
                <p className="text-sm text-white/60">2021</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                  <img src="/award-4.svg" alt="Award" className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-medium mb-2">
                  Лучший сервис
                </h4>
                <p className="text-sm text-white/60">2020, 2022</p>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background p-8 rounded-xl border border-border max-w-md h-full">
      <h3 className="font-serif text-xl font-medium mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TeamMember({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <div className="relative mb-6 rounded-xl overflow-hidden aspect-[3/4]">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-1">{name}</h3>
      <p className="text-muted-foreground">{position}</p>
    </div>
  );
}

export default About;

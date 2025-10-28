
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Tent, Bath } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const About = () => {
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
        title={get('about_hero_title', 'О нашем отеле')}
        subtitle={get('about_hero_subtitle', 'Откройте для себя историю и философию отеля Элегант — места, где роскошь встречается с исключительным сервисом.')}
        imageSrc={get('about_hero_image', 'corp2.jpg')}
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
                  {get('about_story_badge', 'Наша история')}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  {get('about_story_title', 'Наследие элегантности')}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{get('about_story_description_1', 'Отель Элегант начал свою историю в 1998 году...')}</p>
                  <p>{get('about_story_description_2', 'На протяжении более двух десятилетий мы совершенствовали искусство гостеприимства...')}</p>
                  <p>{get('about_story_description_3', 'Сегодня отель Элегант остается символом утонченного гостеприимства...')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leisure Activities */}
      <section className="py-20 bg-hotel-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-background text-hotel-brown text-sm mb-4">
                {get('about_leisure_badge', 'Досуг и отдых')}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                {get('about_leisure_title', 'Комфортный отдых для наших гостей')}
              </h2>
              <p className="text-foreground">
                {get('about_leisure_description', 'В нашем отеле предусмотрены различные варианты для комфортного и приятного досуга')}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInStagger>
              <LeisureCard 
                title={get('about_leisure_card_1_title', 'Баня')}
                description={get('about_leisure_card_1_description', 'Расслабьтесь в нашей традиционной русской бане с березовыми вениками и чаем из трав.')}
                icon={<Bath className="w-12 h-12 text-hotel-brown/60" />}
              />
              <LeisureCard 
                title={get('about_leisure_card_2_title', 'Беседка')}
                description={get('about_leisure_card_2_description', 'Уютная беседка в окружении природы — идеальное место для семейных посиделок или дружеских встреч.')}
                icon={<Tent className="w-12 h-12 text-hotel-brown/60" />}
              />
              <LeisureCard 
                title={get('about_leisure_card_3_title', 'Мангальная зона')}
                description={get('about_leisure_card_3_description', 'Специально оборудованная зона для барбекю, где вы можете приготовить вкусные блюда на гриле.')}
                icon={<Flame className="w-12 h-12 text-hotel-brown/60" />}
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

function LeisureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-background p-6 rounded-xl border border-border max-w-md h-full">
      <CardContent className="p-0 flex flex-col items-center text-center pt-4">
        <div className="mb-6">{icon}</div>
        <h3 className="font-serif text-xl font-medium mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
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

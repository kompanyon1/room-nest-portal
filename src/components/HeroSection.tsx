
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger } from "./FadeIn";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  overlay?: boolean;
  minHeight?: string;
  showStats?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink = "/rooms",
  imageSrc,
  overlay = true,
  minHeight = "min-h-[90vh]",
  showStats = false,
}: HeroSectionProps) {
  return (
    <div 
      className={`relative w-full ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <FadeInStagger>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 md:mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              {subtitle}
            </p>
            {buttonText && (
              <Button
                size="lg"
                className="rounded-full px-8 text-base"
                asChild
              >
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
            )}
          </FadeInStagger>
        </div>

        {showStats && (
          <FadeIn 
            className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl" 
            delay={0.6}
          >
            <StatItem value="50+" label="Роскошных номеров" />
            <StatItem value="5★" label="Звездный сервис" />
            <StatItem value="24/7" label="Консьерж-услуги" />
            <StatItem value="100%" label="Довольных гостей" />
          </FadeIn>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center backdrop-blur-sm bg-black/20 rounded-xl px-4 py-6">
      <div className="text-white font-bold text-3xl md:text-4xl mb-2">{value}</div>
      <div className="text-white/80 text-sm md:text-base">{label}</div>
    </div>
  );
}

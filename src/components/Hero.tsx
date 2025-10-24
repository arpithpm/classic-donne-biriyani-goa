import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBiryani from "@/assets/hero-biryani.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBiryani})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        {/* Karnataka flag inspired dot pattern overlay */}
        <div className="absolute inset-0 dots-pattern-dual opacity-20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium border border-primary/30">
              {t('hero.tagline')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg"
              onClick={() => scrollToSection('menu')}
            >
              {t('hero.viewMenu')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8"
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.visitUs')}
            </Button>
          </div>

          {/* Online Ordering */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="https://www.swiggy.com/city/central-goa/classic-donne-biryani-naika-waddo-calangute-bardez-nor-baga-calangute-rest931582"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              🛵 Order on Swiggy
            </a>
            <a
              href="https://www.zomato.com/goa/classic-donne-biryani-calangute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              🍽️ Order on Zomato
            </a>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground">
            <a
              href="https://maps.app.goo.gl/9fxjWZLBAqKCo8Jp6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all cursor-pointer"
            >
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-primary-foreground/80">Lavinia Street, Calangute</p>
              </div>
            </a>
            
            <div className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-sm text-primary-foreground/80">8 AM - 11 PM Daily</p>
              </div>
            </div>
            
            <a
              href="tel:+918177909828"
              className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-primary-foreground/80">081779 09828</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

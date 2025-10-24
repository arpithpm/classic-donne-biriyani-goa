import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBiryani from "@/assets/hero-biryani.jpg";

const Hero = () => {
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
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium border border-primary/30">
              Authentic South Indian Cuisine
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Classic Donne Biryani
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            Where Traditional Flavors Meet Contemporary Comfort
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl">
            Experience the authentic taste of Hyderabadi biryani and South Indian delicacies 
            in the heart of Calangute, Goa. Perfect for families, tourists, and food lovers.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg"
              onClick={() => scrollToSection('menu')}
            >
              View Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8"
              onClick={() => scrollToSection('contact')}
            >
              Visit Us
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground">
            <div className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-primary-foreground/80">Lavinia Street, Calangute</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-sm text-primary-foreground/80">8 AM - 11 PM Daily</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-primary-foreground/80">081779 09828</p>
              </div>
            </div>
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

import { Award, Users, Heart, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Award,
      title: t('about.authentic.title'),
      description: t('about.authentic.desc')
    },
    {
      icon: Users,
      title: t('about.family.title'),
      description: t('about.family.desc')
    },
    {
      icon: Heart,
      title: t('about.quality.title'),
      description: t('about.quality.desc')
    },
    {
      icon: Utensils,
      title: t('about.modern.title'),
      description: t('about.modern.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t('about.story.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.story.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.story.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

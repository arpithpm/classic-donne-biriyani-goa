import { Award, Users, Heart, Utensils } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Authentic Recipes",
      description: "Traditional Hyderabadi and South Indian preparation methods passed down through generations"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Generous family feast packs and comfortable dining atmosphere perfect for gatherings"
    },
    {
      icon: Heart,
      title: "Quality Ingredients",
      description: "Fresh, premium ingredients carefully selected to ensure authentic taste in every dish"
    },
    {
      icon: Utensils,
      title: "Modern Comfort",
      description: "Contemporary dining experience with elegant ambiance at affordable prices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Taste the Tradition
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Classic Donne Biryani, we bring you the authentic flavors of South India 
            right here in Goa. Our restaurant combines traditional recipes with modern comfort, 
            creating a dining experience that celebrates heritage while embracing contemporary elegance.
            With a 4.9-star rating from over 400+ happy customers, we're proud to be one of Calangute's 
            favorite dining destinations.
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
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We specialize in bringing the rich culinary heritage of South India to Goa's vibrant food scene. 
              Our signature donne biryani, served in traditional style, has become a favorite among locals 
              and tourists alike. Every dish is prepared with care, using time-honored techniques and the 
              finest ingredients to deliver an authentic taste experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're craving aromatic biryani, crispy dosas, or flavorful curries, our menu offers 
              something for everyone. We pride ourselves on generous portions, family-friendly pricing, and 
              a welcoming atmosphere that makes every meal memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

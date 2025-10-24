import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sahil Korgaokar",
      rating: 5,
      text: "Great chicken donne biryani and chicken kebab"
    },
    {
      name: "banu chandra",
      rating: 5,
      text: "Bengalurians must try …."
    },
    {
      name: "Yashas L",
      rating: 5,
      text: "Excellent authentic biryani! The flavors are amazing and portions are generous."
    },
    {
      name: "Prakash N",
      rating: 5,
      text: "Best biryani in Goa! The ambiance is great and service is quick."
    },
    {
      name: "govt boys hostel Pandharpur",
      rating: 5,
      text: "Amazing food quality and taste. Worth every penny!"
    },
    {
      name: "Food Lover",
      rating: 5,
      text: "The family pack is perfect for gatherings. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-slide-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-semibold text-card-foreground">
                {review.name}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="font-bold text-lg text-foreground">5.0</span>
            <span className="text-muted-foreground">Average Rating on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

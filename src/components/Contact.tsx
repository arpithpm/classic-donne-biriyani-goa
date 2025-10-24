import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Come experience the authentic flavors of South India in Calangute, Goa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 hover-lift bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Location</h3>
                  <p className="text-muted-foreground mb-3">
                    Classic Donne Biryani<br />
                    Calangute, Goa, India
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Classic+Donne+Biryani+Calangute+Goa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <p className="font-medium text-card-foreground">Monday - Sunday</p>
                      <p className="text-lg font-semibold text-card-foreground">8:00 AM - 11:00 PM</p>
                      <p className="text-sm mt-1">Open All Week</p>
                    </div>
                    <p className="text-sm pt-2 border-t border-border/50 mt-2">Dine-in & Takeaway Available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Contact</h3>
                  <p className="text-muted-foreground mb-2">
                    For reservations and inquiries:
                  </p>
                  <p className="font-medium text-card-foreground">
                    Visit us at our location in Calangute
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-24 h-[500px]">
            <Card className="h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5!2d73.75!3d15.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMyJzI2LjQiTiA3M8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Classic Donne Biryani Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Experience Authentic Biryani?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit us today for dine-in or takeaway. Perfect for family gatherings, 
            casual meals, or when you're craving authentic South Indian flavors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Classic+Donne+Biryani+Calangute+Goa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

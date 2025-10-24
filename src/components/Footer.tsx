import { MapPin, Clock, Utensils } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">
              Classic Donne Biryani
            </h3>
            <p className="text-background/80 mb-4">
              Experience the authentic taste of South India in the heart of Calangute, Goa.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Utensils className="w-5 h-5" />
              <span className="font-medium">Authentic • Fresh • Delicious</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Location</p>
                  <p>Calangute, Goa, India</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Hours</p>
                  <p>Open Daily</p>
                  <p className="text-sm">Dine-in & Takeaway</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/80">
            <p className="text-sm">
              © {currentYear} Classic Donne Biryani. All rights reserved.
            </p>
            <p className="text-sm">
              Made with ❤️ for authentic food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

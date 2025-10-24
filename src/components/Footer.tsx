import { MapPin, Clock, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Karnataka inspired dot pattern overlay */}
      <div className="absolute inset-0 dots-pattern-dual opacity-5 pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">
              {t('hero.title')}
            </h3>
            <p className="text-background/80 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Utensils className="w-5 h-5" />
              <span className="font-medium">{t('footer.tagline2')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  {t('nav.reviews')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.visitUs')}</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">{t('contact.location')}</p>
                  <p>{t('contact.address2')}</p>
                  <p>{t('contact.address3')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">{t('contact.hours')}</p>
                  <p>{t('contact.hoursTime')}</p>
                  <p className="text-sm">{t('contact.hoursOpen')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/80">
            <p className="text-sm">
              © {currentYear} {t('footer.copyright')}
            </p>
            <p className="text-sm">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

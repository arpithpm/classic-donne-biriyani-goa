import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
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
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('contact.location')}</h3>
                  <p className="text-muted-foreground mb-3">
                    {t('contact.address1')}<br />
                    {t('contact.address2')}<br />
                    {t('contact.address3')}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Bew47FuCXNWeYANp6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    {t('contact.getDirections')}
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
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('contact.hours')}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <p className="font-medium text-card-foreground">{t('contact.hoursDay')}</p>
                      <p className="text-lg font-semibold text-card-foreground">{t('contact.hoursTime')}</p>
                      <p className="text-sm mt-1">{t('contact.hoursOpen')}</p>
                    </div>
                    <p className="text-sm pt-2 border-t border-border/50 mt-2">{t('contact.hoursService')}</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('contact.contact')}</h3>
                  <p className="text-muted-foreground mb-2">
                    {t('contact.contactText')}
                  </p>
                  <a 
                    href="tel:+918177909828"
                    className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors"
                  >
                    081779 09828
                  </a>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('contact.services')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <a
                        href="https://www.swiggy.com/city/central-goa/classic-donne-biryani-naika-waddo-calangute-bardez-nor-baga-calangute-rest931582"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded transition-colors"
                      >
                        Swiggy
                      </a>
                      <a
                        href="https://www.zomato.com/goa/classic-donne-biryani-calangute"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors"
                      >
                        Zomato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-24 h-[500px]">
            <Card className="h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5!2d73.7561!3d15.5436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1c06aaae971%3A0xecf454a7ea3b11b1!2sClassic%20Donne%20Biriyani!5e0!3m2!1sen!2sin!4v1234567890"
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
        <div className="mt-16 space-y-8">
          {/* Online Ordering Section */}
          <div className="text-center bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl p-8 md:p-12 border border-orange-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t('contact.orderOnline.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('contact.orderOnline.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.swiggy.com/city/central-goa/classic-donne-biryani-naika-waddo-calangute-bardez-nor-baga-calangute-rest931582"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg text-lg"
              >
                🛵 {t('contact.orderOnline.swiggy')}
              </a>
              <a
                href="https://www.zomato.com/goa/classic-donne-biryani-calangute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg text-lg"
              >
                🍽️ {t('contact.orderOnline.zomato')}
              </a>
            </div>
          </div>

          {/* Visit Us Section */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t('contact.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('contact.cta.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/Bew47FuCXNWeYANp6"
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
      </div>
    </section>
  );
};

export default Contact;

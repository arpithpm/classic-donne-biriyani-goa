import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t('nav.about'), id: "about" },
    { label: t('nav.menu'), id: "menu" },
    { label: t('nav.gallery'), id: "gallery" },
    { label: t('nav.reviews'), id: "testimonials" },
    { label: t('nav.contact'), id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-2xl font-bold font-display transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {t('hero.title')}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <LanguageSwitcher />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t('nav.visitUs')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />
              <button
                className={`${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
            >
              {t('nav.visitUs')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

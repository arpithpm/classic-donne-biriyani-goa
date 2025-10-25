import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import interior1 from "@/assets/restaurant-interior-1.jpg";
import interior2 from "@/assets/restaurant-interior-2.jpg";
import foodPlate1 from "@/assets/food-plate-1.jpg";
import foodPlate2 from "@/assets/food-plate-2.jpg";
import foodPlate3 from "@/assets/food-plate-3.jpg";
import dosaPrep from "@/assets/dosa-preparation.jpg";
import restaurantView1 from "@/assets/restaurant-view-1.jpg";
import restaurantView2 from "@/assets/restaurant-view-2.jpg";
import foodDisplay1 from "@/assets/food-display-1.jpg";
import foodDisplay2 from "@/assets/food-display-2.jpg";
import biryaniCloseUp from "@/assets/biryani-close-up.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const images = [
    { src: interior1, alt: "Classic Donne Biryani Restaurant Interior", category: t('gallery.interior') },
    { src: foodPlate1, alt: "Authentic Biryani Serving", category: t('gallery.food') },
    { src: restaurantView1, alt: "Restaurant Exterior View", category: t('gallery.interior') },
    { src: foodPlate2, alt: "Traditional Thali", category: t('gallery.food') },
    { src: dosaPrep, alt: "Fresh Dosa Preparation", category: t('gallery.food') },
    { src: interior2, alt: "Modern Dining Area", category: t('gallery.interior') },
    { src: biryaniCloseUp, alt: "Biryani Close-up with Spices", category: t('gallery.food') },
    { src: foodPlate3, alt: "Delicious Food Platter", category: t('gallery.food') },
    { src: restaurantView2, alt: "Restaurant Ambiance", category: t('gallery.interior') },
    { src: foodDisplay1, alt: "Food Display Counter", category: t('gallery.food') },
    { src: foodDisplay2, alt: "Variety of Dishes", category: t('gallery.food') },
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('gallery.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift animate-slide-up aspect-[4/3]"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery view"
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

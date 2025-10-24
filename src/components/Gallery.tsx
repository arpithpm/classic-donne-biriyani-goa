import { useState } from "react";
import interior1 from "@/assets/restaurant-interior-1.jpg";
import interior2 from "@/assets/restaurant-interior-2.jpg";
import foodPlate1 from "@/assets/food-plate-1.jpg";
import foodPlate2 from "@/assets/food-plate-2.jpg";
import dosaPrep from "@/assets/dosa-preparation.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: interior1, alt: "Classic Donne Biryani Restaurant Interior", category: "Interior" },
    { src: foodPlate1, alt: "Authentic Biryani Serving", category: "Food" },
    { src: interior2, alt: "Modern Dining Area", category: "Interior" },
    { src: foodPlate2, alt: "Traditional Thali", category: "Food" },
    { src: dosaPrep, alt: "Fresh Dosa Preparation", category: "Food" },
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Take a visual journey through our restaurant - from our elegant dining spaces 
              to our delicious, authentic dishes
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

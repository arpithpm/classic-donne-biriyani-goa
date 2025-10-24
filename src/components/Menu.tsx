import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const Menu = () => {
  const { t } = useLanguage();
  const menuCategories = [
    {
      id: "chicken",
      name: t('menu.chicken'),
      price: "₹180",
      items: [
        { name: t('menu.chickenBiryani'), description: t('menu.chickenBiryani.desc') },
        { name: t('menu.chickenKurma'), description: t('menu.chickenKurma.desc') },
        { name: t('menu.chickenFry'), description: t('menu.chickenFry.desc') },
        { name: t('menu.chickenDrumstick'), description: t('menu.chickenDrumstick.desc') },
        { name: t('menu.chickenKabab'), description: t('menu.chickenKabab.desc') },
      ]
    },
    {
      id: "mutton",
      name: t('menu.mutton'),
      price: "₹300",
      items: [
        { name: t('menu.muttonBiryani'), description: t('menu.muttonBiryani.desc') },
        { name: t('menu.muttonKurma'), description: t('menu.muttonKurma.desc') },
        { name: t('menu.muttonFry'), description: t('menu.muttonFry.desc') },
        { name: t('menu.muttonPepper'), description: t('menu.muttonPepper.desc') },
      ]
    },
    {
      id: "egg",
      name: t('menu.egg'),
      items: [
        { name: t('menu.eggMasala'), price: "₹130", description: t('menu.eggMasala.desc') },
        { name: t('menu.eggBhurji'), price: "₹80", description: t('menu.eggBhurji.desc') },
        { name: t('menu.omelette'), price: "₹70", description: t('menu.omelette.desc') },
        { name: t('menu.boiledEgg'), price: "₹45", description: t('menu.boiledEgg.desc') },
      ]
    },
    {
      id: "family",
      name: t('menu.family'),
      items: [
        { name: t('menu.chickenPepper'), price: "₹849" },
        { name: t('menu.chickenKurma'), price: "₹849" },
        { name: t('menu.chickenChilly'), price: "₹849" },
        { name: t('menu.chickenKabab'), price: "₹849" },
        { name: t('menu.chickenDrumstick'), price: "₹849" },
        { name: t('menu.muttonPepperDry'), price: "₹1499" },
        { name: t('menu.muttonKurma'), price: "₹1499" },
      ]
    },
    {
      id: "sides",
      name: t('menu.sides'),
      items: [
        { name: t('menu.biryaniRice'), price: "₹90", description: t('menu.biryaniRice.desc') },
        { name: t('menu.chapati'), price: "₹50", description: t('menu.chapati.desc') },
        { name: t('menu.whiteRice'), price: "₹50", description: t('menu.whiteRice.desc') },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('menu.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Detailed Menu */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="chicken" className="w-full">
            <div className="mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
              <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:grid-cols-5 bg-card p-1 gap-1">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="whitespace-nowrap px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover-lift bg-card"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-card-foreground">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-primary ml-4 flex-shrink-0">
                          {item.price || category.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {t('menu.note')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('menu.priceRange')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

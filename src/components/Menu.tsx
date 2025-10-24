import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuCard from "@/assets/menu-card.png";

const Menu = () => {
  const menuCategories = [
    {
      id: "chicken",
      name: "Chicken Specialties",
      price: "₹180",
      items: [
        { name: "Chicken Biryani", description: "Our signature aromatic biryani with tender chicken" },
        { name: "Chicken Kurma", description: "Rich, creamy curry with authentic spices" },
        { name: "Chicken Fry", description: "Crispy, perfectly spiced preparation" },
        { name: "Chicken Drumstick", description: "Tender, marinated drumsticks" },
        { name: "Chicken Kabab", description: "Grilled to perfection with traditional spices" },
      ]
    },
    {
      id: "mutton",
      name: "Mutton Delicacies",
      price: "₹300",
      items: [
        { name: "Mutton Biryani", description: "Premium biryani with succulent mutton" },
        { name: "Mutton Kurma", description: "Traditional curry with aromatic spices" },
        { name: "Mutton Fry", description: "Spiced and tender mutton preparation" },
        { name: "Mutton Pepper", description: "Bold, peppery flavor profile" },
      ]
    },
    {
      id: "egg",
      name: "Egg Varieties",
      items: [
        { name: "Egg Masala", price: "₹130", description: "Rich, spiced curry" },
        { name: "Egg Bhurji", price: "₹80", description: "Scrambled Indian style" },
        { name: "Omelette Egg", price: "₹70", description: "Simple, fresh preparation" },
        { name: "Boiled Egg (2 pcs)", price: "₹45", description: "Healthy option" },
      ]
    },
    {
      id: "family",
      name: "Family Feast Packs (1 KG)",
      items: [
        { name: "Chicken Pepper", price: "₹849" },
        { name: "Chicken Kurma", price: "₹849" },
        { name: "Chicken Chilly", price: "₹849" },
        { name: "Chicken Kabab", price: "₹849" },
        { name: "Chicken Drumstick", price: "₹849" },
        { name: "Mutton Pepper Dry", price: "₹1499" },
        { name: "Mutton Kurma", price: "₹1499" },
      ]
    },
    {
      id: "sides",
      name: "Add-Ons",
      items: [
        { name: "Biryani Rice", price: "₹90", description: "Fragrant basmati rice" },
        { name: "Chapati (2 pcs)", price: "₹50", description: "Fresh, soft bread" },
        { name: "White Rice", price: "₹50", description: "Steamed perfection" },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our selection of authentic South Indian dishes, 
            from aromatic biryanis to traditional accompaniments
          </p>
        </div>

        {/* Menu Card Image */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
            <img 
              src={menuCard} 
              alt="Classic Donne Biryani Menu Card" 
              className="w-full h-auto"
            />
          </Card>
        </div>

        {/* Detailed Menu */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="chicken" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-card">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

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
          <p className="text-sm text-muted-foreground">
            All biryanis served with white raita and green chutney
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

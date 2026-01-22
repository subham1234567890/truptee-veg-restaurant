import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Info } from "lucide-react";

const menuData = {
  "South Indian": [
    { name: "Idli", price: "₹50" },
    { name: "Sambar Idli", price: "₹60" },
    { name: "Vada", price: "₹55" },
    { name: "Sambar Vada", price: "₹65" },
    { name: "Masala Upma", price: "₹65" },
    { name: "Plain Dosa", price: "₹80" },
    { name: "Onion Plain Dosa", price: "₹85" },
    { name: "Masala Dosa", price: "₹105" },
    { name: "Onion Masala Dosa", price: "₹110" },
    { name: "Butter Masala Dosa", price: "₹105" },
    { name: "Onion Butter Masala Dosa", price: "₹110" },
    { name: "Paper Plain Dosa", price: "₹110" },
    { name: "Paper Masala Dosa", price: "₹120" },
    { name: "Paper Onion Masala Dosa", price: "₹125" },
    { name: "Truptee Special Masala Dosa", price: "₹160" },
    { name: "Paneer Masala Dosa", price: "₹150" },
    { name: "Mysore Masala Dosa", price: "₹135" },
    { name: "Rawa Plain Dosa", price: "₹110" },
    { name: "Rawa Onion Dosa", price: "₹115" },
    { name: "Rawa Masala Dosa", price: "₹125" },
    { name: "Rawa Onion Masala Dosa", price: "₹130" },
    { name: "Plain Uttapam", price: "₹100" },
    { name: "Tomato Uttapam", price: "₹105" },
    { name: "Onion Uttapam", price: "₹105" },
    { name: "Onion Tomato Uttapam", price: "₹110" },
    { name: "Masala Uttapam", price: "₹110" },
    { name: "Onion Masala Uttapam", price: "₹120" },
    { name: "Thick Chutney", price: "₹30" },
    { name: "Dosa Sabji", price: "₹30" },
  ],
  Chinese: [
    { name: "Veg Chowmein", price: "₹180" },
    { name: "Mix Chowmein", price: "₹190" },
    { name: "Schezwan Chowmein", price: "₹195" },
    { name: "Veg Fried Rice", price: "₹180" },
    { name: "Mix Fried Rice", price: "₹198" },
    { name: "Schezwan Fried Rice", price: "₹215" },
    { name: "Veg Manchurian", price: "₹205" },
    { name: "Gobi Manchurian", price: "₹205" },
    { name: "Chilli Veg", price: "₹205" },
    { name: "Chilli Gobi", price: "₹205" },
    { name: "Mushroom Manchurian", price: "₹225" },
    { name: "Chilli Mushroom", price: "₹225" },
    { name: "Garlic Mushroom", price: "₹225" },
    { name: "Mushroom Salt & Pepper", price: "₹225" },
    { name: "Paneer Manchurian", price: "₹225" },
    { name: "Garlic Paneer", price: "₹225" },
    { name: "Paneer Salt & Pepper", price: "₹225" },
    { name: "Chilli Paneer", price: "₹225" },
  ],
  Tandoor: [
    { name: "Tandoor Roti", price: "₹45" },
    { name: "Butter Tandoor Roti", price: "₹50" },
    { name: "Plain Naan", price: "₹65" },
    { name: "Garlic Naan", price: "₹70" },
    { name: "Butter Naan", price: "₹70" },
    { name: "Masala Naan", price: "₹80" },
    { name: "Plain Kulcha", price: "₹55" },
    { name: "Masala Kulcha", price: "₹77" },
    { name: "Chapati", price: "₹16" },
    { name: "Butter Chapati", price: "₹22" },
    { name: "Plain Paratha", price: "₹45" },
    { name: "Lacha Paratha", price: "₹70" },
  ],
  "North Indian": [
    { name: "Chana Masala", price: "₹190" },
    { name: "Mix Veg / Kadai Veg", price: "₹198" },
    { name: "Aloo Gobi Masala / Fry", price: "₹198" },
    { name: "Gobi Fry", price: "₹210" },
    { name: "Gobi Chikmandu", price: "₹210" },
    { name: "Gobi Kasturi Methi", price: "₹210" },
    { name: "Veg Makhanwala", price: "₹210" },
    { name: "Veg Kolhapuri", price: "₹240" },
    { name: "Dewani Veg / Dingri Veg", price: "₹198" },
    { name: "Veg DoPiaza", price: "₹185" },
    { name: "Green Peas Masala", price: "₹185" },
    { name: "Green Peas Fry", price: "₹175" },
    { name: "Aloo Jeera / Aloo Bharta", price: "₹220" },
    { name: "Stuffed Baigan", price: "₹190" },
    { name: "Baigan Masala", price: "₹190" },
    { name: "Baigan Bharta", price: "₹190" },
    { name: "Bhindi Fry / Masala", price: "₹190" },
    { name: "Bhindi Chatpati", price: "₹230" },
    { name: "Veg Kofta Curry", price: "₹240" },
    { name: "Malai Kofta Curry", price: "₹240" },
    { name: "Kofta Gulbadan", price: "₹185" },
    { name: "Parwal Fry / Masala", price: "₹175" },
    { name: "Aloo Dum", price: "₹198" },
    { name: "Mix Veg Fry", price: "₹215" },
    { name: "Banarasi Aloo Dum", price: "₹198" },
    { name: "Veg Hyderabadi", price: "₹198" },
    { name: "Veg Jhal Fry / Veg Punjabi", price: "₹185" },
    { name: "Dahi Baigan", price: "₹235" },
    { name: "Truptee Spl. Sanz Savera", price: "₹220" },
    { name: "Gobi Palak", price: "₹220" },
  ],
  Snacks: [
    { name: "Aloo Chop", price: "₹60" },
    { name: "Paneer Pakoda", price: "₹190" },
    { name: "Gobi Pakoda", price: "₹170" },
    { name: "Veg Pakoda", price: "₹170" },
    { name: "Chole Bhature", price: "₹160" },
    { name: "Bhature (1 Pc)", price: "₹60" },
    { name: "Dahi Vada", price: "₹90" },
    { name: "Aloo Paratha", price: "₹90" },
    { name: "Aloo Paratha with Curd", price: "₹115" },
    { name: "Puri Bhaji (2 Pc)", price: "₹115" },
    { name: "Puri (1 Pc)", price: "₹40" },
    { name: "Bhaji", price: "₹45" },
  ],
  Beverages: [
    { name: "Hot Milk", price: "₹60" },
    { name: "Tea / Black Tea", price: "₹55" },
    { name: "Nescafe Coffee", price: "₹55" },
    { name: "Masala Tea", price: "₹55" },
    { name: "Jaljeera", price: "₹65" },
    { name: "Buttermilk", price: "₹75" },
    { name: "Lassi (Sweet / Salt)", price: "₹95" },
    { name: "Cold Coffee", price: "₹95" },
    { name: "Cold Coffee with Ice Cream", price: "₹115" },
    { name: "Milkshake", price: "₹95" },
    { name: "Milkshake with Ice Cream", price: "₹115" },
    { name: "Ice Cream (Vanilla / Choco Chips / Strawberry)", price: "₹95" },
    { name: "Ice Cream (Butterscotch)", price: "₹105" },
    { name: "Ice Cream (Fruit Overload)", price: "₹110" },
    { name: "Cold Drink", price: "₹45" },
    { name: "Masala Cold Drink", price: "₹70" },
    { name: "Fresh Lime Soda", price: "₹70" },
    { name: "Mineral Water", price: "₹20" },
  ],
};

const timings = {
  "South Indian": "7:00 AM – 12:00 Noon | 4:00 PM – 9:00 PM",
  Chinese: "11:00 AM – 10:30 PM",
  Tandoor: "11:30 AM – 3:30 PM | 7:30 PM – 10:30 PM",
  "North Indian": "11:30 AM – 3:30 PM | 7:30 PM – 10:30 PM",
  Snacks: "4:00 PM – 8:00 PM",
  Beverages: "7:00 AM – 10:30 PM",
};

export const FullMenu = ({ isVisible }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("South Indian");

  const filterItems = (items) => {
    if (!searchTerm) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section
      id="menu"
      data-animate
      className="py-16 md:py-24 bg-white pb-28 md:pb-24"
      data-testid="full-menu-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-brand-brown font-poppins text-sm font-semibold uppercase tracking-wider">
            Explore Our Menu
          </span>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2"
            data-testid="menu-title"
          >
            Full Menu
          </h2>
          <p className="text-brand-charcoal/70 font-poppins mt-3 max-w-2xl mx-auto">
            All prices include taxes. Parcel charges ₹5 per box.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40" size={20} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-brand-green/20 rounded-full font-poppins focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-transparent"
              data-testid="menu-search-input"
            />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 gap-2 mb-8 bg-transparent
    md:gap-4 md:max-w-3xl md:mx-auto">
            {Object.keys(menuData).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="bg-brand-cream border border-brand-green/20 data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-full px-6 py-2 font-poppins font-medium transition-all hover:border-brand-green"
                data-testid={`menu-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="bg-brand-cream rounded-2xl p-6 md:p-8 border border-brand-green/10">
                <div className="flex items-center gap-2 mb-6 text-sm text-brand-charcoal/70 font-poppins">
                  <Info size={16} className="text-brand-green" />
                  <span>Available: {timings[category]}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {filterItems(items).map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-brand-green/10 last:border-0"
                      data-testid={`menu-item-${index}`}
                    >
                      <span className="font-poppins text-brand-charcoal font-medium">
                        {item.name}
                      </span>
                      <span className="font-poppins text-brand-brown font-bold ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {filterItems(items).length === 0 && (
                  <p className="text-center text-brand-charcoal/50 font-poppins py-8">
                    No items found matching "{searchTerm}"
                  </p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-6 text-center">
          <p className="font-poppins text-brand-charcoal/80 mb-2">
            <strong>Note:</strong> Taxes will be charged extra as applicable. Parcel charges ₹5 per box.
          </p>
          <p className="font-poppins text-brand-charcoal/80">
            Freshly prepared food – please allow ~20 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;

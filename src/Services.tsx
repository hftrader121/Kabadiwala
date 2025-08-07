import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Car, 
  Zap, 
  Wrench, 
  Home as HomeIcon,
  Scale,
  IndianRupee,
  Truck,
  Battery,
  HardDrive,
  Cpu,
  Tv2,
  Newspaper,
  Factory,
  CircleDot,
  Trash2,      // New Icon for Tin
  Armchair,    // New Icon for Furniture
  HardHat,     // New Icon for Construction
  Scissors     // New Icon for Textile
} from "lucide-react";

// Import existing and new image assets
import scrapIron from "@/assets/scrap-iron.jpg";
import scrapAC from "@/assets/scrap-ac.jpg";
import scrapCopper from "@/assets/scrap-copper.jpg";
import scrapVehicles from "@/assets/scrap-vehicles.jpg";
import scrapAluminium from "@/assets/scrap-aluminium.jpg";
import scrapBattery from "@/assets/scrap-battery.jpg";
import scrapEwaste from "@/assets/scrap-ewaste.jpg";
import scrapPlastic from "@/assets/scrap-plastic.jpg";
import scrapSteel from "@/assets/scrap-steel.jpg";
import scrapMotor from "@/assets/scrap-motor.jpg";
import scrapPaper from "@/assets/scrap-paper.jpg";
import scrapLead from "@/assets/scrap-lead.jpg";
import scrapMachinery from "@/assets/scrap-machinery.jpg";
import scrapTires from "@/assets/scrap-tires.jpg";
import scrapBrass from "@/assets/scrap-brass.jpg";
import scrapTin from "@/assets/scrap-tin.jpg";                 // New Image
import scrapFurniture from "@/assets/scrap-furniture.jpg";     // New Image
import scrapConstruction from "@/assets/scrap-construction.jpg"; // New Image
import scrapTextile from "@/assets/scrap-textile.jpg";           // New Image


const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scrapTypes = [
    {
      id: "iron",
      name: "Scrap Iron (Loha)",
      category: "metal",
      description: "We purchase all forms of iron scrap including old gates, window grills, construction bars (saria), pipes, machinery parts, and iron sheets.",
      image: scrapIron,
      icon: Wrench,
      priceRange: "₹25-35 per kg",
      color: "bg-orange-500",
      features: ["Free pickup for bulk quantities", "Accurate digital weighing on-site", "Immediate payment"]
    },
    {
        id: "steel",
        name: "Stainless Steel (SS)",
        category: "metal",
        description: "Kitchen sinks, industrial equipment, pipes, and other stainless steel items. We accept all grades of SS for recycling.",
        image: scrapSteel,
        icon: Wrench,
        priceRange: "₹70-120 per kg",
        color: "bg-stone-500",
        features: ["Grading based on nickel content", "Corrosion-resistant value", "Bulk quantity accepted"]
    },
    {
      id: "copper",
      name: "Copper (Tamba)",
      category: "metal",
      description: "High-value copper scrap including electrical wires, motor windings, pipes, utensils, and coils. We offer the best rates for pure copper.",
      image: scrapCopper,
      icon: Wrench,
      priceRange: "₹600-700 per kg",
      color: "bg-amber-600",
      features: ["Highest market value guaranteed", "On-the-spot purity assessment", "Transparent pricing"]
    },
    {
      id: "brass",
      name: "Brass (Pital)",
      category: "metal",
      description: "We buy various brass items such as old bathroom fittings (taps, faucets), decorative pieces, puja items, and industrial brass parts.",
      image: scrapBrass,
      icon: Wrench,
      priceRange: "₹250-450 per kg",
      color: "bg-yellow-500",
      features: ["Precise quality and alloy testing", "Fair and competitive pricing", "Free pickup from your location"]
    },
    {
      id: "aluminium",
      name: "Aluminium Scrap",
      category: "metal",
      description: "Includes aluminium utensils, door and window frames, old cans, automotive parts, and aluminium wiring.",
      image: scrapAluminium,
      icon: Wrench,
      priceRange: "₹100-150 per kg",
      color: "bg-slate-400",
      features: ["Lightweight but valuable", "Sorted and graded for best price", "Instant payment upon collection"]
    },
    {
        id: "lead",
        name: "Lead Scrap (Sisa)",
        category: "metal",
        description: "Heavy and valuable lead scrap found in lead-acid batteries, pipes, sheeting, and other industrial applications.",
        image: scrapLead,
        icon: Wrench,
        priceRange: "₹150-180 per kg",
        color: "bg-gray-700",
        features: ["High-density metal value", "Safe and compliant handling", "Essential for battery recycling"]
    },
    {
        id: "tin",
        name: "Tin & Light Metal",
        category: "metal",
        description: "Light gauge metal scrap, including tin containers, cans, roofing sheets, and other similar light metal objects.",
        image: scrapTin,
        icon: Trash2,
        priceRange: "₹15-25 per kg",
        color: "bg-cyan-500",
        features: ["Ideal for household cleanouts", "Quick and easy disposal", "Collected in bulk"]
    },
    {
      id: "ewaste",
      name: "E-Waste (Electronic Scrap)",
      category: "electronics",
      description: "Old computers, laptops, motherboards, RAM, CPUs, televisions (TVs), printers, and other electronic gadgets.",
      image: scrapEwaste,
      icon: HardDrive,
      priceRange: "Variable",
      color: "bg-indigo-500",
      features: ["Data security and destruction", "Component-level valuation", "Certified e-waste recycling"]
    },
    {
      id: "ac",
      name: "Old AC & Fridge",
      category: "electronics",
      description: "AC units (Window, Split) and refrigerators. We also buy compressors, washing machines, and geysers.",
      image: scrapAC,
      icon: Zap,
      priceRange: "₹800-4500 per unit",
      color: "bg-blue-500",
      features: ["Safe refrigerant gas recovery", "Valuation based on type & size", "Eco-friendly component recycling"]
    },
    {
      id: "battery",
      name: "Inverter & Car Batteries",
      category: "electronics",
      description: "Used batteries from cars, trucks, and home inverters. We ensure environmentally safe disposal and recycling.",
      image: scrapBattery,
      icon: Battery,
      priceRange: "₹80-110 per kg",
      color: "bg-red-600",
      features: ["Proper handling of hazardous materials", "Price based on lead content", "Supporting a circular economy"]
    },
    {
      id: "motors",
      name: "Electric Motors & Pumps",
      category: "electronics",
      description: "Scrap electric motors from water pumps, washing machines, and industrial machinery. Price depends on copper content.",
      image: scrapMotor,
      icon: Cpu,
      priceRange: "₹40-80 per kg",
      color: "bg-teal-500",
      features: ["Valuation based on copper winding", "Small and large motors accepted", "Efficient on-site evaluation"]
    },
    {
      id: "vehicles",
      name: "Scrap Vehicles",
      category: "automotive",
      description: "End-of-life two-wheelers (scooters, bikes) and four-wheelers (cars, vans). We handle all the paperwork for you.",
      image: scrapVehicles,
      icon: Car,
      priceRange: "₹15,000-80,000",
      color: "bg-rose-700",
      features: ["Complete RTO documentation support", "Free towing service", "Legally compliant dismantling"]
    },
    {
        id: "tires",
        name: "Old Tires (Rubber)",
        category: "automotive",
        description: "Used tires from all vehicles including cars, bikes, trucks, and tractors. We ensure they are sent for proper recycling.",
        image: scrapTires,
        icon: CircleDot,
        priceRange: "₹100-500 per tire",
        color: "bg-black",
        features: ["Prevents illegal dumping", "All vehicle types accepted", "Eco-friendly disposal route"]
    },
    {
        id: "paper",
        name: "Paper & Cardboard (Raddi)",
        category: "paper",
        description: "Waste paper including old newspapers, magazines, books, cardboard boxes (cartons), and office paper waste.",
        image: scrapPaper,
        icon: Newspaper,
        priceRange: "₹12-20 per kg",
        color: "bg-lime-500",
        features: ["Free home/office pickup", "Bulk quantities welcome", "Promotes paper recycling"]
    },
    {
        id: "machinery",
        name: "Industrial & Factory Scrap",
        category: "industrial",
        description: "Dismantling and purchase of heavy machinery, factory equipment, metal structures, and other industrial surplus.",
        image: scrapMachinery,
        icon: Factory,
        priceRange: "Contract-based",
        color: "bg-sky-800",
        features: ["Complete factory clearance", "Professional dismantling services", "Valuation based on project scope"]
    },
    {
        id: "construction",
        name: "Construction Debris",
        category: "construction",
        description: "Scrap from construction/demolition sites, including concrete, bricks, wood, metal beams, and building materials.",
        image: scrapConstruction,
        icon: HardHat,
        priceRange: "Project-based",
        color: "bg-yellow-800",
        features: ["Full site clearance service", "Material segregation on-site", "Safe and compliant disposal"]
    },
    {
        id: "furniture",
        name: "Old Furniture",
        category: "furniture",
        description: "Unwanted household and office furniture such as wooden beds, sofas, metal almirahs, plastic chairs, and tables.",
        image: scrapFurniture,
        icon: Armchair,
        priceRange: "Item-based",
        color: "bg-purple-500",
        features: ["Home and office pickup", "Dismantling service available", "Handles wood, metal & plastic"]
    },
    {
      id: "plastic",
      name: "Scrap Plastic",
      category: "general",
      description: "Bulk plastic scrap including old chairs, tables, buckets, pipes, and other household or industrial plastic items.",
      image: scrapPlastic,
      icon: Scale,
      priceRange: "₹10-20 per kg",
      color: "bg-pink-500",
      features: ["Mixed plastic types accepted", "Helps reduce landfill waste", "Ideal for large cleanout projects"]
    },
    {
        id: "textile",
        name: "Fabric & Textile Scrap",
        category: "textile",
        description: "Post-industrial or post-consumer textile waste, including fabric cut-offs (katran), old clothing, and other bulk garment scrap.",
        image: scrapTextile,
        icon: Scissors,
        priceRange: "₹5-15 per kg",
        color: "bg-rose-400",
        features: ["For garment units & tailors", "Sorted by material type", "Supports textile recycling"]
    },
    {
      id: "mixed",
      name: "Mixed Household Scrap",
      category: "general",
      description: "A combination of various scrap items from household or office cleanouts, including e-waste, metals, and plastics.",
      image: scrapIron,
      icon: HomeIcon,
      priceRange: "Variable",
      color: "bg-gray-500",
      features: ["Convenient all-in-one pickup", "We do the sorting for you", "Best for complete property clearing"]
    }
  ];

  const categories = [
    { id: "all", name: "All", count: scrapTypes.length },
    { id: "metal", name: "Metal", count: scrapTypes.filter(s => s.category === "metal").length },
    { id: "electronics", name: "Electronics", count: scrapTypes.filter(s => s.category === "electronics").length },
    { id: "automotive", name: "Automotive", count: scrapTypes.filter(s => s.category === "automotive").length },
    { id: "industrial", name: "Industrial", count: scrapTypes.filter(s => s.category === "industrial" || s.category === 'construction').length },
    { id: "paper", name: "Paper", count: scrapTypes.filter(s => s.category === "paper").length },
    { id: "furniture", name: "Furniture", count: scrapTypes.filter(s => s.category === "furniture").length },
    { id: "textile", name: "Textile", count: scrapTypes.filter(s => s.category === "textile").length },
    { id: "general", name: "General", count: scrapTypes.filter(s => s.category === "general").length }
  ];

  const filteredScrap = selectedCategory === "all" 
    ? scrapTypes 
    : scrapTypes.filter(scrap => {
        if (selectedCategory === 'industrial') {
            return scrap.category === 'industrial' || scrap.category === 'construction';
        }
        return scrap.category === selectedCategory;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Comprehensive Scrap Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From single household items to large industrial clear-outs, we buy all types of scrap. Expect fair prices, free pickup, and instant payment.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-16 z-30 border-b-2 border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2 transition-all duration-200 ease-in-out"
              >
                {category.name}
                <Badge variant={selectedCategory === category.id ? "default" : "secondary"} className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredScrap.map((scrap) => (
              <Card 
                key={scrap.id} 
                className="group hover:shadow-eco transition-all duration-300 hover:scale-[1.03] bg-gradient-card overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={scrap.image} 
                    alt={scrap.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 ${scrap.color} text-white p-2 rounded-full shadow-lg`}>
                    <scrap.icon size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {scrap.priceRange}
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-primary">{scrap.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">{scrap.description}</p>
                  
                  <div className="space-y-2 mb-6 mt-auto pt-4 border-t border-dashed">
                    {scrap.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => navigate("/sell-scrap")}
                    >
                      <Scale className="mr-2" size={16} />
                      Sell Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      title="Get a Quote"
                      onClick={() => window.open("tel:+919958654732")}
                    >
                      <IndianRupee size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Turning your scrap into cash has never been easier. Just follow these simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Call us or fill out our online form with your scrap details.", icon: "📞" },
              { step: "2", title: "Schedule Pickup", desc: "We'll arrange a convenient time for our team to visit your location.", icon: "📅" },
              { step: "3", title: "Weigh & Evaluate", desc: "On-site transparent weighing and material assessment for the best price.", icon: "⚖️" },
              { step: "4", title: "Instant Payment", desc: "Get paid on the spot via cash or your preferred digital method.", icon: "💰" }
            ].map((process, index) => (
              <Card key={index} className="text-center bg-gradient-card transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{process.icon}</div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get the Best Price for Your Scrap?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't let your scrap go to waste. Contact us today for a free, no-obligation quote and arrange for a hassle-free pickup service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate("/sell-scrap")}
              className="gap-2"
            >
              <Truck size={20} />
              Book Free Pickup
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("tel:+919958654732")}
              className="gap-2 bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              <IndianRupee size={20} />
              Get a Quote Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Services;
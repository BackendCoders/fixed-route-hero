import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const primaryAreas = [
  { name: "Gillingham", description: "Our home base in Dorset" },
  { name: "Shaftesbury", description: "Historic hilltop town" },
  { name: "Mere", description: "Gateway to Wiltshire" },
  { name: "Wincanton", description: "Somerset market town" },
  { name: "Tisbury", description: "Nadder Valley village" },
];

const surroundingAreas = [
  "Sturminster Newton",
  "Blandford Forum",
  "Stalbridge",
  "Templecombe",
  "Bruton",
  "Castle Cary",
  "Warminster",
  "Frome",
  "Shepton Mallet",
  "Yeovil",
  "Sherborne",
  "Motcombe",
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Areas We Cover
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Based in Gillingham, Dorset, we provide reliable taxi services across the Blackmore Vale, Somerset borders, and surrounding villages. Wherever you need to go, we'll get you there.
          </p>
        </div>

        {/* Primary Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {primaryAreas.map((area, index) => (
            <div
              key={index}
              className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 rounded-xl p-6 text-center hover:bg-secondary-foreground/20 transition-colors"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-1">{area.name}</h3>
              <p className="text-sm text-secondary-foreground/70">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Surrounding Areas */}
        <div className="bg-secondary-foreground/5 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">
            We Also Serve These Towns & Villages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {surroundingAreas.map((area, index) => (
              <span
                key={index}
                className="bg-secondary-foreground/10 border border-secondary-foreground/20 px-4 py-2 rounded-full text-secondary-foreground/90 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Airport Connections */}
        <div id="airport-transfers" className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Airport Transfer Specialists
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Travelling from Gillingham, Shaftesbury, or anywhere in the local area? We offer fixed-price airport transfers to all major UK airports including Heathrow, Gatwick, Bristol, Bournemouth, Southampton, and Stansted.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Heathrow Airport – approx. 2 hours",
                  "Gatwick Airport – approx. 2.5 hours",
                  "Bristol Airport – approx. 1 hour",
                  "Bournemouth Airport – approx. 45 mins",
                ].map((route, index) => (
                  <li key={index} className="flex items-center gap-2 text-primary-foreground/90">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    {route}
                  </li>
                ))}
              </ul>
              <Button variant="heroDark" size="lg" asChild>
                <a href="tel:01747-123456">
                  Get Airport Transfer Quote
                </a>
              </Button>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-48 h-48 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-foreground">24/7</p>
                  <p className="text-primary-foreground/90">Airport Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;

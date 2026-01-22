import { Car, Plane, Briefcase, Heart, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Local Taxi Services",
    description: "Reliable taxi service across Gillingham, Shaftesbury, Mere, Wincanton, and surrounding villages. Whether you need a quick trip to the shops or transport to a local event, we're here for you.",
    features: ["Fixed pricing", "No surge charges", "Local knowledge"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Stress-free airport transfers to Heathrow, Gatwick, Bristol, Bournemouth, and all UK airports. We track your flight and adjust for delays at no extra cost.",
    features: ["Flight tracking", "Meet & greet", "Fixed quotes"],
  },
  {
    icon: Briefcase,
    title: "Executive Taxi Service",
    description: "Premium travel for business professionals. Comfortable vehicles, professional drivers, and punctual service for meetings, conferences, and corporate travel.",
    features: ["Premium vehicles", "Professional drivers", "Account options"],
  },
  {
    icon: Heart,
    title: "Wedding Taxi Hire",
    description: "Make your special day memorable with our reliable wedding transport. Decorated vehicles available, and we'll ensure the bridal party arrives in style and on time.",
    features: ["Decorated vehicles", "Punctual service", "Multiple cars"],
  },
  {
    icon: Building2,
    title: "Hospital Appointments",
    description: "Dependable transport to hospitals and medical appointments. We understand the importance of being on time and offer a caring, patient service.",
    features: ["Door-to-door", "Patient assistance", "Waiting service"],
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Night or day, we're available when you need us. Early morning trains, late-night returns, or emergency travel – First Taxis is just a phone call away.",
    features: ["Round the clock", "No extra fees", "Reliable service"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Taxi Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From local journeys to airport transfers, First Taxis provides reliable, professional taxi services across Dorset and Somerset. All our prices are fixed – no surprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xl" asChild>
            <a href="tel:01747-123456">
              Get a Fixed Price Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

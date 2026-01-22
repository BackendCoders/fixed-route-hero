import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Book Your Taxi?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Call us now for immediate pickup or to book your journey in advance. No waiting, no fuss – just reliable local taxi service.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Clock className="w-5 h-5" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <MapPin className="w-5 h-5" />
              <span>Local & Airport</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Phone className="w-5 h-5" />
              <span>Fixed Prices</span>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-8">
            <p className="text-primary-foreground/70 mb-2">Call now to book</p>
            <a 
              href="tel:01747-123456"
              className="text-4xl md:text-5xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              01747 123456
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="heroDark" size="xl" asChild>
            <a href="tel:01747-123456">
              <Phone className="w-5 h-5" />
              Book Your Taxi Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

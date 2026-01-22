import { Phone, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-taxi.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-primary-foreground text-sm font-medium">24/7 Availability • Fixed Prices</span>
          </div>

          {/* H1 - SEO Optimized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            Reliable Local & Airport Taxi Service
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Serving Gillingham, Shaftesbury, Mere & Wincanton with trusted, fixed-price taxi and airport transfers. Your local taxi company you can depend on.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-secondary-foreground/80">
              <Shield className="w-5 h-5 text-primary" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Local Dorset Drivers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:01747-123456">
                <Phone className="w-5 h-5" />
                Call for Immediate Pickup
              </a>
            </Button>
            <Button variant="heroDark" size="xl" asChild className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <a href="#services">
                View Our Services
              </a>
            </Button>
          </div>

          {/* Phone Number Display */}
          <div className="mt-8 p-4 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-secondary-foreground/70 text-sm mb-1">Book your taxi now</p>
            <a 
              href="tel:01747-123456" 
              className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              01747 123456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

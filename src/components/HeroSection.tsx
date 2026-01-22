import { Phone, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import heroImage from "@/assets/hero-taxi.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-primary-foreground text-sm font-medium">24/7 Availability • Fixed Prices</span>
            </div>

            {/* H1 - SEO Optimized */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
              Reliable Local & Airport Taxi Service
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
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

            {/* CTA Buttons - Mobile Only */}
            <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:01747-123456">
                  <Phone className="w-5 h-5" />
                  Call for Immediate Pickup
                </a>
              </Button>
            </div>

            {/* Phone Number Display - Desktop */}
            <div className="hidden lg:block mt-8 p-4 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg">
              <p className="text-secondary-foreground/70 text-sm mb-1">Or call us directly</p>
              <a 
                href="tel:01747-123456" 
                className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                01747 123456
              </a>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:max-w-md lg:ml-auto">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

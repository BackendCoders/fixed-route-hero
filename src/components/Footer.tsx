import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FT</span>
              </div>
              <span className="font-bold text-xl">First Taxis</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Your reliable local taxi service serving Gillingham, Shaftesbury, Mere, Wincanton, and surrounding areas. Fixed prices, 24/7 availability.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Fully licensed and insured
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:01747-123456" 
                  className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01747 123456
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@firsttaxis.co.uk" 
                  className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@firsttaxis.co.uk
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="w-5 h-5" />
                Gillingham, Dorset
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Clock className="w-5 h-5" />
                Open 24/7
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Local Taxi Services",
                "Airport Transfers",
                "Executive Taxi Service",
                "Wedding Taxi Hire",
                "Hospital Appointments",
                "School Runs",
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              {[
                "Gillingham",
                "Shaftesbury",
                "Mere",
                "Wincanton",
                "Tisbury",
                "Sturminster Newton",
              ].map((area, index) => (
                <li key={index}>
                  <a 
                    href="#areas" 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} First Taxis. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

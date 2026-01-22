import { Shield, PoundSterling, Clock, Users, Star, Phone } from "lucide-react";

const reasons = [
  {
    icon: PoundSterling,
    title: "Fixed Prices, No Surprises",
    description: "Unlike ride-share apps with surge pricing, our fares are quoted upfront. The price we quote is the price you pay – no hidden extras.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Need a taxi at 4am for an early flight? No problem. We're available round the clock, every day of the year.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "All our drivers are fully licensed, DBS checked, and our vehicles are regularly inspected for your safety and peace of mind.",
  },
  {
    icon: Users,
    title: "Local, Friendly Drivers",
    description: "Our drivers are local people who know every road, shortcut, and landmark in the area. You're not just a fare – you're a neighbour.",
  },
  {
    icon: Star,
    title: "Trusted for Over 10 Years",
    description: "We've built our reputation on reliability, punctuality, and genuine customer care. Many of our customers have been with us for years.",
  },
  {
    icon: Phone,
    title: "Personal Service",
    description: "Speak to a real person when you book. No apps, no algorithms – just friendly service from start to finish.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose First Taxis?
          </h2>
          <p className="text-lg text-muted-foreground">
            When you choose First Taxis, you're choosing a local taxi company that puts reliability, safety, and customer service first. Here's why our customers keep coming back.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-card-foreground mb-4 italic">
            "First Taxis have been taking me to the airport for years. Always on time, always friendly, and the fixed prices mean no nasty surprises. Wouldn't use anyone else!"
          </blockquote>
          <p className="text-muted-foreground">
            — Margaret T., Shaftesbury
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

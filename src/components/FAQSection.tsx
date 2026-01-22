import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a taxi with First Taxis?",
    answer: "Booking couldn't be easier. Simply give us a call on 01747 123456 to speak with our friendly team. We can take bookings in advance or arrange an immediate pickup. No apps needed – just pick up the phone.",
  },
  {
    question: "What areas do you cover?",
    answer: "We're based in Gillingham, Dorset, and cover the surrounding areas including Shaftesbury, Mere, Wincanton, Tisbury, Sturminster Newton, and many more villages across Dorset, Somerset, and Wiltshire. We also provide airport transfers across the UK.",
  },
  {
    question: "How much does a taxi cost?",
    answer: "All our prices are fixed and quoted upfront – no meters, no surge pricing. Call us with your journey details and we'll give you an exact price. Once quoted, that's the price you pay, guaranteed.",
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Absolutely! Airport transfers are one of our specialities. We cover all major UK airports including Heathrow, Gatwick, Bristol, Bournemouth, Southampton, and more. We track your flight and adjust for delays at no extra cost.",
  },
  {
    question: "Are your drivers licensed and insured?",
    answer: "Yes, all our drivers are fully licensed by the local council, DBS checked, and our vehicles are regularly inspected and fully insured. Your safety is our priority.",
  },
  {
    question: "Do you operate 24/7?",
    answer: "Yes! We operate around the clock, 365 days a year. Whether you need an early morning airport run, a late-night pickup, or transport on Christmas Day, we're here for you.",
  },
  {
    question: "Can I book a taxi for someone else?",
    answer: "Of course! Many customers book taxis for elderly relatives, children, or visitors. Just let us know the passenger's name and contact number, and we'll take care of the rest.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, card payments, and bank transfers. For regular customers and business accounts, we can also arrange invoiced payments.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions about our taxi service? Find answers to common queries below, or give us a call – we're always happy to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the typical turnaround time?", a: "Standard orders are completed in 7-10 business days after design approval. Rush orders can be delivered in as little as 5 days." },
  { q: "How can I contact your team?", a: "You can reach us by phone at +1 (970) 794-3622, email at orders@custompackagingline.com, or through the quote form on our website." },
  { q: "What printing options are available?", a: "We offer CMYK offset printing, digital printing, and flexographic printing. Our team will recommend the best option based on your design and quantity." },
  { q: "What is the ordering process?", a: "Simply submit a quote request, share your design (or let us create one for free), approve the mockup, and we handle production and delivery." },
  { q: "What is the minimum order quantity?", a: "Our minimum order starts at just 50 boxes, making it accessible for small businesses and startups." },
  { q: "Can I fully customize the size and style?", a: "Absolutely! Every box is made to your exact specifications, custom dimensions, shapes, materials, and finishes." },
  { q: "Do you offer 3D mockups?", a: "Yes, we provide free 3D digital mockups so you can visualize your packaging before production begins." },
];

const FAQSection = () => (
  <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-10">
    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
      Frequently Asked Questions
    </h3>
    <div className="w-16 h-1 bg-[#FFC107] rounded-full mt-3 mb-6" />
    <Accordion type="single" collapsible defaultValue="faq-0">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-white/20 last:border-0">
          <AccordionTrigger className="text-left font-semibold text-white hover:no-underline [&>svg]:text-[#FFC107]">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#FFC107] text-white rounded-xl p-4 leading-relaxed">
              {faq.a}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQSection;
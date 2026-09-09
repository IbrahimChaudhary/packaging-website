import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Truck,
  CreditCard,
  Paintbrush,
  Clock,
  Leaf,
  Settings,
  Package,
  Printer,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";

const marqueeImages = [
  "/images/categories/cosmetic_1.jpg",
  "/images/categories/mailer_1.jpg",
  "/images/categories/candle_1.jpg",
  "/images/categories/chocolate_1.jpg",
  "/images/categories/jewellery_1.jpg",
  "/images/categories/gift_1.jpg",
  "/images/categories/soap_1.jpg",
  "/images/categories/perfume_1.jpg",
];

const heroStats = [
  { value: "840+", label: "brands supported" },
  { value: "98%", label: "on-time delivery" },
  { value: "30 yrs", label: "family expertise" },
];

const sections = [
  {
    eyebrow: "How It Works",
    title: "What We Actually Do (And Why It's Easier Than You Think)",
    text: "Custom packaging used to mean chasing designers, going back and forth with suppliers, waiting weeks, and paying more than you planned.\n\nWe changed that.\n\nAt Custom Packaging, the entire journey, from your first idea to the box landing at your doorstep, is handled by us.",
    bullets: [
      "Design your packaging online, no prior experience needed",
      "Free 3D mockup so you see it before a single box is made",
      "Transparent pricing upfront, no die and plate charges",
      "Fast 7-day turnaround with free shipping included",
    ],
    image: "/images/categories/mailer_2.jpg",
    reverse: false,
  },
  {
    eyebrow: "Our Range",
    title: "Everything You Need, Under One Roof",
    text: "We manufacture and deliver a full range of custom packaging solutions, from everyday retail boxes to premium, luxury presentation.",
    bullets: [
      "Custom Boxes — mailer, retail, corrugated shipping & display stands",
      "Rigid & Luxury Boxes — magnetic closure, tray & sleeve designs",
      "Flexible Packaging — mylar bags, resealable pouches, food-grade",
      "Popular styles: tuck, gable, pillow & window boxes",
    ],
    image: "/images/categories/luxury_1.jpg",
    reverse: true,
  },
  {
    eyebrow: "Customization",
    title: "Custom Means Custom, Every Detail, Your Way",
    text: "No two brands are alike, and neither are their boxes. At Custom Packaging, you choose every detail.",
    bullets: [
      "Printing — offset, digital, or flexographic",
      "Finishes — spot UV, embossing, foil stamping, soft touch",
      "Add-ons — inserts, dividers, bubble wrap, custom stickers",
      "If you can imagine it, we can print it, cut it, and ship it",
    ],
    image: "/images/categories/cosmetic_1.jpg",
    reverse: false,
  },
];

const perks = [
  { icon: Paintbrush, title: "Free Design Support", desc: "With unlimited revisions" },
  { icon: Package, title: "Free 3D Mockups", desc: "Before production" },
  { icon: Truck, title: "Free Shipping", desc: "On every order" },
  { icon: Clock, title: "7-Day Fast Turnaround", desc: "Rush orders available" },
  { icon: CreditCard, title: "No Die & Plate Charges", desc: "Saving you hundreds on setup fees" },
  { icon: Settings, title: "Low MOQ", desc: "Start small, scale fast" },
  { icon: Printer, title: "Dedicated Support", desc: "At every step of the process" },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "Recyclable and biodegradable packaging" },
];

const qualityPoints = [
  "Colors that stay vibrant and consistent across every run",
  "Structural integrity that holds through shipping and handling",
  "Eco-friendly and recyclable options for brands that care about sustainability",
];

const Eyebrow = ({ children }: { children: string }) => (
  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
    {children}
  </span>
);

const AboutUs = () => (
  <>
    {/* Hero Banner */}
    <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
      <img
        src="/images/categories/luxury_1.jpg"
        alt="Custom Packaging"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mt-2 mb-4">
          Custom Packaging That Builds Brands
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          Three generations of packaging craft, now built for modern brands.
        </p>
        <Link to="/custom-boxes">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover"
          >
            Get Your Free Quote
          </Button>
        </Link>

        {/* Trust stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-10">
          {heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-primary-foreground font-black text-xl md:text-2xl">
                {s.value}
              </p>
              <p className="text-xs text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image Marquee */}
    <div className="relative overflow-hidden bg-muted py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent z-10" />
      <div className="flex animate-marquee gap-6">
        {[...marqueeImages, ...marqueeImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Product showcase"
            className="h-24 md:h-32 w-40 md:w-48 object-cover rounded-xl flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </div>

    {/* Story Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Eyebrow>Our Story</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-8">
          We've Been in This Business Long Before "Unboxing" Was a Thing
        </h2>
        <div className="space-y-4 text-left sm:text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Three generations. Thirty years. One family obsession with
            packaging done right.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Custom Packaging wasn't built in a boardroom, it grew out of a
            deep-rooted family trade, passed down from one generation to the
            next, each one refining the craft, raising the standard, and
            staying committed to one simple belief: packaging should do more
            than just protect a product. It should sell it.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            For decades, we built our name on the shop floor, in the smell of
            fresh ink, the precision of die-cut edges, and the satisfaction
            of handing a finished box to a business owner whose face lit up
            the moment they held it. That's still what drives us.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Now, we're bringing that same legacy online, and making premium,
            custom packaging accessible to brands across Pakistan and around
            the world.
          </p>
        </div>
      </div>
    </section>

    {/* Alternating Content Sections */}
    {sections.map((s, i) => (
      <section
        key={i}
        className={i % 2 === 1 ? "py-20 bg-muted" : "py-20 bg-background"}
      >
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={s.reverse ? "md:order-2" : ""}>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mt-2 mb-4">
              {s.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line mb-5">
              {s.text}
            </p>
            <ul className="space-y-3">
              {s.bullets.map((b, bi) => (
                <li key={bi} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.reverse ? "md:order-1" : ""}>
            <img
              src={s.image}
              alt={s.title}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-border"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    ))}

    {/* Quality Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <Eyebrow>Our Standard</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-6">
          Quality That Speaks for Itself
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Every order that leaves our facility goes through the same
          standard that three generations of our family have stood behind:
          sharp prints, accurate cuts, durable materials, and packaging that
          actually shows up looking the way it should.
        </p>
        <ul className="inline-block text-left space-y-3 mb-6">
          {qualityPoints.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-lg">{p}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground text-lg font-bold">
          We don't chase shortcuts. We chase quality.
        </p>
      </div>
    </section>

    {/* Built for All Sizes */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <Eyebrow>Scale With Us</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-6">
          Built for Businesses of Every Size
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          A custom box used to be something only big brands could afford. We
          believe that's wrong. Low minimum order quantities, wholesale
          pricing options, and free design support mean that whether you're
          launching your very first product or managing a multi-SKU catalog,
          Custom Packaging is built to scale with you, not price you out.
        </p>
      </div>
    </section>

    {/* Perks Grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <Eyebrow>Why Us</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2">
            Why Businesses Choose Custom Packaging
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            We're not just a supplier you order from and forget. We're the
            team behind your packaging, the ones who make sure every box
            that carries your name looks like it belongs there.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
          Ready to Make Your Packaging Unforgettable?
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-2">
          Your product deserves to be presented well. Let's build packaging
          that makes people stop, look, and remember your brand.
        </p>
        <p className="text-primary-foreground/90 text-lg mb-8">
          Get started today and enjoy free design + free shipping on your
          first order.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:+19048999020">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5 mr-2" />
              (904) 899-9020
            </Button>
          </a>
          <a href="mailto:sales@custompackagingline.com">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              sales@custompackagingline.com
            </Button>
          </a>
        </div>
        <Link to="/custom-boxes">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover"
          >
            Get Your Free Quote
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default AboutUs;
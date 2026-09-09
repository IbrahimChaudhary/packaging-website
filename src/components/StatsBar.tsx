import React from "react";

const promoText =
  "Get fast delivery in just 7 days 🕛 and enjoy an exclusive 20% discount on your first order! Don't miss out, order today! 🎉";

const seoContent = (
  <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-16 md:mt-24">
    
    {/* Column 1: Brand Story */}
    <div className="space-y-6">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
        The Custom Packaging That Builds Your Brand
      </h2>
      <p className="text-lg font-medium text-foreground">
        Three generations. Thirty years. One family passion for packaging done right.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Custom Packaging began as a family trade and evolved into a company built
        on craftsmanship and a commitment to helping businesses succeed. We believe packaging is more than a box—it is the
        first thing your customer sees, tells your brand's story, and helps your product stand out in a competitive market.
      </p>
    </div>

    {/* Column 2: Value Proposition (Styled as a premium card) */}
    <div className="flex flex-col">
      <div className="bg-muted/50 border border-border/50 rounded-3xl p-8 flex-1 shadow-sm">
        <h3 className="text-xl font-bold text-foreground tracking-tight mb-4 flex items-center gap-3">
          Packaging Made Simple
        </h3>
        <p className="text-muted-foreground mb-6">
          From concept to delivery, we make custom packaging stress-free with the support and tools needed to bring your vision to life.
        </p>
        <ul className="space-y-4">
          {[
            "Professional design support tailored to your brand",
            "Free 3D mockups for visualization before production",
            "Transparent pricing with zero hidden costs",
            "Fast production times and reliable delivery",
            "Flexible quantities for businesses at every stage",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Column 3: Conclusion & Trust */}
    <div className="space-y-6">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-2">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-foreground tracking-tight">
        Quality You Can Trust
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Whether you need custom boxes, luxury rigid packaging, or flexible shipping solutions, every order is produced
        using durable materials and advanced printing techniques. 
      </p>
      
      {/* Accent Quote Box */}
      <div className="mt-8 p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <p className="relative z-10 font-medium leading-relaxed text-sm md:text-base">
          "We are more than a manufacturer; we are a partner invested in your success, dedicated to creating packaging that makes a lasting impression."
        </p>
      </div>
    </div>
  </article>
);

const productImages = [
  { src: "/images/categories/cosmetic_1.jpg", alt: "Custom cosmetic packaging" },
  { src: "/images/categories/candle_1.jpg", alt: "Custom candle packaging" },
  { src: "/images/categories/gift_1.jpg", alt: "Premium gift packaging" },
  { src: "/images/categories/soap_1.jpg", alt: "Artisan soap packaging" },
  { src: "/images/categories/perfume_1.jpg", alt: "Luxury perfume packaging" },
];

const StatsBar = () => (
  <section className="py-20 md:py-32 bg-background relative selection:bg-primary/20">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      
      {/* Minimalist Section Header */}
      <header className="text-center mb-16 md:mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-foreground font-semibold text-xs uppercase tracking-[0.2em] mb-6">
          About Us
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] max-w-4xl mx-auto">
          Your One-Stop Custom Packaging Solution
        </h2>
      </header>

      {/* Premium Bento Box Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 lg:gap-6 h-[500px] md:h-[600px]">
        
        {/* Large Feature Image (Spans 2 columns & 2 rows on desktop) */}
        <figure className="relative md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl group shadow-sm border border-border/40">
          <img
            src={productImages[0].src}
            alt={productImages[0].alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </figure>

        {/* Small Images */}
        {productImages.slice(1).map((image, i) => (
          <figure 
            key={i} 
            className="hidden md:block relative overflow-hidden rounded-2xl group shadow-sm border border-border/40"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      {/* Mobile Image Fallback Carousel */}
      <div className="flex md:hidden gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mt-24 relative z-10 px-4 -mx-4">
        {productImages.slice(1).map((image, i) => (
          <figure key={i} className="h-48 w-[70%] flex-shrink-0 snap-center overflow-hidden rounded-2xl shadow-md border border-border/40">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      {/* Editorial SEO Content */}
      {seoContent}

    </div>
  </section>
);

export default StatsBar;
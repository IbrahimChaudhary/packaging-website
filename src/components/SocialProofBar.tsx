import { Star } from "lucide-react";

const brands = [
  { name: "BioMedical Pharm", src: "https://logo.clearbit.com/biomedical.com" },
  { name: "BMW", src: "https://logo.clearbit.com/bmw.com" },
  { name: "Cheekbone", src: "https://logo.clearbit.com/cheekbonebeauty.com" },
  { name: "CHOMP!", src: "https://logo.clearbit.com/chomps.com" },
  { name: "Everlywell", src: "https://logo.clearbit.com/everlywell.com" },
  { name: "Hims", src: "https://logo.clearbit.com/forhims.com" },
];

const SocialProofBar = () => (
  <div className="w-full bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4 py-3">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
        {/* Left: customer count */}
        <p className="text-sm font-semibold text-foreground whitespace-nowrap">
          Serving 5000+ Happy Customers!
        </p>

        {/* Middle: Trustpilot rating */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="w-5 h-5 bg-[#00b67a] flex items-center justify-center"
              >
                <Star className="w-3.5 h-3.5 fill-white text-white" />
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">Trustpilot</span>
          <a
            href="#"
            className="text-sm font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors"
          >
            4.9 Google Reviews
          </a>
        </div>

        {/* Right: brand logos */}
        <div className="flex items-center gap-6 flex-wrap justify-center opacity-50 grayscale">
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.src}
              alt={b.name}
              className="h-5 md:h-6 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SocialProofBar;